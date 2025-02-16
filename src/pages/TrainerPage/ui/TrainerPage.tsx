import { Flex } from '@/shared/lib/Stack';
import {
  PrimaryWordsInterface,
  WordsForTrainersItem,
} from '../model/types/types';
import * as styles from './TrainerPage.module.scss';
import { DynamicModuleLoader } from '@/shared/lib/DynamicModuleLoader';
import { Hint } from '@/shared/ui/Hint';
import { memo, useState, useContext, useEffect } from 'react';
import { Page } from '@/widgets/Page';
import { TrainerPageContext } from '../model/context/TrainerPageContext';
import { useWords } from '../model/selectors/getTrainerWords/getTrainerWords';
import { TrainerReducer } from '../model/slice/TrainerPageSlice';
import { TrainerTotalResult } from './TrainerTotalResult/TrainerTotalResult';
import { UnionsTrainerWords } from './UnionsTrainerWords/UnionsTrainerWords';
import { useRandomWord } from '../lib/hooks/useRandomWord';
import { useWordActions } from '../lib/hooks/useWordActions';
import { useInitializeWords } from '../lib/hooks/useInitializeWords';
import { UnionsWordsInterface } from '../model/types/unions';
import { PrimaryTrainerWords } from './PrimaryTrainerWords/PrimaryTrainerWords';
import { TrainerProgressBar } from './TrainerProgressBar/TrainerProgressBar';
import { TrainerModeSwitcher } from './TrainerModeSwitcher/TrainerModeSwitcher';
import { useArrowsActions } from '../lib/hooks/useArrowsActions';

export interface TrainerPageProps {
  words: WordsForTrainersItem;
  theme: string;
}

const TrainerInner: React.FC<TrainerPageProps> = memo(
  ({ words, theme }): React.JSX.Element => {
    // Инициализация данных, хуков, контекста
    const [randomWordId, setRandomWordId] = useState<number | null>(null);

    const [randomWordsIsReverse, setRandomWordsIsReverse] =
      useState<boolean>(false);

    const { randomWord, updateRandomWord } = useRandomWord(
      randomWordId,
      setRandomWordsIsReverse,
      setRandomWordId,
    );

    const {
      totalTime,
      setIsIncorrect,
      isIncorrect,
      setIsErrorWork,
      setTotalTime,
    } = useContext(TrainerPageContext);

    useEffect(() => {
      if (!randomWord) setRandomWordId(0);
    }, [randomWord, randomWordId]);

    // Появление плашки "Неверно"
    const { wordOnFail, wordOnSuccess } = useWordActions(
      randomWordId,
      setRandomWordsIsReverse,
      setRandomWordId,
      setIsIncorrect,
    );

    // Получение случайного слова
    const storeWords = useWords();

    useEffect(() => {
      if (storeWords.length && randomWordId === null) {
        updateRandomWord();
      }
    }, [randomWordId, storeWords, updateRandomWord]);

    // При нажатии на стрелочки, фокус падает на соответствующее слово
    const { checkArrowsPress } = useArrowsActions(
      randomWordId,
      setRandomWordId,
      setRandomWordsIsReverse,
      setIsIncorrect,
      randomWordsIsReverse,
    );

    useEffect(() => {
      document.onkeydown = (e) => checkArrowsPress(e, words);

      return () => {
        document.onkeydown = null;
      };
    }, [checkArrowsPress, words]);

    // Инициализация слов
    const { initializeWords } = useInitializeWords(words.items);

    useEffect(() => {
      const timeoutForInitializeWords = setTimeout(() => {
        setIsIncorrect(false);
        setIsErrorWork(false);
        setTotalTime(0);
        initializeWords();
        clearTimeout(timeoutForInitializeWords);
      }, 0);
    }, [initializeWords, setIsErrorWork, setIsIncorrect, setTotalTime]);

    return (
      <Page className={styles.TrainerPage}>
        {storeWords.length > 0 && (
          <>
            {!totalTime ? (
              <>
                {words.type === 'primary' && (
                  <Flex width="100">
                    <Hint
                      text={`Выбирайте ответ, а система будет предлагать новые слова или
                    те, в которых были допущены ошибки. Когда вы перестанете их
                    допускать, шкала полностью заполнится. Заполните шкалу
                    несколько раз, сделайте работу над ошибками - и вы готовы.`}
                      textClassName={styles.TrainerPage__hint}
                    />
                  </Flex>
                )}

                {words.type === 'unions' && (
                  <Flex width="100">
                    <Hint
                      text={`В этом тренажере под подчинительным союзом понимается любое
                    средство подчинительной связи, т.е. союз, союзное слово,
                    частица`}
                      textClassName={styles.TrainerPage__hint}
                    />
                  </Flex>
                )}

                {isIncorrect && (
                  <Flex
                    className={styles.TrainerPage__uncorrect}
                    data-testid="Trainer__uncorrect"
                    justify="center"
                  >
                    Неверно
                  </Flex>
                )}

                {randomWord && (
                  <>
                    {words.type === 'primary' && (
                      <PrimaryTrainerWords
                        randomWord={randomWord as PrimaryWordsInterface}
                        randomWordsIsReverse={randomWordsIsReverse}
                        wordOnFail={wordOnFail}
                        wordOnSuccess={wordOnSuccess}
                      />
                    )}

                    {words.type === 'unions' && (
                      <UnionsTrainerWords
                        randomWord={randomWord as UnionsWordsInterface}
                        wordOnSuccess={wordOnSuccess}
                        wordOnFail={wordOnFail}
                      />
                    )}
                  </>
                )}

                <TrainerProgressBar />
                <TrainerModeSwitcher />
              </>
            ) : (
              <TrainerTotalResult
                words={words}
                updateRandomWord={updateRandomWord}
                theme={theme}
              />
            )}
          </>
        )}
      </Page>
    );
  },
);

TrainerInner.displayName = 'TrainerInner';

export const TrainerPage: React.FC<TrainerPageProps> = memo(
  ({ words, theme }): React.JSX.Element => {
    // Настройка контекста
    const [totalTime, setTotalTime] = useState<number>(0);
    const [isIncorrect, setIsIncorrect] = useState<boolean>(false);
    const [isErrorWork, setIsErrorWork] = useState<boolean>(false);
    const [isOneLifeMode, setIsOneLifeMode] = useState<boolean>(false);
    const [isCheckMode, setIsCheckMode] = useState<boolean>(false);
    const [allAttemptsCount, setAllAttemptsCount] = useState<number>(0);

    return (
      <TrainerPageContext.Provider
        value={{
          totalTime,
          setTotalTime,
          isIncorrect,
          setIsIncorrect,
          isErrorWork,
          setIsErrorWork,
          isOneLifeMode,
          setIsOneLifeMode,
          isCheckMode,
          setIsCheckMode,
          allAttemptsCount,
          setAllAttemptsCount,
        }}
      >
        <DynamicModuleLoader
          removeAfterUnmount={false}
          reducers={{ Trainer: TrainerReducer }}
        >
          <TrainerInner words={words} theme={theme} />
        </DynamicModuleLoader>
      </TrainerPageContext.Provider>
    );
  },
);

TrainerPage.displayName = 'TrainerPage';
