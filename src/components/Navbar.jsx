import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false); // Yon panel holati

  return (
    <nav className="py-6 border-b border-gray-100 mb-10  fixed left-0 right-0 bg-white z-50">
      <div className="container mx-auto px-4 flex justify-around items-center">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 font-sans">
          Abdullo's Blog
        </h1>

      
        <div className="hidden md:flex gap-7 text-gray-500 font-medium font-sans">
          <Link to="./" className="hover:text-black transition">
            About
          </Link>
          <Link to="./projects" className="hover:text-black transition">
            Projects
          </Link>
          <Link to="./contact" className="hover:text-black transition">
            Contact
          </Link>
        </div>

        
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center gap-1"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-900 transition-transform ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-900 transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-900 transition-transform ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Slide-out Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          } md:hidden flex flex-col p-8 gap-6 z-50`}
        >
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 font-sans">
            Abdullo's Blog
          </h1>
          <Link
            to="./"
            onClick={() => setOpen(false)}
            className="text-gray-700 font-medium hover:text-black"
          >
            About
          </Link>
          <Link
            to="./projects"
            onClick={() => setOpen(false)}
            className="text-gray-700 font-medium hover:text-black"
          >
            Projects
          </Link>
          <Link
            to="./contact"
            onClick={() => setOpen(false)}
            className="text-gray-700 font-medium hover:text-black"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black opacity-30 z-40 md:hidden"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
