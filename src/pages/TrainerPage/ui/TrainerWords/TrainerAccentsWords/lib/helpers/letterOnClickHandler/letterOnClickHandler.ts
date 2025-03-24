import { WordsForTrainersTypes } from '../../../../../../model/types/types';
import { TrainerAccentsWordsProps } from '../../../TrainerAccentsWords';

export const letterOnClickHandler = (
  params: TrainerAccentsWordsProps,
  letterIndex: number,
  storeWords: WordsForTrainersTypes[],
  isErrorWork: boolean,
  setIncorrectVowelIndex: React.Dispatch<
    React.SetStateAction<number | undefined>
  >,
) => {
  return params.randomWord.accentIndex === letterIndex + 1
    ? params.onSuccess(storeWords, isErrorWork, params.randomWord.id)
    : (() => {
        setIncorrectVowelIndex(letterIndex);

        params.onFail(storeWords, isErrorWork, params.randomWord.id, 'accents');
      })();
};
