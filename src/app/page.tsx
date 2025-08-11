"use client";

import { useState } from "react";
import ModelSelector, {
  Model,
  availableModels,
} from "@/components/ModelSelector";
import PromptEditor, { Template } from "@/components/PromptEditor";
import ParametersPanel, { Parameters } from "@/components/ParametersPanel";
import ChatBubble from "@/components/ChatBubble";

export default function Home() {
  const [selectedModel, setSelectedModel] = useState<Model>(availableModels[0]);
  const [prompt, setPrompt] = useState<string>("");
  const [parameters, setParameters] = useState<Parameters>({
    temperature: 0.7,
    maxTokens: 1500,
  });
  const [response, setResponse] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [responseMetadata, setResponseMetadata] = useState<{
    model: string;
    tokens: number;
    temperature: number;
    timestamp: Date;
  } | null>(null);

  const handleTemplateLoad = (template: Template) => {
    setPrompt(template.prompt);
    setParameters({
      temperature: template.parameters.temperature,
      maxTokens: template.parameters.maxTokens,
    });
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setResponse("");
    setResponseMetadata(null);

    // Simulate API call with mock response
    try {
      const mockResponses = [
        "I'd be happy to help you with that! Based on your prompt, here's a comprehensive response that addresses your needs.\n\nThis is a simulated AI response that demonstrates the chat interface functionality. In a real implementation, this would connect to an actual AI model API.\n\nKey points to consider:\n• This response shows how the interface handles longer text\n• Copy and download functionality is available\n• The response includes metadata about the generation\n• Dark mode and responsive design are supported",
        "Here's a detailed analysis of your request:\n\n**Overview**\nYour prompt has been processed using advanced language model capabilities. This mock response demonstrates the full functionality of the chat interface.\n\n**Technical Details**\n- Model performance optimization\n- Context-aware response generation\n- Structured output formatting\n- Interactive feature integration\n\n**Next Steps**\nYou can copy this response or download it as JSON for further use. The interface supports both light and dark themes for optimal user experience.",
        "Thank you for your question! Let me provide a comprehensive answer:\n\n1. **First Point**: This demonstrates how numbered lists appear in the chat interface\n2. **Second Point**: The response area supports rich text formatting and proper line breaks\n3. **Third Point**: Users can interact with the response through copy and download actions\n\nThe interface is designed to handle various response lengths and formats while maintaining excellent usability across all device sizes.",
      ];

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const randomResponse =
        mockResponses[Math.floor(Math.random() * mockResponses.length)];

      setResponse(randomResponse);
      setResponseMetadata({
        model: selectedModel.name,
        tokens: Math.floor(Math.random() * 200) + 150,
        temperature: parameters.temperature,
        timestamp: new Date(),
      });
    } catch (error) {
      console.error("Error generating response:", error);
      setResponse(
        "Sorry, there was an error generating the response. Please try again."
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyResponse = () => {
    console.log("Response copied to clipboard");
  };

  const handleDownloadResponse = () => {
    console.log("Response downloaded as JSON");
  };

  const isGenerateDisabled = !prompt.trim() || isGenerating;

  return (
    <div className="min-h-screen bg-secondary-50 dark:bg-secondary-900">
      {/* Header */}
      <header className="bg-white dark:bg-secondary-800 border-b border-secondary-200 dark:border-secondary-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h1 className="text-xl font-semibold text-secondary-900 dark:text-secondary-100">
                    AI Interface Prototype
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-secondary-600 dark:text-secondary-400">
                v1.0.0
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Model Selection and Parameters */}
          <div className="lg:col-span-1 space-y-6">
            <ModelSelector
              selectedModel={selectedModel}
              onModelChange={setSelectedModel}
            />
            <ParametersPanel
              parameters={parameters}
              onParametersChange={setParameters}
            />
          </div>

          {/* Main Content - Prompt Editor */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <PromptEditor
                prompt={prompt}
                onPromptChange={setPrompt}
                onTemplateLoad={handleTemplateLoad}
              />

              {/* Generate Button and Status */}
              <div className="bg-white dark:bg-secondary-800 rounded-lg border border-secondary-200 dark:border-secondary-700 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100 mb-2">
                      Generate Response
                    </h3>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">
                      Click generate to create a response using{" "}
                      {selectedModel.name} with your current settings.
                    </p>
                  </div>
                  <button
                    onClick={handleGenerate}
                    disabled={isGenerateDisabled}
                    className="ml-6 inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 disabled:bg-gray-400 disabled:text-gray-200"
                  >
                    {isGenerating ? (
                      <>
                        <svg
                          className="w-5 h-5 mr-2 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Generating...
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                        Generate
                      </>
                    )}
                  </button>
                </div>

                {/* Model and Parameters Summary */}
                <div className="mt-6 pt-6 border-t border-secondary-200 dark:border-secondary-700">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-secondary-900 dark:text-secondary-100">
                        Model:
                      </span>
                      <p className="text-secondary-600 dark:text-secondary-400 mt-1">
                        {selectedModel.name} ({selectedModel.provider})
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-secondary-900 dark:text-secondary-100">
                        Temperature:
                      </span>
                      <p className="text-secondary-600 dark:text-secondary-400 mt-1">
                        {parameters.temperature.toFixed(1)}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-secondary-900 dark:text-secondary-100">
                        Max Tokens:
                      </span>
                      <p className="text-secondary-600 dark:text-secondary-400 mt-1">
                        {parameters.maxTokens.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Area */}
              <div className="bg-white dark:bg-secondary-800 rounded-lg border border-secondary-200 dark:border-secondary-700 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100 mb-4">
                  Response
                </h3>

                {/* Chat Messages */}
                <div className="min-h-64">
                  {prompt && (
                    <ChatBubble
                      message={prompt}
                      type="user"
                      timestamp={responseMetadata?.timestamp}
                    />
                  )}

                  {isGenerating && (
                    <div className="flex justify-start mb-4">
                      <div className="max-w-[80%] md:max-w-[70%]">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mr-3">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">
                            {selectedModel.name}
                          </span>
                        </div>
                        <div className="bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 rounded-lg p-4 shadow-sm">
                          <div className="flex items-center space-x-2">
                            <svg
                              className="w-4 h-4 text-primary-500 animate-spin"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            <span className="text-sm text-secondary-600 dark:text-secondary-400">
                              Generating response...
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {response && responseMetadata && (
                    <ChatBubble
                      message={response}
                      type="assistant"
                      timestamp={responseMetadata.timestamp}
                      showCopyButton={true}
                      showDownloadButton={true}
                      onCopy={handleCopyResponse}
                      onDownload={handleDownloadResponse}
                      metadata={{
                        model: responseMetadata.model,
                        tokens: responseMetadata.tokens,
                        temperature: responseMetadata.temperature,
                      }}
                    />
                  )}

                  {!prompt && !response && !isGenerating && (
                    <div className="min-h-64 p-4 bg-secondary-50 dark:bg-secondary-700 rounded-lg border-2 border-dashed border-secondary-300 dark:border-secondary-600 flex items-center justify-center">
                      <div className="text-center">
                        <svg
                          className="w-12 h-12 text-secondary-400 dark:text-secondary-500 mx-auto mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        <p className="text-secondary-600 dark:text-secondary-400">
                          Generated response will appear here
                        </p>
                        <p className="text-xs text-secondary-500 dark:text-secondary-500 mt-2">
                          Enter a prompt and click Generate to get started
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-secondary-800 border-t border-secondary-200 dark:border-secondary-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="text-sm text-secondary-600 dark:text-secondary-400">
              © 2024 AI Interface Prototype. Built with Next.js and Tailwind
              CSS.
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Next.js
              </a>
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Tailwind CSS
              </a>
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Deploy on Vercel
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
