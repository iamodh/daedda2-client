import { SearchBar } from '@/components/ui/form/search-bar';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

const ActionsData = {
  onClick: fn(),
};

const meta = {
  component: SearchBar,
  title: 'SearchBar',
  args: {
    ...ActionsData,
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
