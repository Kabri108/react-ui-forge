import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaCheck, FaCopy, FaReact } from "react-icons/fa";

function QuickStart() {
  const [copied, setCopied] = useState(null);

  const steps = [
    {
      title: "Step 1: Create a React + Vite Project",
      description:
        "Begin by setting up a new Vite project. Run the following commands:",
      code: `# Create a new Vite project
npm create vite@latest my-project --template react

# Go into your project folder
cd my-project

# Install dependencies
npm install`,
    },
    {
      title: "Step 2: Install Tailwind CSS",
      description: "To add Tailwind CSS to your project, follow these steps:",
      code: `# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer

# Generate Tailwind config files
npx tailwindcss init -p`,
    },
    {
      title: "Step 3: Enable Dark Mode",
      description: "Enable class-based dark mode in Tailwind CSS:",
      code: `module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`,
    },
    {
      title: "Step 4: Install React Icons",
      description: "Install React Icons for your components:",
      code: `# Install React Icons
npm install react-icons`,
    },
    {
      title: "Step 5: Test Your Setup with a Component",
      description: "Test your setup with this component:",
      code: `import React from 'react';
import { FaReact } from 'react-icons/fa';

const App = () => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        Welcome to React UI Forge
      </h1>
      <p className="text-gray-600 dark:text-gray-400">
        This is a simple test component.
      </p>
      <FaReact className="w-12 h-12 text-rose-500" />
    </div>
  );
}

export default App;`,
    },
  ];

  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(index);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <div className="min-h-screen px-6 py-8 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 mx-6 mb-10">
      {/* Header */}
      <div className="mb-10 border-b border-gray-600 pb-4">
        <h1 className="text-4xl font-bold flex items-center gap-2 text-rose-500">
          <FaReact className="animate-spin-slow" />
          React UI Forge ~ Quick Start
        </h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
        React-UI-Forge is a lightweight component library built with React and Tailwind CSS. It provides reusable, responsive UI components like buttons, modals, and forms. Easy to integrate and customize, it speeds up development while maintaining a consistent design. Perfect for React projects needing clean, responsive components with minimal setup.
        </p>
      </div>

      {/* Steps */}
      <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <ol className="space-y-8">
          {steps.map((step, index) => (
            <li key={index} className="group">
              {/* Step Title */}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-rose-500">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {step.description}
              </p>

              {/* Code Block */}
              <div className="relative bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 shadow-md">
                <SyntaxHighlighter
                  language="bash"
                  style={nightOwl}
                  customStyle={{
                    padding: "1rem",
                    margin: 0,
                  }}
                >
                  {step.code}
                </SyntaxHighlighter>
                {/* Copy Button */}
                <button
                  onClick={() => handleCopy(step.code, index)}
                  className="absolute top-2 right-2 flex items-center gap-1 text-xs font-medium px-2 py-1 bg-gray-800 text-white hover:bg-rose-500 hover:text-white rounded transition"
                >
                  {copied === index ? (
                    <>
                      <FaCheck /> Copied
                    </>
                  ) : (
                    <>
                      <FaCopy /> Copy
                    </>
                  )}
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default QuickStart;
