import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi'; // Menu icon
import { IoClose } from 'react-icons/io5'; // Close icon
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Sidebar = ({ components }) => {
  const navigate = useNavigate();
  const location = useLocation(); // To determine the active route
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar visibility state

  // Extract unique categories and their counts
  const categoryCounts = components.reduce((acc, component) => {
    acc[component.category] = (acc[component.category] || 0) + 1;
    return acc;
  }, {});
  const categories = Object.keys(categoryCounts);

  // Helper to check if the category is active
  const isActive = (category) =>
    location.pathname === `/components/${category}`;

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-16 left-4 z-50 p-3 bg-gray-800 text-white rounded-md lg:hidden"
        aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isSidebarOpen ? 'true' : 'false'}
      >
        {isSidebarOpen ? (
          <IoClose className="text-3xl" />
        ) : (
          <FiMenu className="text-3xl" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 w-64 max-h-[calc(100vh-4rem)] bg-sky-50 dark:bg-gray-900  overflow-y-auto transition-transform duration-300 scrollbar scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-800 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="h-full px-4 py-6">
          {/* Sidebar Sections */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-black dark:text-gray-200 mb-2">
              Getting Started
            </h2>
            <Link
              to="/getting-started"
              className="text-sm font-medium text-gray-800 dark:text-gray-400 hover:text-black dark:hover:bg-rose-500 transition pl-4 border-l border-gray-700 px-4 py-3  rounded-r hover:border-white hover:border-l-2 dark:hover:text-white"
            >
              Overview and Introduction
            </Link>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black dark:text-gray-200 mb-2">
              Components
            </h2>
            <ul className="border-l  border-gray-300 dark:border-gray-700">
              {categories.map((category) => (
                <li
                  key={category}
                  onClick={() => {
                    navigate(`/components/${category}`);
                    setIsSidebarOpen(false); // Close sidebar on selection
                  }}
                  aria-selected={isActive(category)}
                  className={`flex justify-between items-center px-3 py-2 my-1 rounded-r text-sm font-medium cursor-pointer transition-colors duration-200  ${
                    isActive(category)
                      ? 'bg-rose-500 text-white border-l-2  border-white'
                      : 'hover:bg-rose-500 hover:text-white text-gray-800 dark:text-gray-400'
                  }`}
                >
                  <span className="truncate">{category}</span>
                  <span className="text-xs bg-sky-100 dark:bg-gray-800 text-black dark:text-gray-300 rounded-full px-2 py-1 border border-sky-200 dark:border-gray-700">
                    {categoryCounts[category]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
