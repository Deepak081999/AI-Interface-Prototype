import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Slider from "./Slider";

const meta = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "number" },
    },
    min: {
      control: { type: "number" },
    },
    max: {
      control: { type: "number" },
    },
    step: {
      control: { type: "number" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    showValue: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component to handle state
const SliderWithState = (
  args: Omit<React.ComponentProps<typeof Slider>, "onChange">
) => {
  const [value, setValue] = useState(args.value);
  return <Slider {...args} value={value} onChange={setValue} />;
};

export const Temperature: Story = {
  render: SliderWithState,
  args: {
    onChange: () => {},
    label: "Temperature",
    value: 0.7,
    min: 0,
    max: 1,
    step: 0.1,
    description:
      "Controls randomness. Higher values make output more creative and unpredictable.",
  },
};

export const MaxTokens: Story = {
  render: SliderWithState,
  args: {
    onChange: () => {},
    label: "Max Tokens",
    value: 1500,
    min: 1,
    max: 4000,
    step: 50,
    unit: "tokens",
    description: "Maximum number of tokens to generate in the response.",
  },
};

export const WithoutValue: Story = {
  render: SliderWithState,
  args: {
    onChange: () => {},
    label: "Volume",
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    showValue: false,
    description: "Adjust the volume level.",
  },
};

export const Disabled: Story = {
  render: SliderWithState,
  args: {
    onChange: () => {},
    label: "Disabled Slider",
    value: 30,
    min: 0,
    max: 100,
    step: 1,
    disabled: true,
    description: "This slider is disabled.",
  },
};

export const LargeRange: Story = {
  render: SliderWithState,
  args: {
    onChange: () => {},
    label: "File Size",
    value: 50000,
    min: 0,
    max: 100000,
    step: 1000,
    unit: "KB",
    description: "Select maximum file size for uploads.",
  },
};
