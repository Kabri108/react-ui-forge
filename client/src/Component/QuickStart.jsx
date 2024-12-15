import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaCheck, FaCopy, FaReact } from 'react-icons/fa';

function QuickStart() {
  const [copied, setCopied] = useState(null); // Track which code block is copied

  // Data for steps
  const steps = [
    {
      title: 'Step 1: Create a React + Vite Project',
      description:
        'Begin by setting up a new Vite project. Run the following commands to create a React + Vite app:',
      code: `# Create a new Vite project
npm create vite@latest my-project --template react

# Go into your project folder
cd my-project

# Install dependencies
npm install`,
    },
    {
      title: 'Step 2: Install Tailwind CSS',
      description: 'To add Tailwind CSS to your project, follow these steps:',
      code: `# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer

# Generate Tailwind config files
npx tailwindcss init -p`,
    },
    {
      title: 'Step 3: Enable Dark Mode',
      description:
        'To enable dark mode in Tailwind CSS, modify your tailwind.config.js to include the dark mode strategy:',
      code: `module.exports = {
  darkMode: 'class', // Enable class-based dark mode
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
      title: 'Step 4: Install React Icons',
      description:
        'React UI Forge uses React Icons for icons. Install React Icons by running:',
      code: `# Install React Icons
npm install react-icons`,
    },
    {
      title: 'Step 5: Test Your Setup with a Component',
      description:
        'Now that everything is set up, you can test the library by using one of the simple components. Add the following code to your src/App.jsx:',
      code: `import React from 'react';
import { FaReact } from 'react-icons/fa';

const App = () => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        Welcome to React UI Forge
      </h1>
      <p className="text-gray-600 dark:text-gray-400">
        This is a simple test component to check if everything is working.
      </p>
      <FaReact className="w-12 h-12 text-rose-500" />
    </div>
  );
}

export default App;`,
    },
  ];

  // Copy handler for dynamic steps
  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(index); // Track the copied index
      setTimeout(() => {
        setCopied(null); // Reset after 2 seconds
      }, 2000);
    });
  };

  return (
    <div>
      <section className="text-start px-6">
        <h2 className="text-4xl text-rose-500 font-bold mb-4 flex gap-2">
          <span className="text-rose-500">
            <FaReact className=" animate-spin-slow" />
          </span>
          React UI Forge~ Quick Start
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 pl-10">
          A modern collection of React components designed with Tailwind CSS to
          speed up your development process. Build clean, customizable UIs
          effortlessly.
        </p>
        <hr className="my-4 border-t border border-gray-700" />
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 p-2">
          Getting started
        </h2>

        {/* Loop through steps */}
        <div className="bg-white dark:bg-dark-primary border border-gray-700 p-6 rounded-lg shadow">
          <ol className="list-decimal list-inside space-y-4 dark:text-white text-black">
            {steps.map((step, index) => (
              <li key={index}>
                <strong>{step.title}</strong>
                <p className="text-sm text-gray-500 dark:text-gray-400 m-3">
                  {step.description}
                </p>
                <div className="relative border border-gray-600 rounded">
                  <SyntaxHighlighter language="bash" style={nightOwl}>
                    {step.code}
                  </SyntaxHighlighter>
                  <button
                    onClick={() => handleCopy(step.code, index)}
                    className="absolute top-2 right-2 px-2 py-1 bg-gray-700 text-white rounded flex items-center gap-2 hover:text-rose-500 dark:hover:text-rose-500  border border-gray-500"
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
      </section>
    </div>
  );
}

export default QuickStart;
