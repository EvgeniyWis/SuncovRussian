import { renderWithProviders } from '@/shared/tests/renderWithProviders';
import {
  cleanup,
  queries,
  RenderResult,
  waitFor,
} from '@testing-library/react';
import { TrainerPage } from './TrainerPage';
import { getRouteTrainer } from '@/shared/const/router';
import { wordsForTrainers } from '../model/static/wordsForTrainers';
import { ViewsWordsInterface } from '../model/types/views';
import userEvent from '@testing-library/user-event';
import {
  ChoiceWordInterface,
  ChoiceWordsForTrainersItem,
} from '../model/types/choice';
import { transliterate } from '@/shared/utils/transliterate';
import { WordsForTrainersItem } from '../model/types/types';

// Types
type ComparisonType = 'equal' | 'greaterThan';

type WordsTestIDs =
  | 'TrainerPrimaryWords__valid'
  | 'TrainerPrimaryWords__invalid'
  | string;

type ModeTypes = 'Одна жизнь' | 'Проверка';

// Helpers

// Функция для проверки значения прогресс бара
const checkProgressBarValue = async (
  expectedValue: number,
  component: RenderResult<typeof queries, HTMLElement, HTMLElement>,
  comparisonType: ComparisonType = 'equal',
) => {
  await waitFor(() => {
    const progressBar = component.getByTestId(
      'Trainer__TrainerProgressBar__percent',
    );

    if (comparisonType === 'equal') {
      expect(Number(progressBar.getAttribute('value'))).toBe(expectedValue);
    } else if (comparisonType === 'greaterThan') {
      expect(Number(progressBar.getAttribute('value'))).toBeGreaterThan(
        expectedValue,
      );
    }
  });
};

// Функция для плашки "Неверно"
const checkUncorrectBar = async (
  component: RenderResult<typeof queries, HTMLElement, HTMLElement>,
  isUncorrectIsExpected: boolean,
  withClick: boolean = true,
) => {
  // Проверяем, появилась ли плашка "Неверно" или нет
  if (isUncorrectIsExpected) {
    expect(component.queryByTestId('Trainer__uncorrect')).toBeInTheDocument();
  } else {
    expect(
      component.queryByTestId('Trainer__uncorrect'),
    ).not.toBeInTheDocument();
  }

  // Убираем плашку
  if (withClick) {
    await userEvent.click(document.body);
  }
};

// Функция для имитации клика на слова и проверки появления плашки "Неверно"
const clickWordAndCheckUncorrectBar = async (
  elementTestID: WordsTestIDs,
  isUncorrectIsExpected: boolean,
  component: RenderResult<typeof queries, HTMLElement, HTMLElement>,
) => {
  await waitFor(async () => {
    const element = component.getByTestId(elementTestID);

    expect(element).toBeInTheDocument();

    await userEvent.click(element);

    await checkUncorrectBar(component, isUncorrectIsExpected);
  });
};

// Функция для сет-апа
const setupTest = (theme: string) => {
  if (!wordsForTrainers[theme]) {
    throw new Error('Тема не найдена');
  }

  const result = renderWithProviders(
    <TrainerPage theme={theme} words={wordsForTrainers[theme]} />,
    getRouteTrainer(transliterate(theme)),
  );

  return result;
};

// Tests
describe('TrainerPrimaryWords', () => {
  // Helpers
  const theme: string = 'Наречия';

  // BeforeEach
  let component: RenderResult<typeof queries, HTMLElement, HTMLElement>;

  beforeEach(async () => {
    await waitFor(() => {
      component = setupTest(theme);
    });
  });

  // Tests
  test('Click valid words and not get an error, check progress bar', async () => {
    // Кликаем на правильные слова
    await clickWordAndCheckUncorrectBar(
      'TrainerPrimaryWords__valid',
      false,
      component,
    );

    await clickWordAndCheckUncorrectBar(
      'TrainerPrimaryWords__valid',
      false,
      component,
    );

    await clickWordAndCheckUncorrectBar(
      'TrainerPrimaryWords__valid',
      false,
      component,
    );

    // Прогресс бар должен увеличиться
    await checkProgressBarValue(0, component, 'greaterThan');
  });

  test('Click invalid word and valid word and get an error, check progress bar', async () => {
    await waitFor(async () => {
      // Кликаем на правильное слово
      await clickWordAndCheckUncorrectBar(
        'TrainerPrimaryWords__valid',
        false,
        component,
      );

      // Кликаем на неправильное слово
      await clickWordAndCheckUncorrectBar(
        'TrainerPrimaryWords__invalid',
        true,
        component,
      );

      // Прогресс бар должен увеличиться, потому что правильное слово было кликнуто
      await checkProgressBarValue(0, component, 'greaterThan');
    });
  });

  test('Click invalid words, check progress bar', async () => {
    // Кликаем на неправильные слова
    await clickWordAndCheckUncorrectBar(
      'TrainerPrimaryWords__invalid',
      true,
      component,
    );

    await clickWordAndCheckUncorrectBar(
      'TrainerPrimaryWords__invalid',
      true,
      component,
    );

    await clickWordAndCheckUncorrectBar(
      'TrainerPrimaryWords__invalid',
      true,
      component,
    );

    // Прогресс бар должен быть равен нулю
    await checkProgressBarValue(0, component);
  });

  afterEach(() => {
    cleanup();
  });
});

describe('TrainerModeSwitcher', () => {
  // Helpers
  // Функция для клика на режим
  const clickMode = async (
    component: RenderResult<typeof queries, HTMLElement, HTMLElement>,
    mode: ModeTypes,
  ) => {
    await waitFor(async () => {
      const modeItem = component.getByTestId(
        `ModeSwitcherItem__${mode.replace(' ', '-')}`,
      );

      await userEvent.click(modeItem);

      // Проверяем, что режим выбран
      expect(modeItem).toHaveAttribute('data-selected', 'true');
    });
  };

  // BeforeEach
  const theme: string = 'Наречия';

  let component: RenderResult<typeof queries, HTMLElement, HTMLElement>;

  beforeEach(async () => {
    await waitFor(() => {
      component = setupTest(theme);
    });
  });

  test('Click one life mode, check progress bar', async () => {
    // Выбираем режим "Одна жизнь"
    await clickMode(component, 'Одна жизнь');

    // Кликаем на правильные слова
    await clickWordAndCheckUncorrectBar(
      'TrainerPrimaryWords__valid',
      false,
      component,
    );

    await clickWordAndCheckUncorrectBar(
      'TrainerPrimaryWords__valid',
      false,
      component,
    );

    await clickWordAndCheckUncorrectBar(
      'TrainerPrimaryWords__valid',
      false,
      component,
    );

    // Кликаем на неправильное слово
    await clickWordAndCheckUncorrectBar(
      'TrainerPrimaryWords__invalid',
      true,
      component,
    );

    // Прогресс бар должен быть равен нулю
    await checkProgressBarValue(0, component);
  });

  test('Click check mode, check progress bar', async () => {
    // Выбираем режим "Проверка"
    await clickMode(component, 'Проверка');

    // Кликаем на неправильные слова
    await clickWordAndCheckUncorrectBar(
      'TrainerPrimaryWords__invalid',
      true,
      component,
    );

    await clickWordAndCheckUncorrectBar(
      'TrainerPrimaryWords__invalid',
      true,
      component,
    );

    await clickWordAndCheckUncorrectBar(
      'TrainerPrimaryWords__invalid',
      true,
      component,
    );

    await clickWordAndCheckUncorrectBar(
      'TrainerPrimaryWords__invalid',
      true,
      component,
    );

    // Прогресс бар должен увеличиться
    await checkProgressBarValue(0, component, 'greaterThan');
  });

  afterEach(() => {
    cleanup();
  });
});

describe('TrainerChoiceWords', () => {
  // Helpers
  const theme: string = 'Разряды союзов';

  // Функция для получения текущего слова и его значений
  const getCurrentWord = (): ChoiceWordInterface => {
    // Получаем текущее слово и его значения
    const TrainerChoiceWordsWord = component.getByTestId(
      'TrainerChoiceWords_word',
    );

    const currentWordValues = (
      wordsForTrainers[theme] as ChoiceWordsForTrainersItem
    ).items.find((item) => item.word === TrainerChoiceWordsWord.textContent)!;

    return currentWordValues;
  };

  // Функция для клика на слово
  const clickChoiceWord = async (
    currentWordValues: ChoiceWordInterface,
    correct: boolean,
  ) => {
    // Получаем все варианты ответа
    const TrainerChoiceWordsChoiceWords = component.getAllByTestId(
      'TrainerChoiceWords_choiceWord',
    );

    // Получаем и кликаем на вариант ответа
    const trainerChoiceWordsChoiceWord = TrainerChoiceWordsChoiceWords.find(
      (choiceWord) =>
        correct
          ? choiceWord.textContent === currentWordValues.choiceWord
          : choiceWord.textContent !== currentWordValues.choiceWord,
    )!;

    // Кликаем на вариант ответа
    await userEvent.click(trainerChoiceWordsChoiceWord);

    // Проверяем, появилась ли плашка "Неверно" или нет
    await checkUncorrectBar(component, !correct, !correct);

    if (!correct) {
      // Получаем правильное слово
      const correctWord = TrainerChoiceWordsChoiceWords.find(
        (choiceWord) => choiceWord.textContent === currentWordValues.choiceWord,
      )!;

      // Кликаем на правильное слово, чтобы убрать плашку
      await userEvent.click(correctWord);

      // Проверяем, убралась ли плашка "Неверно" или нет
      await checkUncorrectBar(component, false, false);
    }
  };

  // BeforeEach
  let component: ReturnType<typeof setupTest>;

  beforeEach(async () => {
    await waitFor(() => {
      component = setupTest(theme);
    });
  });

  // Tests
  test('Click valid choiceWord and not get an error, check progress bar', async () => {
    await waitFor(async () => {
      // Получаем текущее слово и его значения
      const currentWordValues = getCurrentWord();

      // Кликаем на правильный вариант ответа
      await clickChoiceWord(currentWordValues, true);

      // Прогресс бар должен увеличиться
      await checkProgressBarValue(0, component, 'greaterThan');
    });
  });

  test('Click invalid choiceWord and valid choiceWord and get an error, check progress bar', async () => {
    await waitFor(async () => {
      // Получаем текущее слово и его значения
      let currentWordValues = getCurrentWord();

      // Кликаем на неправильный вариант ответа
      await clickChoiceWord(currentWordValues, false);

      // Получаем новое текущее слово и его значения
      currentWordValues = getCurrentWord();

      // Кликаем на правильный вариант ответа
      await clickChoiceWord(currentWordValues, true);

      // Прогресс бар должен увеличиться, потому что правильный вариант ответа был кликнут
      await checkProgressBarValue(0, component, 'greaterThan');
    });
  });

  test('Click invalid choiceWord, check progress bar', async () => {
    await waitFor(async () => {
      // Получаем текущее слово и его значения
      const currentWordValues = getCurrentWord();

      // Кликаем на неправильный вариант ответа
      await clickChoiceWord(currentWordValues, false);

      // Прогресс бар должен быть равен нулю
      await checkProgressBarValue(0, component);
    });
  });
});

describe('TrainerWithMissedLettersWords', () => {
  // Mocks
  const theme: string = 'Словарные слова';
  const mockWords: WordsForTrainersItem = {
    type: 'withMissedLetters',
    inHeader: true,

    items: [
      {
        word: 'тишина',
        missedLettersIndexes: [4],
        id: 0,
      },
      {
        word: 'белизна',
        missedLettersIndexes: [4],
        id: 1,
      },
    ],
  };

  // Функция для получения пропущенной буквы и вписывания туда правильной буквы
  const getMissedLetterAndInputCorrectLetter = async (letter: string) => {
    const missedLetterInput = component.getByTestId(
      'TrainerWithMissedLetters__input',
    );

    await userEvent.type(missedLetterInput, letter);
  };

  // Функция для клика на кнопку "Далее"
  const clickContinueButton = async (isUncorrectIsExpected: boolean) => {
    const continueButton = component.getByTestId(
      'TrainerWithMissedLettersWords__continueButton',
    );

    await userEvent.click(continueButton);

    await checkUncorrectBar(component, isUncorrectIsExpected);
  };

  // BeforeEach
  let component: ReturnType<typeof setupTest>;

  beforeEach(async () => {
    await waitFor(() => {
      component = renderWithProviders(
        <TrainerPage theme={theme} words={mockWords} />,
        getRouteTrainer(transliterate(theme)),
      );
    });
  });

  // Tests
  test('Input valid letter in word and not get an error, check progress bar', async () => {
    await waitFor(async () => {
      // Получаем пропущенную букву и вписываем туда правильную
      await getMissedLetterAndInputCorrectLetter('и');
      // Кликаем на кнопку "Далее"
      await clickContinueButton(false);
      // Прогресс бар должен увеличиться
      await checkProgressBarValue(0, component, 'greaterThan');
    });
  });

  test('Input invalid letter in word and valid letter in word and get an error, check progress bar', async () => {
    await waitFor(async () => {
      // Получаем пропущенную букву и вписываем туда неправильную
      await getMissedLetterAndInputCorrectLetter('!');

      // Кликаем на кнопку "Далее"
      await clickContinueButton(true);

      // Получаем пропущенную букву и вписываем туда правильную
      await getMissedLetterAndInputCorrectLetter('и');

      // Кликаем на кнопку "Далее"
      await clickContinueButton(false);

      // Прогресс бар должен увеличиться, потому что правильный вариант ответа был кликнут
      await checkProgressBarValue(0, component, 'greaterThan');
    });
  });

  test('Input invalid letter in word and get an error, check progress bar', async () => {
    await waitFor(async () => {
      // Получаем пропущенную букву и вписываем туда неправильную
      await getMissedLetterAndInputCorrectLetter('!');

      // Кликаем на кнопку "Далее"
      await clickContinueButton(true);

      // Прогресс бар должен быть равен нулю
      await checkProgressBarValue(0, component);
    });
  });
});

describe('TrainerViewsWords', () => {
  // Helpers
  const theme: string = 'Виды союзов';

  // Функция для получения типа текущего слова
  const getTypeOfCurrentWord = (): string => {
    const word = component.getByTestId('TrainerViewsWords__word');

    expect(word).toBeInTheDocument();

    const currentWord = (word as HTMLElement).textContent;

    const wordCurrentType = (
      wordsForTrainers['Виды союзов'].items as ViewsWordsInterface[]
    ).find((word) => word.word === currentWord)!.viewType;

    return wordCurrentType;
  };

  // BeforeEach
  let component: ReturnType<typeof setupTest>;

  beforeEach(async () => {
    await waitFor(() => {
      component = setupTest(theme);
    });
  });

  // Tests
  test('Click valid words and not get an error, check progress bar', async () => {
    await waitFor(async () => {
      // Получаем тип текущего слова
      const wordCurrentType = getTypeOfCurrentWord();

      // Кликаем на правильные слова
      await clickWordAndCheckUncorrectBar(
        `TrainerViewsWords__${wordCurrentType}`,
        false,
        component,
      );

      await clickWordAndCheckUncorrectBar(
        `TrainerViewsWords__${wordCurrentType}`,
        false,
        component,
      );

      await clickWordAndCheckUncorrectBar(
        `TrainerViewsWords__${wordCurrentType}`,
        false,
        component,
      );

      // Прогресс бар должен увеличиться
      await checkProgressBarValue(0, component, 'greaterThan');
    });
  });

  test('Click invalid word and valid word and get an error, check progress bar', async () => {
    await waitFor(async () => {
      // Получаем тип текущего слова
      const wordCurrentType = getTypeOfCurrentWord();

      // Кликаем на правильное слово
      await clickWordAndCheckUncorrectBar(
        `TrainerViewsWords__${wordCurrentType}`,
        false,
        component,
      );

      // Получаем противоположный тип текущего слова
      const wordOppositeType =
        wordCurrentType === 'Подчинительный'
          ? 'Сочинительный'
          : 'Подчинительный';

      // Кликаем на неправильное слово
      await clickWordAndCheckUncorrectBar(
        `TrainerViewsWords__${wordOppositeType}`,
        true,
        component,
      );

      // Прогресс бар должен увеличиться, потому что правильное слово было кликнуто
      await checkProgressBarValue(0, component, 'greaterThan');
    });
  });

  test('Click invalid word, check progress bar', async () => {
    // Получаем тип текущего слова
    const wordCurrentType = getTypeOfCurrentWord();

    // Получаем противоположный тип текущего слова
    const wordOppositeType =
      wordCurrentType === 'Подчинительный' ? 'Сочинительный' : 'Подчинительный';

    // Кликаем на неправильное слово
    await clickWordAndCheckUncorrectBar(
      `TrainerViewsWords__${wordOppositeType}`,
      true,
      component,
    );

    // Прогресс бар должен быть равен нулю
    await checkProgressBarValue(0, component);
  });

  afterEach(() => {
    cleanup();
  });
});

describe('TrainerAccentsWords', () => {
  // Mocks
  const theme: string = 'Ударения';

  const mockAccentIndex: number = 6;

  const mockWords: WordsForTrainersItem = {
    type: 'accents',
    inHeader: true,

    items: [
      {
        word: 'аэропорты',
        accentIndex: mockAccentIndex,
        id: 0,
      },
      {
        word: 'дешевизна',
        accentIndex: mockAccentIndex,
        id: 1,
      },
    ],
  };

  // Helpers
  // Функция для получения и нажатия на букву
  const getAndClickVowel = async (isCorrect: boolean) => {
    // Получаем все данные
    const vowels = component.getAllByTestId('TrainerAccentsWords__vowel');
    const letters = component.getAllByTestId('TrainerAccentsWords__letter');

    const accentElemIndex = mockAccentIndex - 1;

    // Кликаем на соответствующие буквы при условии, что верно и неверно
    if (!isCorrect) {
      const incorrectVowel = vowels.find(
        (_, index) => index !== accentElemIndex,
      )!;

      await userEvent.click(incorrectVowel);
    } else {
      const correctVowel = letters.find(
        (_, index) => index === accentElemIndex,
      )!;

      await userEvent.click(correctVowel);
    }

    // Проверяем в случае неправильности плашку
    if (!isCorrect) {
      await checkUncorrectBar(component, true, true);
    }
  };

  // BeforeEach
  let component: ReturnType<typeof setupTest>;

  beforeEach(async () => {
    await waitFor(() => {
      component = renderWithProviders(
        <TrainerPage theme={theme} words={mockWords} />,
        getRouteTrainer(transliterate(theme)),
      );
    });
  });

  // Tests
  test('Click valid vowels and not get an error, check progress bar', async () => {
    await waitFor(async () => {
      // Кликаем на правильную букву
      await getAndClickVowel(true);

      // Прогресс бар должен увеличиться
      await checkProgressBarValue(0, component, 'greaterThan');
    });
  });

  test('Click invalid vowel and valid vowel and get an error, check progress bar', async () => {
    await waitFor(async () => {
      // Кликаем на неправильную букву
      await getAndClickVowel(false);

      // Кликаем на правильную букву
      await getAndClickVowel(true);

      // Прогресс бар должен увеличиться, потому что правильное слово было кликнуто
      await checkProgressBarValue(0, component, 'greaterThan');
    });
  });

  test('Click invalid vowels, check progress bar', async () => {
    // Кликаем на неправильную букву
    await getAndClickVowel(false);

    // Кликаем на неправильную букву
    await getAndClickVowel(false);

    // Прогресс бар должен быть равен нулю
    await checkProgressBarValue(0, component);
  });

  afterEach(() => {
    cleanup();
  });
});
