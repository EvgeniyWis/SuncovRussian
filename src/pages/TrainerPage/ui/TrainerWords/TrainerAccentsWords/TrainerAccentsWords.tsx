import { Flex } from '@/shared/lib/Stack';
import {
  wordActionsFunctionExtendType,
  wordActionsFunctionType,
} from '../../../lib/hooks/useWordActions';
import { AccentsWordsInterface } from '../../../model/types/accents';
import * as styles from './TrainerAccentsWords.module.scss';
import { memo, useContext, useEffect, useRef, useState } from 'react';
import { vowelsArray } from '@/shared/const/global';
import { useTrainerWords } from '../../../model/selectors/getTrainerWords/getTrainerWords';
import { TrainerPageContext } from '../../../model/context/TrainerPageContext';
import { letterOnClickHandler } from './lib/helpers/letterOnClickHandler/letterOnClickHandler';
import { arrowsHandler } from './lib/helpers/arrowsHandler/arrowsHandler';
import {
  addRefEventListener,
  deleteRefEventListener,
} from '@/shared/utils/eventListeners';
import { enterHandler } from './lib/helpers/enterHandler/enterHandler';

export interface TrainerAccentsWordsProps {
  randomWord: AccentsWordsInterface;
  onSuccess: wordActionsFunctionType;
  onFail: wordActionsFunctionExtendType;
}

export const TrainerAccentsWords: React.FC<TrainerAccentsWordsProps> = memo(
  ({ randomWord, onSuccess, onFail }): React.JSX.Element => {
    // Получаем нужные данные
    const storeWords = useTrainerWords();
    const { isErrorWork, isIncorrect } = useContext(TrainerPageContext);

    // Стейт для неправильной гласной
    const [incorrectVowelIndex, setIncorrectVowelIndex] = useState<number>();

    // Добавление слушателя событий для стрелок
    const arrowsEventListenerRef = useRef<((e: KeyboardEvent) => void) | null>(
      null,
    );

    useEffect(() => {
      addRefEventListener(arrowsEventListenerRef, 'keydown', arrowsHandler);

      return () => {
        deleteRefEventListener(arrowsEventListenerRef, 'keydown');
      };
    }, []);

    // Добавление слушателя событий для Enter
    const enterEventListenerRef = useRef<((e: KeyboardEvent) => void) | null>(
      null,
    );

    useEffect(() => {
      addRefEventListener(enterEventListenerRef, 'keydown', enterHandler);

      return () => {
        deleteRefEventListener(enterEventListenerRef, 'keydown');
      };
    }, []);

    return (
      <Flex maxHeight width="100" direction="column" gap="20" justify="center">
        <Flex>
          {randomWord.word.split('').map((letter, index) => {
            // Строка для дата-атрибутов
            const dataString: string = vowelsArray.includes(letter)
              ? 'TrainerAccentsWords__vowel'
              : '';

            // Проверка на гласную
            const isVowel = vowelsArray.includes(letter);

            // Проверка на первую гласную
            const isFirstVowel =
              isVowel &&
              !randomWord.word
                .slice(0, index)
                .split('')
                .some((l) => vowelsArray.includes(l));

            return (
              <Flex
                tabIndex={0}
                data-is-focused={isFirstVowel ? 'true' : 'false'}
                data-testid={dataString}
                data-name={dataString}
                className={`${styles.TrainerAccentsWords__letterWrapper}
              ${isVowel ? styles.TrainerAccentsWords__letterWrapper__vowel : ''}
              ${isIncorrect && incorrectVowelIndex === index ? styles.TrainerAccentsWords__letterWrapper__vowel__incorrect : ''}
              ${isIncorrect && randomWord.accentIndex === index + 1 ? styles.TrainerAccentsWords__letterWrapper__vowel__correct : ''}`}
                justify="center"
                // eslint-disable-next-line react/no-array-index-key
                key={randomWord.id + index}
                onClick={
                  isVowel
                    ? () =>
                        letterOnClickHandler(
                          { randomWord, onSuccess, onFail },
                          index,
                          storeWords,
                          isErrorWork,
                          setIncorrectVowelIndex,
                        )
                    : undefined
                }
              >
                <span
                  data-testid="TrainerAccentsWords__letter"
                  className={styles.TrainerAccentsWords__letter}
                >
                  {letter}
                </span>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    );
  },
);

TrainerAccentsWords.displayName = 'TrainerAccentsWords';
