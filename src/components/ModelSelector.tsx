"use client";

import { useState } from "react";

export interface Model {
  id: string;
  name: string;
  description: string;
  provider: string;
  contextLength: number;
}

interface ModelSelectorProps {
  selectedModel: Model;
  onModelChange: (model: Model) => void;
}

const availableModels: Model[] = [
  {
    id: "gpt-4-turbo",
    name: "GPT-4 Turbo",
    description: "Most capable model with improved performance",
    provider: "OpenAI",
    contextLength: 128000,
  },
  {
    id: "gpt-4",
    name: "GPT-4",
    description: "High-quality responses for complex tasks",
    provider: "OpenAI",
    contextLength: 8192,
  },
  {
    id: "gpt-3.5-turbo",
    name: "GPT-3.5 Turbo",
    description: "Fast and efficient for most tasks",
    provider: "OpenAI",
    contextLength: 4096,
  },
  {
    id: "claude-3-opus",
    name: "Claude 3 Opus",
    description: "Anthropic's most capable model",
    provider: "Anthropic",
    contextLength: 200000,
  },
  {
    id: "claude-3-sonnet",
    name: "Claude 3 Sonnet",
    description: "Balanced performance and speed",
    provider: "Anthropic",
    contextLength: 200000,
  },
  {
    id: "gemini-pro",
    name: "Gemini Pro",
    description: "Google's advanced language model",
    provider: "Google",
    contextLength: 32768,
  },
];

export default function ModelSelector({
  selectedModel,
  onModelChange,
}: ModelSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleModelSelect = (model: Model) => {
    onModelChange(model);
    setIsOpen(false);
  };

  return (
    <div className="bg-white dark:bg-secondary-800 rounded-lg border border-secondary-200 dark:border-secondary-700 p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100 mb-4">
        Model Selection
      </h2>

      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-secondary-50 dark:bg-secondary-700 border border-secondary-200 dark:border-secondary-600 rounded-lg text-left hover:bg-secondary-100 dark:hover:bg-secondary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <div className="flex-1">
            <div className="font-medium text-secondary-900 dark:text-secondary-100">
              {selectedModel.name}
            </div>
            <div className="text-sm text-secondary-600 dark:text-secondary-400 mt-1">
              {selectedModel.provider} •{" "}
              {selectedModel.contextLength.toLocaleString()} tokens
            </div>
          </div>
          <svg
            className={`w-5 h-5 text-secondary-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-2 bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 rounded-lg shadow-lg max-h-80 overflow-y-auto">
            {availableModels.map((model) => (
              <button
                key={model.id}
                onClick={() => handleModelSelect(model)}
                className="w-full px-4 py-3 text-left hover:bg-secondary-50 dark:hover:bg-secondary-700 focus:outline-none focus:bg-secondary-50 dark:focus:bg-secondary-700 first:rounded-t-lg last:rounded-b-lg transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-medium text-secondary-900 dark:text-secondary-100">
                      {model.name}
                    </div>
                    <div className="text-sm text-secondary-600 dark:text-secondary-400 mt-1">
                      {model.description}
                    </div>
                    <div className="text-xs text-secondary-500 dark:text-secondary-500 mt-1">
                      {model.provider} • {model.contextLength.toLocaleString()}{" "}
                      tokens
                    </div>
                  </div>
                  {selectedModel.id === model.id && (
                    <svg
                      className="w-5 h-5 text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 p-4 bg-secondary-50 dark:bg-secondary-700 rounded-lg">
        <h3 className="text-sm font-medium text-secondary-900 dark:text-secondary-100 mb-2">
          Model Details
        </h3>
        <div className="text-sm text-secondary-600 dark:text-secondary-400">
          <p className="mb-1">{selectedModel.description}</p>
          <p className="text-xs">
            <span className="font-medium">Context Length:</span>{" "}
            {selectedModel.contextLength.toLocaleString()} tokens
          </p>
        </div>
      </div>
    </div>
  );
}

export { availableModels };
