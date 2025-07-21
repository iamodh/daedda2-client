import { InputImage } from '@/components/ui/form/input-image';
import type { Meta, StoryObj } from '@storybook/react-vite';

const ActionsData = {};

const meta = {
  component: InputImage,
  title: 'InputImage',
  args: {
    ...ActionsData,
  },
} satisfies Meta<typeof InputImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '라벨 이름',
  },
};
