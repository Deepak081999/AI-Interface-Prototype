import { NextResponse } from "next/server";

export async function GET() {
  const models = [
    {
      id: "gpt-4-turbo",
      name: "GPT-4 Turbo",
      description: "Most capable model with improved performance",
      provider: "OpenAI",
      contextLength: 128000,
      pricing: {
        input: 0.01,
        output: 0.03,
      },
    },
    {
      id: "gpt-4",
      name: "GPT-4",
      description: "High-quality responses for complex tasks",
      provider: "OpenAI",
      contextLength: 8192,
      pricing: {
        input: 0.03,
        output: 0.06,
      },
    },
    {
      id: "gpt-3.5-turbo",
      name: "GPT-3.5 Turbo",
      description: "Fast and efficient for most tasks",
      provider: "OpenAI",
      contextLength: 4096,
      pricing: {
        input: 0.001,
        output: 0.002,
      },
    },
    {
      id: "claude-3-opus",
      name: "Claude 3 Opus",
      description: "Anthropic's most capable model",
      provider: "Anthropic",
      contextLength: 200000,
      pricing: {
        input: 0.015,
        output: 0.075,
      },
    },
    {
      id: "claude-3-sonnet",
      name: "Claude 3 Sonnet",
      description: "Balanced performance and speed",
      provider: "Anthropic",
      contextLength: 200000,
      pricing: {
        input: 0.003,
        output: 0.015,
      },
    },
    {
      id: "gemini-pro",
      name: "Gemini Pro",
      description: "Google's advanced language model",
      provider: "Google",
      contextLength: 32768,
      pricing: {
        input: 0.0005,
        output: 0.0015,
      },
    },
  ];

  return NextResponse.json({ models });
}
