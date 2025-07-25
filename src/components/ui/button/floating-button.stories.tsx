import { FloatingButton } from '@/components/ui/button/floating-button';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import plus from '@/assets/icons/plus-white.svg';

const ActionsData = {
  onClick: fn(),
};

const meta = {
  component: FloatingButton,
  title: 'FloatingButton',
  args: {
    ...ActionsData,
  },
} satisfies Meta<typeof FloatingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plus: Story = {
  args: {
    icon: <img src={plus} />,
  },
};
