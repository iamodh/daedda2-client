import { Dropdown } from './dropdown';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

const ActionsData = {
  onChange: fn(),
};

const meta = {
  component: Dropdown,
  title: 'Dropdown',
  args: {
    ...ActionsData,
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WorkTime: Story = {
  args: {
    title: '근무 시간',
    size: 'md',
    options: [
      { name: '초기화', value: 'default' },
      { name: '0~4시간', value: 'short' },
      { name: '4~8시간', value: 'medium' },
      { name: '8시간 초과', value: 'long' },
    ],
    value: '초기화',
    name: 'hourlyWage',
  },
};
