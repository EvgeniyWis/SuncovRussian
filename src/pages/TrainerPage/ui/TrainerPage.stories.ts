import type { Meta, StoryObj } from '@storybook/react';
import { TrainerPage } from './TrainerPage';
import { wordsForTrainers } from '../model/static/wordsForTrainers';

const meta = {
  title: 'Pages/Trainer',
  component: TrainerPage,
  parameters: {
    layout: 'center',
  },
} satisfies Meta<typeof TrainerPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TrainerPrimaryWords: Story = {
  args: {
    words: wordsForTrainers['Наречия'],
    theme: 'Наречия',
  },
};

export const TrainerAccentsWords: Story = {
  args: {
    words: wordsForTrainers['Ударения'],
    theme: 'Ударения',
  },
};

export const TrainerViewsWords: Story = {
  args: {
    words: wordsForTrainers['Виды союзов'],
    theme: 'Виды союзов',
  },
};

export const TrainerChoiceWords: Story = {
  args: {
    words: wordsForTrainers['Разряды союзов'],
    theme: 'разряды союзов',
  },
};

export const TrainerWithMissedLettersWords: Story = {
  args: {
    words: wordsForTrainers['Словарные слова'],
    theme: 'словарные слова',
  },
};
