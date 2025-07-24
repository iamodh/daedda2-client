// import { MainHeader } from '@/components/ui/header/main-header';
// import type { Meta, StoryObj } from '@storybook/react-vite';
// import { fn } from 'storybook/test';

// const ActionsData = {
//   onAlertClick: fn(),
//   onMenuClick: fn(),
// };

// const meta = {
//   component: MainHeader,
//   title: 'MainHeader',
//   args: {
//     ...ActionsData,
//   },
// } satisfies Meta<typeof MainHeader>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const LoggedIn: Story = {
//   args: {
//     user: {
//       name: 'Jane Dode',
//     },
//   },
// };

// export const LoggedOut: Story = {};

import { MainHeader } from '@/components/ui/header/main-header';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

const ActionsData = {
  onAlertClick: fn(),
  onMenuClick: fn(),
};

const meta = {
  component: MainHeader,
  title: 'MainHeader',
  args: {
    ...ActionsData,
  },
} satisfies Meta<typeof MainHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jain Doe',
    },
  },
};
export const LoggedOut: Story = {};
