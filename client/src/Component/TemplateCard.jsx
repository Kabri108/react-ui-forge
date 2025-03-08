import React from "react";
import { FaCode } from "react-icons/fa";

export default function TemplateCard({ template, onViewCode }) {
  return (
    <div className="relative w-full  bg-white dark:bg-gray-900 border rounded-lg shadow-md overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <img
          src={`/${template.img}`}
          alt={template.name}
          className="w-full h-60 object-cover"
        />
        {/* Beta Tag */}
        <div className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          Beta
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          {template.name}
        </h2>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {template.desc}
        </p>

        {/* View Code Button */}
        <button
          className="mt-3 w-full bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-700 transition-all flex items-center justify-center gap-2"
          onClick={() => onViewCode(template)}
        >
          <FaCode size={20}/>View Code
        </button>
      </div>
    </div>
  );
}
