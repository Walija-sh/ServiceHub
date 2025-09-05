import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <FaExclamationTriangle className="text-orange-500 text-6xl mb-4" />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
      <p className="text-gray-500 mb-6 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md shadow-md transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
