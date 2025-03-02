import { WordsForTrainersTypes } from '../../../../model/types/types';

export type wordActionsFunctionType = (
  words: WordsForTrainersTypes[],
  isErrorWork: boolean,
  randomWordId: number | null,
) => void;

export type wordActionsFunctionTypeWithElemForClick = (
  ...args: [
    ...Parameters<wordActionsFunctionType>,
    elemForClick?: HTMLElement | Document,
  ]
) => void;

export interface UseWordActionsResult {
  showNewWord: wordActionsFunctionTypeWithElemForClick;
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordActionsFunctionTypeWithElemForClick;
  waitRepeatedClickInFail: boolean;
}
