import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ToggleDark from "./ToggleDark";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  // State to manage the visibility of the dropdown menu
  const [nav, setNav] = useState(false);

  // Ref to track the navbar element
  const navRef = useRef();

  // Toggle the visibility of the dropdown menu
  const handleNav = () => {
    setNav(!nav);
  };

  // Close the dropdown menu if clicked outside of the navbar
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setNav(false);
    }
  };

  // Add and remove click event listener to handle closing the dropdown menu when clicked outside
  useEffect(() => {
    if (nav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [nav]);

  return (
    <div
      className="rounded-div flex items-center justify-between h-20 font-bold"
      ref={navRef}
    >
      {/* Logo */}
      <Link to="/">
        <h1 className="text-2xl">CryptoCoinCap</h1>
      </Link>

      {/* Toggle dark mode button on larger screens */}
      <div className="hidden md:block">
        <ToggleDark />
      </div>

      {/* Sign In and Sign Up buttons */}
      <div className="flex items-center space-x-4">
        <Link to="/signin" className="hidden md:block p-4 hover:text-accent">
          Sign In
        </Link>
        <Link
          to="/signup"
          className="bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl"
        >
          Sign Up
        </Link>
      </div>

      {/* Menu icon for smaller screens */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer z-10 ">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      {/* mobile dropdown menu */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-90% bg-primary ease-in duration-300 z-10"
            : "fixed left-[-100%] top-20 h-90% flex flex-col items-center justify-between ease-in duration-300"
        }
      >
        {/* Dropdown menu items */}
        <ul className="w-full p-4">
          <li className="border-b py-6">
            <Link to="/">Home</Link>
          </li>

          <li className="border-b py-6">
            <Link to="/services">Services</Link>
          </li>

          <li className="border-b py-6">
            <Link to="/">Account</Link>
          </li>

          <li className="py-6">
            {/* Toggle dark mode button */}
            <ToggleDark />
          </li>
        </ul>
        {/* Sign In and Sign Up buttons */}
        <div className="flex flex-col w-full p-4">
          <Link to="/signin">
            <button className="w-full my-2 bg-primary border border-secondary rounded-2xl ">
              Sign in
            </button>
          </Link>
          <Link to="/signup">
            <button className="w-full my-2 bg-button text-btnText rounded-2xl shadow-xl ">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
