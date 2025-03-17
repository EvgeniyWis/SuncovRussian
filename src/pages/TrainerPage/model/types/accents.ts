import { TrainerWordsInterface, WordsForTrainersGeneralItem } from './types';

export interface AccentsWordsInterface extends TrainerWordsInterface {
  word: string;
  accentIndex: number;
}

export interface AccentsWordsForTrainersItem
  extends WordsForTrainersGeneralItem {
  type: 'accents';
  items: AccentsWordsInterface[];
}
