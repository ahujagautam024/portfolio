import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const html = document.documentElement; // Select the <html> element
    if (darkMode) {
      html.classList.remove("dark"); // Remove 'dark' class for light mode
    } else {
      html.classList.add("dark"); // Add 'dark' class for dark mode
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-gray-800 z-50 dark:bg-white text-gray-200">
      <Link
        to="Hero"
        smooth={true}
        duration={500}
        className="text-2xl font-bold text-gray-200 dark:text-black hover:underline dark:hover:underline cursor-pointer"
      >
        Gautam
      </Link>
      <ul className="flex space-x-8 text-sm font-medium text-gray-200">
        <Link
          to="About"
          smooth={true}
          duration={500}
          className="hover:underline dark:text-black dark:hover:underline cursor-pointer"
        >
          ABOUT
        </Link>
        <Link
          to="Experience"
          smooth={true}
          duration={500}
          className="hover:underline dark:text-black dark:hover:underline cursor-pointer"
        >
          EXPERIENCE
        </Link>
        <Link
          to="Projects"
          smooth={true}
          duration={500}
          className="hover:underline dark:text-black dark:hover:underline cursor-pointer"
        >
          WORK
        </Link>

        <Link
          to="Contact"
          smooth={true}
          duration={500}
          className="hover:underline dark:text-black dark:hover:underline cursor-pointer"
        >
          CONTACT
        </Link>
      </ul>
      <button
        onClick={toggleDarkMode}
        className="text-xl text-gray-200 dark:text-black focus:outline-none"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
};

export default Navbar;
