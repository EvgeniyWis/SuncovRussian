import { AccentsWordsForTrainersItem, AccentsWordsInterface } from './accents';
import { ChoiceWordInterface, ChoiceWordsForTrainersItem } from './choice';
import { PrimaryWordsForTrainersItem, PrimaryWordsInterface } from './primary';
import { ViewsWordsForTrainersItem, ViewsWordsInterface } from './views';
import {
  WithMissedLettersWordsForTrainersItem,
  WithMissedLettersWordsInterface,
} from './withMissedLetters';

export type TrainerWordsType =
  | 'views'
  | 'primary'
  | 'choice'
  | 'withMissedLetters'
  | 'accents';

export interface TrainerWordsInterface {
  id: number;
  probability?: number;
  uncorrectTimes?: number;
  consecutivelyTimes?: number;
  inProgress?: boolean;
}

export type WordsForTrainersTypes =
  | TrainerWordsInterface
  | PrimaryWordsInterface
  | ViewsWordsInterface
  | ChoiceWordInterface
  | WithMissedLettersWordsInterface
  | AccentsWordsInterface;

export interface WordsForTrainersGeneralItem {
  type: TrainerWordsType;
  inHeader: boolean;
  items: WordsForTrainersTypes[];
}

export type WordsForTrainersItem =
  | PrimaryWordsForTrainersItem
  | ViewsWordsForTrainersItem
  | ChoiceWordsForTrainersItem
  | WithMissedLettersWordsForTrainersItem
  | AccentsWordsForTrainersItem;

export type WordsForTrainers = {
  [key in string]: WordsForTrainersItem;
};
