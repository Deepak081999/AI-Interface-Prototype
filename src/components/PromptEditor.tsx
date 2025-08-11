"use client";

import { useState, useEffect } from "react";
import templatesData from "@/data/templates.json";

export interface Template {
  id: string;
  name: string;
  description: string;
  prompt: string;
  parameters: {
    temperature: number;
    maxTokens: number;
  };
}

interface PromptEditorProps {
  prompt: string;
  onPromptChange: (prompt: string) => void;
  onTemplateLoad: (template: Template) => void;
}

export default function PromptEditor({
  prompt,
  onPromptChange,
  onTemplateLoad,
}: PromptEditorProps) {
  const [templates] = useState<Template[]>(templatesData.templates);
  const [selectedTemplate, setSelectedTemplate] = useState<string>("");
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [newTemplateName, setNewTemplateName] = useState("");
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setCharCount(prompt.length);
  }, [prompt]);

  const handleTemplateLoad = (template: Template) => {
    onTemplateLoad(template);
    setSelectedTemplate(template.id);
    setIsTemplateModalOpen(false);
  };

  const handleSaveTemplate = () => {
    if (newTemplateName.trim()) {
      // In a real app, this would save to a backend or localStorage
      console.log("Saving template:", {
        name: newTemplateName,
        prompt: prompt,
      });
      setNewTemplateName("");
      setIsSaveModalOpen(false);
    }
  };

  const clearPrompt = () => {
    onPromptChange("");
    setSelectedTemplate("");
  };

  return (
    <div className="bg-white dark:bg-secondary-800 rounded-lg border border-secondary-200 dark:border-secondary-700 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100">
          Prompt Editor
        </h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsTemplateModalOpen(true)}
            className="inline-flex items-center px-3 py-2 border border-secondary-300 dark:border-secondary-600 rounded-md text-sm font-medium text-secondary-700 dark:text-secondary-300 bg-white dark:bg-secondary-700 hover:bg-secondary-50 dark:hover:bg-secondary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Load Template
          </button>
          <button
            onClick={() => setIsSaveModalOpen(true)}
            className="inline-flex items-center px-3 py-2 border border-secondary-300 dark:border-secondary-600 rounded-md text-sm font-medium text-secondary-700 dark:text-secondary-300 bg-white dark:bg-secondary-700 hover:bg-secondary-50 dark:hover:bg-secondary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            Save Template
          </button>
          <button
            onClick={clearPrompt}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-error-600 dark:text-error-400 hover:text-error-800 dark:hover:text-error-300 focus:outline-none focus:ring-2 focus:ring-error-500 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Clear
          </button>
        </div>
      </div>

      <div className="relative">
        <textarea
          value={prompt}
          onChange={(e) => onPromptChange(e.target.value)}
          placeholder="Enter your prompt here..."
          className="w-full h-64 p-4 border border-secondary-300 dark:border-secondary-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-secondary-100 placeholder-secondary-500 dark:placeholder-secondary-400"
        />
        <div className="absolute bottom-3 right-3 text-xs text-secondary-500 dark:text-secondary-400 bg-white dark:bg-secondary-700 px-2 py-1 rounded border border-secondary-200 dark:border-secondary-600">
          {charCount.toLocaleString()} characters
        </div>
      </div>

      {selectedTemplate && (
        <div className="mt-4 p-3 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg">
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-primary-600 dark:text-primary-400 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm text-primary-800 dark:text-primary-200">
              Template loaded:{" "}
              {templates.find((t) => t.id === selectedTemplate)?.name}
            </span>
          </div>
        </div>
      )}

      {/* Template Loading Modal */}
      {isTemplateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-secondary-800 rounded-lg max-w-2xl w-full max-h-96 overflow-hidden">
            <div className="p-6 border-b border-secondary-200 dark:border-secondary-700">
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100">
                Load Template
              </h3>
            </div>
            <div className="p-6 overflow-y-auto max-h-80">
              <div className="space-y-4">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    className="border border-secondary-200 dark:border-secondary-700 rounded-lg p-4 hover:bg-secondary-50 dark:hover:bg-secondary-700 cursor-pointer transition-colors"
                    onClick={() => handleTemplateLoad(template)}
                  >
                    <h4 className="font-medium text-secondary-900 dark:text-secondary-100 mb-2">
                      {template.name}
                    </h4>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-3">
                      {template.description}
                    </p>
                    <div className="text-xs text-secondary-500 dark:text-secondary-500">
                      Temperature: {template.parameters.temperature} • Max
                      Tokens: {template.parameters.maxTokens}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 border-t border-secondary-200 dark:border-secondary-700 flex justify-end">
              <button
                onClick={() => setIsTemplateModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-secondary-700 dark:text-secondary-300 hover:text-secondary-900 dark:hover:text-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Save Template Modal */}
      {isSaveModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-secondary-800 rounded-lg max-w-md w-full">
            <div className="p-6 border-b border-secondary-200 dark:border-secondary-700">
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100">
                Save Template
              </h3>
            </div>
            <div className="p-6">
              <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                Template Name
              </label>
              <input
                type="text"
                value={newTemplateName}
                onChange={(e) => setNewTemplateName(e.target.value)}
                placeholder="Enter template name..."
                className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-secondary-100"
              />
            </div>
            <div className="p-6 border-t border-secondary-200 dark:border-secondary-700 flex justify-end space-x-3">
              <button
                onClick={() => setIsSaveModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-secondary-700 dark:text-secondary-300 hover:text-secondary-900 dark:hover:text-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveTemplate}
                disabled={!newTemplateName.trim()}
                className="px-4 py-2 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
