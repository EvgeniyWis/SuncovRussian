import { buildSelector } from '@/shared/lib/store';
import { WordsForTrainersTypes } from '../../types/types';

export const [useTrainerWords, getTrainerWords] = buildSelector<
  WordsForTrainersTypes[]
>((state) => {
  if (!state.Trainer) return [];

  return state.Trainer.words;
}, true);
