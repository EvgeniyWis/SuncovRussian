import type { Meta, StoryObj } from '@storybook/react';
import { TrainerAccentsWords } from './TrainerAccentsWords';

const meta = {
  title: 'Pages/Trainer/TrainerAccentsWords',
  component: TrainerAccentsWords,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TrainerAccentsWords>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    randomWord: {
      word: 'аэропорты',
      accentIndex: 6,
      id: 0,
    },
    onSuccess: () => {},
    onFail: () => {},
  },
};
