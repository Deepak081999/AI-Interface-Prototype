import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#1f2937",
        },
      ],
    },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "light";

      // Apply theme class to document for proper dark mode
      React.useEffect(() => {
        if (typeof document !== "undefined") {
          if (theme === "dark") {
            document.documentElement.classList.add("dark");
            document.body.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
            document.body.classList.remove("dark");
          }
        }
      }, [theme]);

      // Return story wrapped in theme container
      return React.createElement(
        "div",
        {
          className: `${theme} min-h-screen ${
            theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
          }`,
        },
        React.createElement(
          "div",
          { className: "p-4" },
          React.createElement(Story)
        )
      );
    },
  ],
};

export default preview;
