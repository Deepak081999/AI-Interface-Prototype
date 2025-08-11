import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
    closeOnOverlayClick: {
      control: { type: "boolean" },
    },
    showCloseButton: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component to handle modal state
const ModalWithTrigger = (
  args: Omit<React.ComponentProps<typeof Modal>, "isOpen" | "onClose">
) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export const Basic: Story = {
  render: ModalWithTrigger,
  args: {
    isOpen: false,
    onClose: () => {},
    title: "Basic Modal",
    children: (
      <div>
        <p className="text-secondary-600 dark:text-secondary-400 mb-4">
          This is a basic modal with some content. You can close it by clicking
          the X button, pressing Escape, or clicking outside the modal.
        </p>
        <div className="flex justify-end space-x-3">
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Confirm</Button>
        </div>
      </div>
    ),
  },
};

export const Large: Story = {
  render: ModalWithTrigger,
  args: {
    isOpen: false,
    onClose: () => {},
    title: "Large Modal",
    size: "lg",
    children: (
      <div>
        <p className="text-secondary-600 dark:text-secondary-400 mb-4">
          This is a larger modal that can contain more content. Perfect for
          forms, detailed information, or complex interactions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-secondary-50 dark:bg-secondary-700 rounded-lg">
            <h4 className="font-medium text-secondary-900 dark:text-secondary-100 mb-2">
              Section 1
            </h4>
            <p className="text-sm text-secondary-600 dark:text-secondary-400">
              Some content for the first section.
            </p>
          </div>
          <div className="p-4 bg-secondary-50 dark:bg-secondary-700 rounded-lg">
            <h4 className="font-medium text-secondary-900 dark:text-secondary-100 mb-2">
              Section 2
            </h4>
            <p className="text-sm text-secondary-600 dark:text-secondary-400">
              Some content for the second section.
            </p>
          </div>
        </div>
        <div className="flex justify-end space-x-3">
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Save Changes</Button>
        </div>
      </div>
    ),
  },
};

export const WithoutCloseButton: Story = {
  render: ModalWithTrigger,
  args: {
    isOpen: false,
    onClose: () => {},
    title: "Modal Without Close Button",
    showCloseButton: false,
    children: (
      <div>
        <p className="text-secondary-600 dark:text-secondary-400 mb-4">
          This modal doesn&apos;t have a close button in the header. You can
          still close it by pressing Escape or clicking outside.
        </p>
        <div className="flex justify-end space-x-3">
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Continue</Button>
        </div>
      </div>
    ),
  },
};

export const NoOverlayClose: Story = {
  render: ModalWithTrigger,
  args: {
    isOpen: false,
    onClose: () => {},
    title: "No Overlay Close",
    closeOnOverlayClick: false,
    children: (
      <div>
        <p className="text-secondary-600 dark:text-secondary-400 mb-4">
          This modal cannot be closed by clicking outside. You must use the
          close button or press Escape.
        </p>
        <div className="flex justify-end space-x-3">
          <Button variant="primary">Got it</Button>
        </div>
      </div>
    ),
  },
};

export const LongContent: Story = {
  render: ModalWithTrigger,
  args: {
    isOpen: false,
    onClose: () => {},
    title: "Modal with Long Content",
    size: "lg",
    children: (
      <div>
        <p className="text-secondary-600 dark:text-secondary-400 mb-4">
          This modal demonstrates scrollable content when the content exceeds
          the modal height.
        </p>
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="mb-4 p-4 bg-secondary-50 dark:bg-secondary-700 rounded-lg"
          >
            <h4 className="font-medium text-secondary-900 dark:text-secondary-100 mb-2">
              Content Block {i + 1}
            </h4>
            <p className="text-sm text-secondary-600 dark:text-secondary-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ))}
        <div className="flex justify-end space-x-3 mt-6">
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Save</Button>
        </div>
      </div>
    ),
  },
};
