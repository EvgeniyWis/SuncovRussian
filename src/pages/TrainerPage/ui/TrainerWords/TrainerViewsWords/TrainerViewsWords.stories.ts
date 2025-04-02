import type { Meta, StoryObj } from '@storybook/react';
import { TrainerViewsWords } from './TrainerViewsWords';
import { ViewsWordsInterface } from '../../../model/types/views';
import { wordsForTrainers } from '../../../model/static/wordsForTrainers';

const meta = {
  title: 'Pages/Trainer/TrainerViewsWords',
  component: TrainerViewsWords,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TrainerViewsWords>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    randomWord: (
      wordsForTrainers['Виды союзов'].items as ViewsWordsInterface[]
    )[0],
    wordOnSuccess: () => {},
    wordOnFail: () => {},
    viewsTypes: ['Сочинительный', 'Подчинительный'],
  },
};
