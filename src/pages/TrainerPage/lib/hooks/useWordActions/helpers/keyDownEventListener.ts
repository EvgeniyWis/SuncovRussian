import { funcOnKeyDown } from '@/shared/utils/funcOnKeyDown';
import { wordActionsFunctionType } from '../types/types';
import { WordsForTrainersTypes } from '../../../../model/types/types';

export const keyDownEventListener = (
  e: KeyboardEvent,
  showNewWord: wordActionsFunctionType,
  words: WordsForTrainersTypes[],
  isErrorWork: boolean,
  randomWordId: number | null,
) =>
  funcOnKeyDown(
    e,
    () => showNewWord(words, isErrorWork, randomWordId),
    'Enter',
  );
