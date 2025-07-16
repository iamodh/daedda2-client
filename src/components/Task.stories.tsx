import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/internal/test';
import Task from './Task';

const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

const meta = {
  component: Task,
  title: 'Task',
  args: {
    ...ActionsData,
  },
} satisfies Meta<typeof Task>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned: Story = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived: Story = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};
