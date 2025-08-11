"use client";

import { useState } from "react";

interface ChatBubbleProps {
  message: string;
  type: "user" | "assistant";
  timestamp?: Date;
  showCopyButton?: boolean;
  showDownloadButton?: boolean;
  onCopy?: () => void;
  onDownload?: () => void;
  metadata?: {
    model?: string;
    tokens?: number;
    temperature?: number;
  };
}

export default function ChatBubble({
  message,
  type,
  timestamp,
  showCopyButton = true,
  showDownloadButton = false,
  onCopy,
  onDownload,
  metadata,
}: ChatBubbleProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      onCopy?.();
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleDownload = () => {
    const data = {
      message,
      type,
      timestamp,
      metadata,
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `chat-message-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    onDownload?.();
  };

  const isUser = type === "user";
  const bubbleClasses = isUser
    ? "bg-primary-600 text-white ml-auto shadow-md"
    : "bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 border border-secondary-200 dark:border-secondary-700 shadow-sm";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-[80%] md:max-w-[70%] ${
          isUser ? "order-2" : "order-1"
        }`}
      >
        {/* Avatar */}
        {!isUser && (
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
              {metadata?.model || "AI Assistant"}
            </span>
          </div>
        )}

        {/* Message Bubble */}
        <div className={`rounded-lg p-4 shadow-sm ${bubbleClasses}`}>
          <div className="whitespace-pre-wrap break-words text-sm leading-relaxed">
            {message}
          </div>

          {/* Actions */}
          {(showCopyButton || showDownloadButton) && !isUser && (
            <div className="flex items-center justify-end space-x-2 mt-3 pt-3 border-t border-secondary-200 dark:border-secondary-600">
              {showCopyButton && (
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center px-2 py-1 text-xs font-medium text-secondary-600 dark:text-secondary-400 hover:text-secondary-800 dark:hover:text-secondary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded transition-colors"
                  title="Copy message"
                >
                  {copied ? (
                    <>
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Copied
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      Copy
                    </>
                  )}
                </button>
              )}

              {showDownloadButton && (
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center px-2 py-1 text-xs font-medium text-secondary-600 dark:text-secondary-400 hover:text-secondary-800 dark:hover:text-secondary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded transition-colors"
                  title="Download as JSON"
                >
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  JSON
                </button>
              )}
            </div>
          )}
        </div>

        {/* Metadata and Timestamp */}
        {(timestamp || metadata) && (
          <div className="mt-2 flex items-center justify-between text-xs text-secondary-500 dark:text-secondary-400">
            <div className="flex items-center space-x-3">
              {metadata?.temperature !== undefined && (
                <span>Temp: {metadata.temperature}</span>
              )}
              {metadata?.tokens && <span>{metadata.tokens} tokens</span>}
            </div>
            {timestamp && (
              <span>
                {timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
