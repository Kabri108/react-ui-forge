import React, { useEffect, useState } from 'react';
import { IoMdCode } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { FaCopy, FaCheck } from "react-icons/fa6";
import * as Icons from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MainContent = ({ compoName, compoCode, compoDesc, reactCode }) => {
  const [isPreview, setIsPreview] = useState(true);
  const [isCopied, setIsCopied] = useState(false);



  const copyToClipboard = () => {
    navigator.clipboard.writeText(compoCode).then(() => {
      toast.success("Code copied to clipboard!");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    }).catch(() => {
      toast.error("Failed to copy the code!");
    });
  };
 

  return (
    <div className="p-6 max-w-full rounded-xl">
      <Toaster position="top-right" reverseOrder={false} />
      <h2 className="text-2xl font-semibold text-black dark:text-white mt-8">
        # {compoName}
      </h2>
      <p className="text-gray-400 mb-6 pl-4 py-2">{compoDesc}</p>
      
      <div className="border border-gray-700 rounded-xl overflow-hidden">
        <div className="flex space-x-4 border-b border-gray-700 p-4 dark:bg-slate-600 justify-between bg-gray-200">
          <div className="flex space-x-6">
            <button
              onClick={() => setIsPreview(true)}
              className="text-black dark:text-rose-500 hover:text-rose-500 dark:hover:text-white dark:bg-slate-800 py-1 px-2 rounded dark:hover:bg-gray-700 border border-black flex gap-2 items-center hover:bg-gray-200"
            >
              <FaRegEye /> Preview
            </button>
            <button
              onClick={() => setIsPreview(false)}
              className="text-black dark:text-rose-500 hover:text-rose-500 dark:hover:text-white dark:bg-slate-800 py-1 px-2 rounded dark:hover:bg-gray-700 border border-black flex gap-2 items-center hover:bg-gray-200"
            >
              <IoMdCode className="text-xl" /> Code
            </button>
          </div>
          <button
            onClick={copyToClipboard}
            className="text-black dark:text-rose-500 hover:text-rose-500 dark:hover:text-white dark:bg-slate-800 py-1 px-2 rounded dark:hover:bg-gray-600 border border-black flex gap-2 items-center hover:bg-gray-200"
          >
            {isCopied ? <><FaCheck /> Copied</> : <><FaCopy /> Copy</>}
          </button>
        </div>

        <div className="">
          {isPreview ? (
            <div
              className=" p-2 "
              dangerouslySetInnerHTML={{ __html: compoCode }}
            />
          ) : (
            <div className="">
       <SyntaxHighlighter language="javascript" style={nightOwl}>
          {reactCode}
        </SyntaxHighlighter>
    </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
