import type { Meta, StoryObj } from '@storybook/react';
import { TitleWithSubtitle } from '.';

const meta: Meta<typeof TitleWithSubtitle> = {
  title: 'parts/titles/TitleWithSubtitle',
  component: TitleWithSubtitle,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof TitleWithSubtitle>;

export const Default: Story = {
  args: {
    title: "タイトル",
    subtitle: "Title"
  },
};

export const hasUnderline: Story = {
  args: {
    title: "タイトル",
    subtitle: "Title",
    hasUnderline: true
  },
};