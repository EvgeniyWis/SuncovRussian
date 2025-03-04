import {
  TrainerWordsType,
  WordsForTrainersTypes,
} from '../../../../model/types/types';

export type wordActionsFunctionType = (
  words: WordsForTrainersTypes[],
  isErrorWork: boolean,
  randomWordId: number | null,
) => void;

export type wordActionsFunctionExtendType = (
  ...args: [
    ...Parameters<wordActionsFunctionType>,
    type: TrainerWordsType,
    elemForClick?: HTMLElement | Document,
  ]
) => void;

export interface UseWordActionsResult {
  showNewWord: wordActionsFunctionType;
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordActionsFunctionExtendType;
}
