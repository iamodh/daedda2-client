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
    label: '제목',
  },
};

export const Date: Story = {
  args: {
    label: '근무 날짜',
    type: 'date',
  },
};

export const Error: Story = {
  args: {
    label: '제목',
    error: {
      message: '제목은 필수 입력 사항입니다.',
      type: 'required',
    },
  },
};
