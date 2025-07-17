import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Header } from './header';

const ActionsData = {
  onClickAlert: fn(),
  onClickMenu: fn(),
};

const meta = {
  component: Header,
  title: 'Header',
  args: {
    ...ActionsData,
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Dode',
    },
  },
};

export const LoggedOut: Story = {};
