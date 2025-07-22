import { Button } from '@/components/ui/button/button';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

const ActionsData = {
  onClick: fn(),
};

const meta = {
  component: Button,
  title: 'Button',
  args: {
    ...ActionsData,
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    size: {
      control: { type: 'select' },
      options: ['full', 'sm', 'lg'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '버튼',
  },
};

export const Secondary: Story = {
  args: {
    children: '버튼',
    variant: 'secondary',
  },
};

export const Small: Story = {
  args: {
    children: '버튼',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: '버튼',
    size: 'lg',
  },
};
