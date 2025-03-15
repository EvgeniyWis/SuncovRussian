import { wordsForTrainers } from '../../static/wordsForTrainers';
import { getTrainerWords } from './getTrainerWords';
import { StateSchema } from '@/shared/lib/store';

describe('getTrainerWords', () => {
  test('should return trainer test words', () => {
    const initialStateWithPrimaryTests: DeepPartial<StateSchema> = {
      Trainer: {
        words: wordsForTrainers['Ударения'].items,
      },
    };

    expect(getTrainerWords(initialStateWithPrimaryTests as StateSchema)).toBe(
      wordsForTrainers['Ударения'].items,
    );
  });
});
