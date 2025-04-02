import { ViewsWordsInterface } from '../../../model/types/views';
import { PrimaryWordsInterface } from '../../../model/types/primary';
import {
  TrainerWordsType,
  WordsForTrainersItem,
  WordsForTrainersTypes,
} from '../../../model/types/types';
import { ChoiceWordInterface } from '../../../model/types/choice';
import { WithMissedLettersWordsInterface } from '../../../model/types/withMissedLetters';
import { renderCorrectWord } from '../../TrainerWords/TrainerWithMissedLettersWords/lib/renderCorrectWord';
import { AccentsWordsInterface } from '../../../model/types/accents';

interface GenerateBlockWithUncorrectWordProps {
  wordObject: WordsForTrainersTypes;
  words: WordsForTrainersItem;
  type: TrainerWordsType;
  word: string | React.ReactNode;
  validWord?: string;
}

// Массив для генерации блоков неправильных слов
export const generateBlockWithUncorrectWordArray = (
  word: WordsForTrainersTypes,
): Omit<GenerateBlockWithUncorrectWordProps, 'wordObject' | 'words'>[] => [
  {
    type: 'primary',
    word: (word as PrimaryWordsInterface).valid,
  },

  {
    type: 'views',
    word: (word as ViewsWordsInterface).word,
    validWord: (word as ViewsWordsInterface).viewType,
  },

  {
    type: 'choice',
    word: (word as ChoiceWordInterface).word,
    validWord: (word as ChoiceWordInterface).choiceWord,
  },

  {
    type: 'withMissedLetters',
    word: renderCorrectWord(word as WithMissedLettersWordsInterface, 'small'),
  },

  {
    type: 'accents',
    word:
      (word as AccentsWordsInterface).word &&
      (word as AccentsWordsInterface).word.slice(
        0,
        (word as AccentsWordsInterface).accentIndex,
      ) +
        '́' +
        (word as AccentsWordsInterface).word.slice(
          (word as AccentsWordsInterface).accentIndex,
        ),
  },
];

// Генерация блока неправильного слова для каждого типа
export const generateBlockWithUncorrectWord = ({
  wordObject,
  words,
  type,
  word,
  validWord,
}: GenerateBlockWithUncorrectWordProps) => {
  return (
    <>
      {words.type === type && (
        <>
          {word} -{' '}
          {wordObject.uncorrectTimes +
            ' ' +
            ([2, 3, 4].includes(wordObject.uncorrectTimes!) ? 'раза' : 'раз')}
          {validWord && <span> (Правильно: {validWord})</span>}
        </>
      )}
    </>
  );
};
