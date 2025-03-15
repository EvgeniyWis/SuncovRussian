import type { Meta, StoryObj } from '@storybook/react';
import { TrainerChoiceWords } from './TrainerChoiceWords';
import { wordsForTrainers } from '../../../model/static/wordsForTrainers';
import {
  ChoiceWordInterface,
  ChoiceWordsForTrainersItem,
} from '../../../model/types/choice';

const meta = {
  title: 'Pages/Trainer/TrainerChoiceWords',
  component: TrainerChoiceWords,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TrainerChoiceWords>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    randomWord: (
      wordsForTrainers['Разряды союзов'].items as ChoiceWordInterface[]
    )[0],
    showNewWord: () => {},
    wordOnFail: () => {},
    wordOnSuccess: () => {},
    categories: (
      wordsForTrainers['Разряды союзов'] as ChoiceWordsForTrainersItem
    ).categories,
  },
};
