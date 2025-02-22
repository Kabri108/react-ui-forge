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

  // Menu items with hrefs
  const menuItems = [
    { name: 'QuickStart', href: '/components' },
    { name: 'Components', href: '/components' },
    { name: 'Templates', href: '/templates' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed z-50 w-full top-0 bg-white border-b border-gray-500 dark:bg-dark-primary dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="font-bold text-rose-500 text-3xl flex gap-2 items-center"
          >
            <FaReact className="animate-spin-slow w-8 h-8" />
            React UI Forge
            <span className="bg-blue-500 text-white text-xs font-semibold rounded-full px-2 ml-2">
              Beta
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <ul className="flex gap-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.href}
                    className="text-black dark:text-gray-300 hover:text-rose-500 transition duration-200"
                  >
                    {item.name}
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
                <li key={item.name}>
                  <NavLink
                    to={item.href}
                    className="block px-4 py-2 rounded text-black dark:text-white hover:bg-rose-500 transition duration-200"
                  >
                    {item.name}
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
