import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Product */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/how-it-works">How it works</NavLink></li>
            <li><NavLink to="/pricing">Pricing</NavLink></li>
            <li><NavLink to="/categories">Categories</NavLink></li>
            <li><NavLink to="/app">App (Coming Soon)</NavLink></li>
          </ul>
        </div>

        {/* Customers */}
        <div>
          <h4 className="font-semibold mb-3 text-white">For Customers</h4>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/services">Find services</NavLink></li>
            <li><NavLink to="/bookings">My bookings</NavLink></li>
            <li><NavLink to="/help">Help Center</NavLink></li>
          </ul>
        </div>

        {/* Providers */}
        <div>
          <h4 className="font-semibold mb-3 text-white">For Providers</h4>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/provider">Become a provider</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/payouts">Payouts</NavLink></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/careers">Careers</NavLink></li>
            <li><NavLink to="/terms">Terms</NavLink></li>
            <li><NavLink to="/privacy">Privacy</NavLink></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2024 ServiceHub</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <FaFacebookF className="hover:text-white cursor-pointer" />
          <FaTwitter className="hover:text-white cursor-pointer" />
          <FaInstagram className="hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
