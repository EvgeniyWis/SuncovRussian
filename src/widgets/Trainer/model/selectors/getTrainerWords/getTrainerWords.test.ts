import { StateSchema } from '@/app/store/types';
import { wordsForAccentsTests } from '../../static/wordsForAccentsTests';
import { getWords } from './getTrainerWords';
import { wordsForUnionsTests } from '../../static/wordsForUnionsTests';

describe('getWords', () => {
  test('should return trainer test words', () => {
    const initialStateWithAccentsTests: DeepPartial<StateSchema> = {
      Trainer: {
        words: wordsForAccentsTests,
      },
    };

    const initialStateWithUnionsTests: DeepPartial<StateSchema> = {
      Trainer: {
        words: wordsForUnionsTests,
      },
    };

    expect(getWords(initialStateWithAccentsTests as StateSchema)).toBe(
      wordsForAccentsTests,
    );
    expect(getWords(initialStateWithUnionsTests as StateSchema)).toBe(
      wordsForUnionsTests,
    );
  });
});