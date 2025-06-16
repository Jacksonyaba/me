import React from "react";

const Header = () => (
  <header className="p-6 flex justify-between items-center shadow-md bg-gradient-to-br from-blue-100 to-green-200 
  sticky top-0 z-20 sm-t-800 hover:text-orange-600">
    <h1 className="text-xl font-bold">Jackson</h1>
    <nav className="space-x-4">
         <a href="#hero" className="hover:text-green-600 font-sans">Home</a>
      <a href="#about" className="hover:text-green-600 font-sans">About</a>
      <a href="#portfolio" className="hover:text-green-600 font-sans">Portfolio</a>
      <a href="#skills" className="hover:text-green-600 font-sans">Skills</a>
      <a href="#contact" className="hover:text-green-600 font-sans">Contact</a>
    </nav>
  </header>
);

export default Header;
