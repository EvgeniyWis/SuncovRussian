import { Fragment } from 'react/jsx-runtime';
import { WithMissedLettersWordsInterface } from '../../../../model/types/withMissedLetters';
import * as styles from '../ui/TrainerWithMissedLettersWords.module.scss';

type wordVariant = 'medium' | 'small';

export const renderCorrectWord = (
  randomWord: WithMissedLettersWordsInterface,
  variant: wordVariant = 'medium',
) => (
  <span className={styles[`TrainerWithMissedLettersWords__letter__${variant}`]}>
    {randomWord.missedLettersIndexes &&
      randomWord.word.split('').map((letter, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Fragment key={index}>
          {randomWord.missedLettersIndexes.includes(index + 1) ? (
            <span
              className={styles.TrainerWithMissedLettersWords__correctLetter}
            >
              {letter}
            </span>
          ) : (
            letter
          )}
        </Fragment>
      ))}
  </span>
);
