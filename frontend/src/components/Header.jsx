import React from "react";

const Header = ({ text }) => {
  return (
    <header className="w-full py-6 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
        {text}
      </h1>
      <div className="mt-2 h-1 w-16 mx-auto rounded-full bg-orange-500 shadow-md" />
    </header>
  );
};

export default Header;
