import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from './footer';

const meta = {
  component: Footer,
  title: 'Footer',
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
