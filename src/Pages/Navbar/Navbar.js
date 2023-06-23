import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NotificationIcon from './NotificationIcon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <NavLink to="/">
                <h1 className="text-red-600 text-3xl font-bold">Vix</h1>
              </NavLink>
            </div>
            <div className="hidden sm:flex sm:ml-6 space-x-4">
              <NavLink
                exact
                to="/"
                activeClassName="text-red-600"
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Home
              </NavLink>
              <NavLink
                to="/movies"
                activeClassName="text-red-600"
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Movies
              </NavLink>
              <NavLink
                to="/series"
                activeClassName="text-red-600"
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Series
              </NavLink>
              <NavLink
                to="/natok"
                activeClassName="text-red-600"
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Natok
              </NavLink>
            </div>
          </div>
          <div className="flex items-center">
            <div className="ml-4 flex items-center">
              <NavLink
                to="/signin"
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/signup"
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Sign Up
              </NavLink>
              <div className="notification-icon">
                <NotificationIcon />
              </div>
              <div className="search-bar">{/* Search bar component */}</div>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 focus:outline-none focus:text-gray-200 transition duration-300"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={`${isMenuOpen ? 'hidden' : 'inline-flex'}`}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    className={`${isMenuOpen ? 'inline-flex' : 'hidden'}`}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } sm:hidden absolute inset-x-0 top-16 bg-black`}
      >
        <NavLink
          exact
          to="/"
          activeClassName="text-red-600"
          className="block text-white hover:text-gray-200 py-2 px-4 rounded-md text-base font-medium transition-colors duration-300"
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          activeClassName="text-red-600"
          className="block text-white hover:text-gray-200 py-2 px-4 rounded-md text-base font-medium transition-colors duration-300"
          onClick={closeMenu}
        >
          Movies
        </NavLink>
        <NavLink
          to="/series"
          activeClassName="text-red-600"
          className="block text-white hover:text-gray-200 py-2 px-4 rounded-md text-base font-medium transition-colors duration-300"
          onClick={closeMenu}
        >
          Series
        </NavLink>
        <NavLink
          to="/natok"
          activeClassName="text-red-600"
          className="block text-white hover:text-gray-200 py-2 px-4 rounded-md text-base font-medium transition-colors duration-300"
          onClick={closeMenu}
        >
          Natok
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
