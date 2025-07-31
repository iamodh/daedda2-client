import { Checkbox } from './checkbox';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

const ActionsData = {
  onCheckedChange: fn(),
};

const meta = {
  component: Checkbox,
  title: 'Checkbox',
  args: {
    ...ActionsData,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WorkTime: Story = {
  args: {},
};
