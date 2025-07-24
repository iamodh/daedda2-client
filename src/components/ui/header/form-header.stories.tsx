import { FormHeader } from '@/components/ui/header/form-header';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

const ActionsData = {
  onBackClick: fn(),
};

const meta = {
  component: FormHeader,
  title: 'FormHeader',
  args: {
    ...ActionsData,
  },
} satisfies Meta<typeof FormHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pageTitle: '페이지 타이틀',
  },
};
