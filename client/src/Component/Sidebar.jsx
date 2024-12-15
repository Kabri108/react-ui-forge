import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi'; // Menu icon
import { IoClose } from 'react-icons/io5'; // Close icon
import { useNavigate, useLocation } from 'react-router-dom';

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
  const isActive = (category) => location.pathname === `/components/${category}`;

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-16 left-4 z-50 p-3 bg-gray-800 text-white rounded-md lg:hidden"
        aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isSidebarOpen ? 'true' : 'false'}
      >
        {isSidebarOpen ? <IoClose className="text-3xl" /> : <FiMenu className="text-3xl" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-14 left-0 w-64 h-screen bg-sky-50 dark:bg-gray-900 border-r-2 border-gray-700 overflow-y-auto transition-transform duration-300 scrollbar-thin scrollbar-thumb-gray-500 dark:scrollbar-thumb-gray-700 scrollbar-track-gray-300 dark:scrollbar-track-gray-800 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="h-full px-3 py-4">
          <h3 className='text-black dark:text-gray-200 font-semibold pb-2'>Components</h3>
          <ul className="border-l ml-2 border-gray-700">
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => {
                  navigate(`/components/${category}`);
                  setIsSidebarOpen(false); // Close sidebar on selection
                }}
                aria-selected={isActive(category)}
                className={`flex justify-between items-center px-3 py-2 my-1 rounded text-sm  cursor-pointer transition-colors duration-200 ${
                  isActive(category)
                    ? 'bg-rose-500 text-white'
                    : 'hover:bg-rose-500 hover:text-white text-gray-800 dark:text-gray-300'
                }`}
              >
                <span className="truncate">{category}</span>
                <span className="text-sm dark:text-gray-300 dark:bg-gray-800 rounded-full border dark:border-gray-700 px-2 bg-sky-100 border-sky-200 text-black ">
                  {categoryCounts[category]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
