import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold text-gray-800">
              Showdown Quiz Informals
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-gray-900">Services</Link>
            <Link to="/events" className="text-gray-700 hover:text-gray-900">Events</Link>
            <Link to="/blog" className="text-gray-700 hover:text-gray-900">Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Home</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">About</Link>
              <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Services</Link>
              <Link to="/events" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Events</Link>
              <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Blog</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;