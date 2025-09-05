import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { NavLink, Link } from 'react-router-dom';
import { IoChevronDown } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Placeholder auth state
  const isAuthenticated = false;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2 px-6 sm:px-12 flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center">
          <FaLocationDot className="w-5 h-5 mr-1 text-gray-500" />
          <span>Detect my location</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Help</span>
          <span>EN</span>
          <span>UR</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between p-4 sm:p-6 shadow-md">
        <Link to="/" className="text-2xl font-bold text-gray-800">ServiceHub</Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8 text-lg">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500"
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500"
            }
          >
            Find Services
          </NavLink>

          {/* Categories dropdown */}
          <div className="relative group">
            <span className="flex items-center hover:text-orange-500 cursor-pointer">
              Categories 
              <IoChevronDown className="ml-1 text-xl" />
            </span>
            <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
              <NavLink to="/categories/1" className="block px-4 py-2 hover:bg-gray-100">Category 1</NavLink>
              <NavLink to="/categories/2" className="block px-4 py-2 hover:bg-gray-100">Category 2</NavLink>
              <NavLink to="/categories/3" className="block px-4 py-2 hover:bg-gray-100">Category 3</NavLink>
            </div>
          </div>

          <NavLink 
            to="/pricing" 
            className={({ isActive }) => 
              isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500"
            }
          >
            Pricing
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500"
            }
          >
            About
          </NavLink>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          {!isAuthenticated ? (
            <>
              <NavLink to="/auth?mode=login" className={({ isActive }) => 
                isActive ? "text-orange-500 font-semibold" : "text-gray-600 hover:text-orange-500"
              }>
                Sign In
              </NavLink>
              <NavLink to="/provider">
                <button className="px-6 py-2 border border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-50 transition-colors">
                  Become a Provider
                </button>
              </NavLink>
              <NavLink to="/auth?mode=signup">
                <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                  Sign Up
                </button>
              </NavLink>
            </>
          ) : (
            <div className="flex items-center space-x-2">
              <NavLink to="/account" className={({ isActive }) => 
                isActive ? "text-orange-500 font-semibold" : "text-gray-600 hover:text-orange-500"
              }>
                My Account
              </NavLink>
              <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors">
                Sign Out
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex flex-col items-center space-y-4 text-center">
          <NavLink to="/" className="block w-full px-4 py-2 hover:bg-gray-100 rounded-md">Home</NavLink>
          <NavLink to="/services" className="block w-full px-4 py-2 hover:bg-gray-100 rounded-md">Find Services</NavLink>
          <NavLink to="/categories" className="block w-full px-4 py-2 hover:bg-gray-100 rounded-md">Categories</NavLink>
          <NavLink to="/pricing" className="block w-full px-4 py-2 hover:bg-gray-100 rounded-md">Pricing</NavLink>
          <NavLink to="/about" className="block w-full px-4 py-2 hover:bg-gray-100 rounded-md">About</NavLink>

          {!isAuthenticated && (
            <>
              <NavLink to="/auth?mode=login" className="block w-full px-4 py-2 hover:bg-gray-100 rounded-lg">Sign In</NavLink>
              <NavLink to="/provider">
                <button className="w-full px-4 py-2 border border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-50 transition-colors">
                  Become a Provider
                </button>
              </NavLink>
              <NavLink to="/auth?mode=signup">
                <button className="w-full px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                  Sign Up
                </button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
