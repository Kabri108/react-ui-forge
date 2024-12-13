import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaLinkedin, FaReact } from 'react-icons/fa';
import { RiMenu3Line, RiMenuFold4Line } from 'react-icons/ri';
import { MdSunny } from 'react-icons/md';
import { IoIosMoon } from 'react-icons/io';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

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

  return (
    <nav className="fixed z-50 w-full top-0 bg-white border-b-2 border-gray-800 dark:bg-dark-primary dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex justify-between items-center px-5">
          {/* Logo */}
          <Link
            to="/"
            className="font-bold text-rose-500 text-3xl flex gap-2 items-center"
          >
            <FaReact className="text-rose-500 animate-spin-slow w-8 h-8" />{' '}
            React Forge
            <span className='text-xs text-gray-500'>V: 2.O</span>
          </Link>
          <div className=" flex space-x-16">
            <div className="flex gap-6 justify-center items-center">
              {/* Desktop Menu */}
              <ul className="hidden md:flex gap-8">
                {['Home','Components', 'Templates', 'Contact'].map((item) => (
                  <li key={item}>
                    <NavLink
                      to={`/${item.toLowerCase()}`}
                      className="text-black dark:text-white hover:text-rose-500 transition duration-200"
                    >
                      {item}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-black dark:text-white transition duration-200"
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? <RiMenuFold4Line /> : <RiMenu3Line />}
              </button>

              {/* Mobile Menu */}
              {isMobileMenuOpen && (
                <ul className="md:hidden absolute top-full left-0 w-full bg-gray-200 dark:bg-gray-600  space-y-1 p-4 rounded shadow-lg divide-y z-50 mt-2">
                  {['Home','Components', 'Templates', 'Contact'].map((item) => (
                    <li key={item}>
                      <NavLink
                        href={`/${item.toLowerCase()}`}
                        className="block hover:bg-rose-500 text-black dark:text-white px-4 py-2 rounded transition duration-200"
                      >
                        {item}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Dark Mode Toggle and LinkedIn */}
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

              <Link href="https://www.linkedin.com" target="_blank">
                <FaLinkedin className="w-8 h-8 text-rose-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
