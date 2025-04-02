import { TrainerWordsInterface, WordsForTrainersGeneralItem } from './types';

export interface ViewsWordsInterface extends TrainerWordsInterface {
  word: string;
  viewType: string;
}

export interface ViewsWordsForTrainersItem extends WordsForTrainersGeneralItem {
  type: 'views';
  items: ViewsWordsInterface[];
}
