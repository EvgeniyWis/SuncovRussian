import { UnionsWordsInterface } from '../../../model/types/unions';
import { PrimaryWordsInterface } from '../../../model/types/primary';
import {
  TrainerWordsType,
  WordsForTrainersItem,
  WordsForTrainersTypes,
} from '../../../model/types/types';
import { ChoiceWordInterface } from '../../../model/types/choice';

interface GenerateBlockWithUncorrectWordProps {
  wordObject: WordsForTrainersTypes;
  words: WordsForTrainersItem;
  type: TrainerWordsType;
  word: string;
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
    type: 'unions',
    word: (word as UnionsWordsInterface).word,
    validWord: (word as UnionsWordsInterface).unionType,
  },

  {
    type: 'choice',
    word: (word as ChoiceWordInterface).word,
    validWord: (word as ChoiceWordInterface).choiceWord,
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
