// Navbar.jsx
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggleNav = () => {
    setNavOpen(!navOpen);
  };

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-0 bg-opacity-50 backdrop-filter backdrop-blur-md ">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo */}
        <div className="flex items-center ">
        <img
            src="/loog.png"
            alt="Logo"
            className="w-20 mr-8 h-30 "
            style={{ imageRendering: "pixelated" }}
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={handleToggleNav}>
            <AiOutlineMenu className="text-white" size={24} />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden space-x-4 md:flex">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="transition duration-300 cursor-pointer hover:text-gray-300"
              onClick={() => console.log(`Navigate to ${item.text}`)}
            >
              {item.text}
            </div>
          ))}
        </div>

        {/* Mobile Menu */}
        {navOpen && (
          <div className="absolute left-0 right-0 flex flex-col items-center py-2 bg-gray-800 bg-opacity-75 md:hidden top-16 backdrop-filter backdrop-blur-md">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="py-2 text-white transition duration-300 cursor-pointer hover:text-gray-300"
                onClick={() => console.log(`Navigate to ${item.text}`)}
              >
                {item.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
