import { Flex } from '@/shared/lib/Stack';
import {
  wordActionsFunctionExtendType,
  wordActionsFunctionType,
} from '../../../lib/hooks/useWordActions';
import { AccentsWordsInterface } from '../../../model/types/accents';
import * as styles from './TrainerAccentsWords.module.scss';
import { memo, useContext, useState } from 'react';
import { vowelsArray } from '@/shared/const/global';
import { useTrainerWords } from '../../../model/selectors/getTrainerWords/getTrainerWords';
import { TrainerPageContext } from '../../../model/context/TrainerPageContext';
import { letterOnClickHandler } from './letterOnClickHandler/letterOnClickHandler';

// TODO: написать тесты

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

    return (
      <Flex maxHeight width="100" direction="column" gap="20" justify="center">
        <Flex>
          {randomWord.word.split('').map((letter, index) => (
            <Flex
              className={`${styles.TrainerAccentsWords__letterWrapper}
              ${vowelsArray.includes(letter) ? styles.TrainerAccentsWords__letterWrapper__vowel : ''}
              ${isIncorrect && incorrectVowelIndex === index ? styles.TrainerAccentsWords__letterWrapper__vowel__incorrect : ''}
              ${isIncorrect && randomWord.accentIndex === index + 1 ? styles.TrainerAccentsWords__letterWrapper__vowel__correct : ''}`}
              justify="center"
              // eslint-disable-next-line react/no-array-index-key
              key={randomWord.id + index}
              onClick={
                vowelsArray.includes(letter)
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
              <span className={styles.TrainerAccentsWords__letter}>
                {letter}
              </span>
            </Flex>
          ))}
        </Flex>
      </Flex>
    );
  },
);

TrainerAccentsWords.displayName = 'TrainerAccentsWords';
