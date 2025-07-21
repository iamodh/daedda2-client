import { Input } from '@/components/ui/form/input';
import type { Meta, StoryObj } from '@storybook/react-vite';
// import { fn } from 'storybook/test';

const ActionsData = {};

const meta = {
  component: Input,
  title: 'Input',
  args: {
    ...ActionsData,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '인풋 라벨',
  },
};
