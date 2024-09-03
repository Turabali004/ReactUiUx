// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between overflow-hidden">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <Link to="/">Logo</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            {isOpen ? (
              "X"
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Menu */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col hidden md:flex-row md:flex space-x-8 `}
        >
          <Link to="/products" className="text-white hover:text-blue-300 py-2 md:py-0 overflow-hidden">
            Products
          </Link>
          <Link to="/why-xyz" className="text-white hover:text-blue-300 py-2 md:py-0 overflow-hidden">
            Why XYZ
          </Link>
          <Link to="/resources" className="text-white hover:text-blue-300 py-2 md:py-0 overflow-hidden">
            Resources
          </Link>
          <Link to="/company" className="text-white hover:text-blue-300 py-2 md:py-0 overflow-hidden">
            Company
          </Link>
          <Link to="/pricing" className="text-white hover:text-blue-300 py-2 md:py-0 overflow-hidden">
            Pricing
          </Link>
        </div>

        {/* Login/Signup Buttons */}
        <div className="hidden md:flex justify-center gap-9 items-center space-x-4">
          <Link to="/login" className="text-white hover:text-blue-300 overflow-hidden">
            Login
          </Link>
          <Link to="/login" className="text-white hover:text-blue-300 overflow-hidden">
            Signup
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2 bg-black">
          <Link to="/products" className="block text-white hover:text-blue-300">
            Products
          </Link>
          <Link to="/why-xyz" className="block text-white hover:text-blue-300">
            Why XYZ
          </Link>
          <Link to="/resources" className="block text-white hover:text-blue-300">
            Resources
          </Link>
          <Link to="/company" className="block text-white hover:text-blue-300">
            Company
          </Link>
          <Link to="/pricing" className="block text-white hover:text-blue-300">
            Pricing
          </Link>
          <Link to="/login" className="block text-white hover:text-blue-300">
            Login
          </Link>
          <Link
            to="/signup"
            className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
