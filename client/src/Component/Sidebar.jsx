import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi'; // Import a menu icon
import { IoClose } from 'react-icons/io5'; // Import a close icon
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ components }) => {
  const navigate = useNavigate();
  const location = useLocation(); // To determine the active route
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar visibility state

  // Extract unique categories
  const uniqueCategories = Array.from(new Set(components.map((component) => component.category)));
  const categoryCounts = uniqueCategories.map((category) => ({
    category,
    count: components.filter((component) => component.category === category).length,
  }));

  // Helper to check if the category is active
  const isActive = (category) => location.pathname === `/components/${category}`;

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-16 left-4 z-50 p-2 bg-gray-800 text-white rounded-md lg:hidden"
        aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
      >
        {isSidebarOpen ? <IoClose className="text-2xl" /> : <FiMenu className="text-2xl" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-14 z-40 left-0 w-64 h-screen bg-white dark:bg-dark-primary border-r-2 border-r-gray-700 overflow-y-auto transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="h-full px-3">
          <ul className="space-y-2 font-medium p-3">
            {categoryCounts.map(({ category, count }) => (
              <li
                key={category}
                onClick={() => {
                  navigate(`/components/${category}`);
                  setIsSidebarOpen(false); // Close sidebar on selection
                }}
                aria-selected={isActive(category)}
                className={`flex justify-between p-2 rounded text-xl border-b border-gray-600 cursor-pointer items-center ${
                  isActive(category)
                    ? 'bg-blue-200 text-blue-600 dark:bg-dark-secondary dark:text-rose-500'
                    : 'text-black dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-500'
                } hover:bg-blue-100 dark:hover:bg-dark-secondary transition`}
              >
                <span className="truncate">{category}</span>
                <span className="text-sm text-gray-400 px-2 bg-gray-700 rounded-full">{count}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
