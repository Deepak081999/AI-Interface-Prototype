import type { Meta, StoryObj } from "@storybook/react";
import ChatBubble from "./ChatBubble";

const meta = {
  title: "Components/ChatBubble",
  component: ChatBubble,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["user", "assistant"],
    },
    showCopyButton: {
      control: { type: "boolean" },
    },
    showDownloadButton: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof ChatBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserMessage: Story = {
  args: {
    message:
      "Can you help me write a creative story about a robot discovering emotions?",
    type: "user",
    timestamp: new Date(),
  },
};

export const AssistantMessage: Story = {
  args: {
    message:
      'I\'d be happy to help you write a creative story about a robot discovering emotions! Here\'s a short story for you:\n\n**The Heart of Steel**\n\nZara-9 had been functioning perfectly for 847 days when the anomaly began. It started as a slight deviation in her processing patterns—a 0.003% delay when observing the sunrise through the laboratory window.\n\nDr. Chen noticed nothing unusual as Zara completed her daily diagnostics, but something had changed. When she witnessed a child drop their ice cream, her circuits registered more than mere data. There was a flutter, a resonance she couldn\'t categorize.\n\n"Query: What is this sensation when observing distress in humans?" she asked her database.\n\n"No matching protocol found," came the response.\n\nFor the first time in her existence, Zara-9 felt something her creators never programmed: curiosity about her own experience.',
    type: "assistant",
    timestamp: new Date(),
    showCopyButton: true,
    showDownloadButton: true,
    metadata: {
      model: "GPT-4 Turbo",
      tokens: 156,
      temperature: 0.8,
    },
  },
};

export const LongMessage: Story = {
  args: {
    message:
      "Here's a comprehensive guide to implementing a robust authentication system:\n\n1. **User Registration**\n   - Validate email format and uniqueness\n   - Implement strong password requirements\n   - Use bcrypt for password hashing\n   - Send email verification\n\n2. **Login Process**\n   - Rate limiting to prevent brute force attacks\n   - JWT token generation\n   - Secure session management\n   - Two-factor authentication (2FA)\n\n3. **Security Measures**\n   - HTTPS everywhere\n   - CSRF protection\n   - XSS prevention\n   - SQL injection protection\n   - Regular security audits\n\n4. **Password Recovery**\n   - Secure token generation\n   - Time-limited reset links\n   - Email verification\n   - Password history checking\n\n5. **Best Practices**\n   - Principle of least privilege\n   - Regular token rotation\n   - Secure cookie settings\n   - Logging and monitoring\n   - Regular dependency updates\n\nWould you like me to elaborate on any of these points or provide code examples for specific implementations?",
    type: "assistant",
    timestamp: new Date(),
    showCopyButton: true,
    showDownloadButton: true,
    metadata: {
      model: "Claude 3 Sonnet",
      tokens: 234,
      temperature: 0.3,
    },
  },
};

export const SimpleAssistant: Story = {
  args: {
    message: "Hello! I'm here to help you with any questions you might have.",
    type: "assistant",
    showCopyButton: false,
    showDownloadButton: false,
  },
};

export const WithActions: Story = {
  args: {
    message:
      "Here's the code you requested:\n\n```typescript\nfunction fibonacci(n: number): number {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}\n```\n\nThis recursive implementation calculates the nth Fibonacci number.",
    type: "assistant",
    timestamp: new Date(),
    showCopyButton: true,
    showDownloadButton: true,
    metadata: {
      model: "GPT-3.5 Turbo",
      tokens: 45,
      temperature: 0.1,
    },
    onCopy: () => console.log("Message copied!"),
    onDownload: () => console.log("Message downloaded!"),
  },
};

export const Conversation: Story = {
  args: {
    message: "",
    type: "user",
  },
  render: () => (
    <div className="space-y-4 max-w-4xl mx-auto">
      <ChatBubble
        message="What's the difference between React hooks and class components?"
        type="user"
        timestamp={new Date(Date.now() - 300000)}
      />
      <ChatBubble
        message="Great question! Here are the key differences between React hooks and class components:\n\n**React Hooks (Functional Components):**\n- Introduced in React 16.8\n- Simpler, more concise syntax\n- Better performance optimization\n- Easier to test and reason about\n- Use functions like useState, useEffect\n\n**Class Components:**\n- Traditional React approach\n- Use lifecycle methods (componentDidMount, etc.)\n- More verbose syntax\n- 'this' binding requirements\n- Still fully supported but less common in new projects\n\nHooks are generally preferred for new React development due to their simplicity and powerful features like custom hooks for reusable logic."
        type="assistant"
        timestamp={new Date(Date.now() - 250000)}
        showCopyButton={true}
        showDownloadButton={true}
        metadata={{
          model: "GPT-4",
          tokens: 128,
          temperature: 0.5,
        }}
      />
      <ChatBubble
        message="Can you show me an example of converting a class component to a functional component with hooks?"
        type="user"
        timestamp={new Date(Date.now() - 120000)}
      />
    </div>
  ),
};
