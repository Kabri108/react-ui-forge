import React, { useState } from 'react';
import { IoMdCode } from 'react-icons/io';
import { FaRegEye, FaCopy, FaCheck } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MainContent = ({ compoName, compoCode, compoDesc, reactCode }) => {
  const [isPreview, setIsPreview] = useState(true); // Tracks whether Preview or Code is active
  const [isCopied, setIsCopied] = useState(false); // Tracks copy-to-clipboard status

  // Function to handle code copying
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(reactCode);
      toast.success('Code copied to clipboard!');
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    } catch {
      toast.error('Failed to copy the code!');
    }
  };

  return (
    <div className="p-6 max-w-full rounded-xl">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Component Title */}
      <h2 className="text-2xl font-semibold text-black dark:text-white mt-8 hover:text-rose-500 dark:hover:text-rose-500">
        # {compoName}
      </h2>

      {/* Component Description */}
      <p className="text-gray-400 mb-6 pl-5 py-2 text-sm">{compoDesc}</p>

      {/* Preview/Code Toggle Section */}
      <div className="border border-gray-700 rounded overflow-hidden">
        <div className="flex justify-between items-center border-b border-gray-700 px-4 py-2 bg-gray-200 dark:bg-gray-800">
          {/* Preview & Code Toggle Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={() => setIsPreview(true)}
              className={`py-1 px-3 flex items-center gap-2 rounded font-semibold transition duration-200  dark:bg-gray-600 dark:text-gray-300 border border-gray-500 ${
                isPreview
                  ? 'bg-gray-300 text-rose-500 dark:bg-gray-700'
                  : 'hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              <FaRegEye /> Preview
            </button>
            <button
              onClick={() => setIsPreview(false)}
              className={`py-1 px-3 flex items-center gap-2 rounded font-semibold transition duration-200 dark:bg-gray-600 dark:text-gray-300 border border-gray-500 ${
                !isPreview
                  ? 'bg-gray-300 text-rose-500 dark:text-rose-500 dark:bg-gray-700'
                  : 'hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              <IoMdCode /> Code
            </button>
          </div>

          {/* Copy Button */}
          <button
            onClick={copyToClipboard}
            className="py-1 px-3 flex items-center gap-2 rounded font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200 dark:bg-gray-600 dark:text-gray-300 hover:text-rose-500 dark:hover:text-500  border border-gray-500"
          >
            {isCopied ? (
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

        {/* Content Section */}
        <div className="p-4 bg-white dark:bg-gray-900">
          {isPreview ? (
            // Preview Mode
            <div
              className="p-2"
              dangerouslySetInnerHTML={{ __html: compoCode }}
            />
          ) : (
            // Code Mode
            <SyntaxHighlighter language="javascript" style={nightOwl}>
              {reactCode}
            </SyntaxHighlighter>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
