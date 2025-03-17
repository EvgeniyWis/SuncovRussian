import { MissedLetterInputProvider } from '@/shared/ui/MissedLetterInput';
import {
  wordActionsFunctionType,
  wordActionsFunctionExtendType,
} from '../lib/hooks/useWordActions';
import {
  ChoiceWordInterface,
  ChoiceWordsForTrainersItem,
} from '../model/types/choice';
import { PrimaryWordsInterface } from '../model/types/primary';
import {
  TrainerWordsType,
  WordsForTrainersItem,
  WordsForTrainersTypes,
} from '../model/types/types';
import { UnionsWordsInterface } from '../model/types/unions';
import { WithMissedLettersWordsInterface } from '../model/types/withMissedLetters';
import { TrainerChoiceWords } from '../ui/TrainerWords/TrainerChoiceWords/TrainerChoiceWords';
import { TrainerPrimaryWords } from '../ui/TrainerWords/TrainerPrimaryWords/TrainerPrimaryWords';
import { TrainerUnionsWords } from '../ui/TrainerWords/TrainerUnionsWords/TrainerUnionsWords';
import { TrainerWithMissedLettersWords } from '../ui/TrainerWords/TrainerWithMissedLettersWords';
import { TrainerAccentsWords } from '../ui/TrainerWords/TrainerAccentsWords/TrainerAccentsWords';
import { AccentsWordsInterface } from '../model/types/accents';

type TrainerWords = {
  [key in TrainerWordsType]: React.ReactNode;
};

export const generateTrainerWords = (
  randomWord: WordsForTrainersTypes,
  randomWordsIsReverse: boolean,
  wordOnFail: wordActionsFunctionExtendType,
  wordOnSuccess: wordActionsFunctionType,
  words: WordsForTrainersItem,
  showNewWord: wordActionsFunctionType,
): TrainerWords => {
  return {
    primary: (
      <TrainerPrimaryWords
        randomWord={randomWord as PrimaryWordsInterface}
        randomWordsIsReverse={randomWordsIsReverse}
        wordOnFail={wordOnFail}
        wordOnSuccess={wordOnSuccess}
      />
    ),

    unions: (
      <TrainerUnionsWords
        randomWord={randomWord as UnionsWordsInterface}
        wordOnSuccess={wordOnSuccess}
        wordOnFail={wordOnFail}
      />
    ),

    choice: (
      <TrainerChoiceWords
        randomWord={randomWord as ChoiceWordInterface}
        categories={(words as ChoiceWordsForTrainersItem).categories}
        wordOnSuccess={wordOnSuccess}
        wordOnFail={wordOnFail}
        showNewWord={showNewWord}
      />
    ),

    withMissedLetters: (
      <MissedLetterInputProvider>
        <TrainerWithMissedLettersWords
          randomWord={randomWord as WithMissedLettersWordsInterface}
          wordOnSuccess={wordOnSuccess}
          wordOnFail={wordOnFail}
        />
      </MissedLetterInputProvider>
    ),

    accents: (
      <TrainerAccentsWords
        randomWord={randomWord as AccentsWordsInterface}
        wordOnSuccess={wordOnSuccess}
        wordOnFail={wordOnFail}
      />
    ),
  };
};
