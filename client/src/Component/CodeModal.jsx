import React, { useState } from "react";
import { FaCheck, FaCopy, FaTimes } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import toast, { Toaster } from "react-hot-toast";

const CodeModal = ({ template, onClose }) => {
  if (!template) return null;

  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(template.code);
      toast.success("Code copied to clipboard!");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    } catch {
      toast.error("Failed to copy the code!");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="bg-white dark:bg-gray-900 rounded-lg w-11/12 max-w-5xl p-6 shadow-lg">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200">
            {template.name} - Full Code
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500 transition-all">
            <FaTimes size={20} />
          </button>
        </div>

        {/* Code Block */}
        <div className="max-h-96 overflow-auto border border-gray-700 rounded-md">
          <SyntaxHighlighter language="javascript" style={nightOwl} wrapLines={true}>
            {template.code}
          </SyntaxHighlighter>
        </div>

        {/* Footer Section with Copy Button */}
        <div className="flex justify-end mt-3">
          <button
            onClick={copyToClipboard}
            className="py-1 px-3 flex items-center gap-2 rounded font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200 dark:bg-gray-600 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-500 border border-gray-500"
          >
            {isCopied ? (
              <>
                <FaCheck className="text-green-500" /> Copied
              </>
            ) : (
              <>
                <FaCopy className="text-gray-600 dark:text-gray-300" /> Copy
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeModal;
