import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaLinkedin, FaReact } from 'react-icons/fa';
import { RiMenu3Line, RiMenuFold4Line } from 'react-icons/ri';
import { MdSunny } from 'react-icons/md';
import { IoIosMoon } from 'react-icons/io';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  // Apply theme on load and update localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const menuItems = ['Home', 'Components', 'Templates', 'Contact'];

  return (
    <nav className="fixed z-50 w-full top-0 bg-white border-b-2 border-gray-800 dark:bg-dark-primary dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="font-bold text-rose-500 text-3xl flex gap-2 items-center"
          >
            <FaReact className="animate-spin-slow w-8 h-8" />
            React Forge
            <span className="text-xs text-gray-500">V: 2.0</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <ul className="flex gap-8">
              {menuItems.map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className="text-black dark:text-gray-300 hover:text-rose-500 transition duration-200"
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Theme Toggle and LinkedIn Link */}
            <div className="flex gap-4 items-center">
              <button
                onClick={toggleTheme}
                className="text-black dark:text-white"
                aria-label="Toggle dark mode"
              >
                {theme === 'light' ? (
                  <IoIosMoon className="w-6 h-6" />
                ) : (
                  <MdSunny className="w-6 h-6" />
                )}
              </button>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn"
              >
                <FaLinkedin className="w-8 h-8 text-rose-500" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-black dark:text-white"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <RiMenuFold4Line /> : <RiMenu3Line />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 bg-gray-300 dark:bg-gray-600 rounded shadow-lg p-4">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className="block px-4 py-2 rounded text-black dark:text-white hover:bg-rose-500 transition duration-200"
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={toggleTheme}
                className="text-black dark:text-white"
                aria-label="Toggle dark mode"
              >
                {theme === 'light' ? (
                  <IoIosMoon className="w-6 h-6" />
                ) : (
                  <MdSunny className="w-6 h-6" />
                )}
              </button>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn"
              >
                <FaLinkedin className="w-8 h-8 text-rose-500" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
