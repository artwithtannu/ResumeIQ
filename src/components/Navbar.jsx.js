import { useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">

          <div className="h-11 w-11 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
            <FaFileAlt className="text-white text-lg" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Resume<span className="text-blue-600">IQ</span>
            </h1>

            <p className="text-xs text-gray-500">
              AI Career Assistant
            </p>
          </div>

        </div>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex gap-10 font-medium text-slate-700">

          <li className="cursor-pointer hover:text-blue-600 transition">
            Features
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            How It Works
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            About
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            Contact
          </li>

        </ul>

        {/* Desktop Buttons */}

        <div className="hidden lg:flex items-center gap-4">

          <button className="font-medium text-slate-700 hover:text-blue-600">
            Login
          </button>

          <button className="px-5 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition">
            Get Started
          </button>

        </div>

        {/* Mobile Icon */}

        <button
          className="lg:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="lg:hidden bg-white border-t">

          <div className="flex flex-col items-center py-6 gap-5">

            <p>Features</p>
            <p>How It Works</p>
            <p>About</p>
            <p>Contact</p>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
              Get Started
            </button>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;