import React, { useEffect, useState } from 'react';
import { IoMdCode } from 'react-icons/io';
import { FaRegEye } from 'react-icons/fa';
import { FaCopy, FaCheck } from 'react-icons/fa6';
import * as Icons from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MainContent = ({ compoName, compoCode, compoDesc, reactCode }) => {
  const [isPreview, setIsPreview] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(compoCode)
      .then(() => {
        toast.success('Code copied to clipboard!');
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
      })
      .catch(() => {
        toast.error('Failed to copy the code!');
      });
  };

  return (
    <div className="p-6 max-w-full rounded-xl">
      <Toaster position="top-right" reverseOrder={false} />
      <h2 className="text-2xl font-semibold text-black dark:text-white mt-8">
        # {compoName}
      </h2>
      <p className="text-gray-400 mb-6 pl-4 py-2">{compoDesc}</p>
 
      <div className="border border-gray-700 rounded overflow-hidden ">
        <div className="flex space-x-4  border-gray-700  py-2 px-4 dark:bg-dark-cardboder justify-between bg-gray-200">
          <div className="flex space-x-6">
            <button
              onClick={() => setIsPreview(true)}
              className={`py-1 px-2 rounded font-semibold flex gap-2 items-center border-dark-primary border text-rose-500 border-b-2 border-r-2
        ${
          isPreview
            ? 'bg-gray-300 dark:bg-dark-btnc text-rose-500'
            : 'hover:bg-gray-200 dark:hover:bg-dark-primary'
        }`}
            >
              <FaRegEye /> Preview
            </button>
            <button
              onClick={() => setIsPreview(false)}
              className={`py-1 px-2 rounded font-semibold flex gap-2 items-center border-dark-primary border text-rose-500 border-b-2 border-r-2
                ${
                  isPreview
                    ? 'bg-gray-300 dark:bg-dark-btnc text-rose-500'
                    : 'hover:bg-gray-200 dark:hover:bg-dark-primary'
                }`}
            >
              <IoMdCode className="text-xl" /> Code
            </button>
          </div>
          <button
            onClick={copyToClipboard}
            className={`py-1 px-2 rounded font-semibold flex gap-2 items-center border-dark-primary border text-rose-500 border-b-2 border-r-2
              ${
                isPreview
                  ? 'bg-gray-300 dark:bg-dark-btnc text-rose-500'
                  : 'hover:bg-gray-200 dark:hover:bg-dark-primary'
              }`}
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


          {isPreview ? (
            <div
              className="p-2"
              dangerouslySetInnerHTML={{ __html: compoCode }}
            />
          ) : (
            <div className=" ">
              <SyntaxHighlighter language="javascript" style={nightOwl}>
                {reactCode}
              </SyntaxHighlighter>
            </div>
          )}
        
      </div>
    </div>
  );
};

export default MainContent;
