import { Flex } from '@/shared/lib/Stack';
import * as styles from './TrainerTotalResult.module.scss';
import { Fragment, memo, useCallback, useContext, useMemo } from 'react';
import { useTrainerWords } from '../../model/selectors/getTrainerWords/getTrainerWords';
import {
  TrainerWordsType,
  WordsForTrainersItem,
  WordsForTrainersTypes,
} from '../../model/types/types';
import { TrainerPageContext } from '../../model/context/TrainerPageContext';
import { useTrainerActions } from '../../model/slice/TrainerPageSlice';
import { useInitializeWords } from '../../lib/hooks/useInitializeWords';
import { Button } from '@/shared/ui/Button/ui/Button';
import {
  generateBlockWithUncorrectWord,
  generateBlockWithUncorrectWordArray,
} from './lib/generateBlockWithUncorrectWord';

interface TrainerTotalResultProps {
  updateRandomWord: (words?: WordsForTrainersTypes[]) => void;
  words: WordsForTrainersItem;
  theme: string;
  type: TrainerWordsType;
}

export const TrainerTotalResult: React.FC<TrainerTotalResultProps> = memo(
  ({ updateRandomWord, words, theme, type }): React.JSX.Element => {
    // Получение режимов, с которыми пользователь прошёл тренажёр и кол-ва ошибок
    const {
      isCheckMode,
      isOneLifeMode,
      allAttemptsCount,
      setAllAttemptsCount,
    } = useContext(TrainerPageContext);

    // Инициализация хуков и контекста
    const storeWords = useTrainerWords();
    const { setWords } = useTrainerActions();

    const { totalTime, setTotalTime, isErrorWork, setIsErrorWork } =
      useContext(TrainerPageContext);

    // Высчитывание данных для общего времени
    const totalTimeMinutes = useMemo(
      () => Math.round(totalTime / 60000),
      [totalTime],
    );

    const totalTimeSeconds = useMemo(
      () => Math.round((totalTime / 1000) % 60),
      [totalTime],
    );

    // Отображение неправильных ответов
    const wordsWithUncorrectTimes = useMemo(
      () =>
        storeWords
          .filter((word) => word.uncorrectTimes! > 0)
          .sort((a, b) => b.uncorrectTimes! - a.uncorrectTimes!),
      [storeWords],
    );

    // Переход ко второму раунду
    const startErrorWork = useCallback(() => {
      setIsErrorWork(true);

      const UpdatedWordsWithUncorrectTimes = wordsWithUncorrectTimes.map(
        (word) => ({
          ...word,
          probability: 1,
          uncorrectTimes: 0,
          consecutivelyTimes: 0,
          inProgress: false,
        }),
      );

      setWords(UpdatedWordsWithUncorrectTimes);
      setTotalTime(0);
      setAllAttemptsCount(0);

      updateRandomWord(UpdatedWordsWithUncorrectTimes);
    }, [
      setAllAttemptsCount,
      setIsErrorWork,
      setTotalTime,
      setWords,
      updateRandomWord,
      wordsWithUncorrectTimes,
    ]);

    // Очистка результатов при нажатии "Повторить"
    const { initializeWords } = useInitializeWords(words.items);

    const Retry = useCallback(() => {
      initializeWords();
      setTotalTime(0);
      setIsErrorWork(false);
      setAllAttemptsCount(0);
    }, [initializeWords, setAllAttemptsCount, setIsErrorWork, setTotalTime]);

    return (
      <Flex
        className={styles.TrainerTotalResult__wrapper}
        justify="between"
        direction="column"
        width="100"
        maxHeight
      >
        <span className={styles.TrainerTotalResult__totalTime}>
          Общее время:{' '}
          {`${totalTimeMinutes < 10 ? '0' : ''}${totalTimeMinutes}`}:
          {`${totalTimeSeconds < 10 ? '0' : ''}${totalTimeSeconds}`}
        </span>

        {isOneLifeMode && (
          <span className={styles.TrainerTotalResult__extraText}>
            Количество попыток: {allAttemptsCount}
          </span>
        )}

        <span className={styles.TrainerTotalResult__extraText}>
          Тема: {theme}
        </span>

        {(isCheckMode || isOneLifeMode) && (
          <span className={styles.TrainerTotalResult__extraText}>
            Режим: «{isCheckMode ? 'Проверка' : 'Одна жизнь'}»
          </span>
        )}

        {wordsWithUncorrectTimes.length > 0 && !isOneLifeMode ? (
          <Flex
            className={styles.TrainerTotalResult__textWrapper}
            gap="20"
            justify="between"
            direction="column"
          >
            <Flex direction="column">
              <span className={styles.TrainerTotalResult__totalTime}>
                Ошибки:
              </span>

              <Flex direction="column" gap="3" width="100">
                {wordsWithUncorrectTimes.map((word) => (
                  <span
                    className={styles.TrainerTotalResult__wordWithError}
                    key={word.id}
                  >
                    {(() => {
                      const item = generateBlockWithUncorrectWordArray(
                        word,
                      ).find((item) => item.type === type)!;

                      return (
                        <>
                          {generateBlockWithUncorrectWord({
                            wordObject: word,
                            words,
                            type: item.type,
                            word: item.word,
                            validWord: item.validWord,
                          })}
                        </>
                      );
                    })()}
                  </span>
                ))}
              </Flex>
            </Flex>

            {!isErrorWork && (
              <Button onClick={startErrorWork} type="button">
                Работа над ошибками
              </Button>
            )}
          </Flex>
        ) : (
          <Button onClick={Retry} type="button">
            Повторить
          </Button>
        )}
      </Flex>
    );
  },
);

TrainerTotalResult.displayName = 'TrainerTotalResult';
