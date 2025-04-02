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
import { WithMissedLettersWordsInterface } from '../model/types/withMissedLetters';
import { TrainerChoiceWords } from '../ui/TrainerWords/TrainerChoiceWords/TrainerChoiceWords';
import { TrainerPrimaryWords } from '../ui/TrainerWords/TrainerPrimaryWords/TrainerPrimaryWords';
import { TrainerWithMissedLettersWords } from '../ui/TrainerWords/TrainerWithMissedLettersWords';
import { TrainerAccentsWords } from '../ui/TrainerWords/TrainerAccentsWords/TrainerAccentsWords';
import { AccentsWordsInterface } from '../model/types/accents';
import { ViewsWordsInterface } from '../model/types/views';
import { TrainerViewsWords } from '../ui/TrainerWords/TrainerViewsWords/TrainerViewsWords';

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

    views: (
      <TrainerViewsWords
        randomWord={randomWord as ViewsWordsInterface}
        wordOnSuccess={wordOnSuccess}
        wordOnFail={wordOnFail}
        viewsTypes={Array.from(
          new Set(
            (words.items as ViewsWordsInterface[]).map((item) => item.viewType),
          ),
        )}
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
        onSuccess={wordOnSuccess}
        onFail={wordOnFail}
      />
    ),
  };
};
