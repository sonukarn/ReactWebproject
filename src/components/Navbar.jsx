import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.jpeg";
import { IoIosArrowDown } from "react-icons/io";
import { FaGooglePlusG } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <nav className="flex justify-between items-center m-2">
        <div className="logo w-[80px] my-auto m-3 h-auto">
          <img src={logo} alt="logo" className="w-full" />
        </div>
        <div className={`md:block relative `}>
          <ul
            className={`${
              isOpen
                ? "flex flex-col justify-center items-center absolute z-20 top-16"
                : "hidden"
            } justify-end md:flex font-bold text-xs tracking-wide uppercase gap-[30px] lg:gap-4`}
          >
            <li className="hover:text-red-400 lg:mx[20px] cursor-pointer">
              <Link to="/" className="">
                Home
              </Link>
            </li>
            <li className="hover:text-red-400 lg:mx-[20px] hover:flex justify-center  cursor-pointer relative group">
              <Link to="/" className="flex items-center gap-1">
                industries <IoIosArrowDown className="text-xl" />
              </Link>
              <ul className=" absolute z-10 w-40 top-5 font-normal hidden group-hover:block bg-white text-gray-800 py-2 rounded shadow-lg">
                <Link className="block px-4 py-2 hover:bg-gray-800 hover:text-white">
                  Sugar Plants
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-800 hover:text-white">
                  Power Plants
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-800 hover:text-white">
                  Cement Plants
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-800 hover:text-white">
                  Chemical Plants
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-800 hover:text-white">
                  Water Treatment Plants
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-800 hover:text-white">
                  Steal Plants
                </Link>
              </ul>
            </li>

            <li className="hover:text-red-400 lg:mx-[20px] cursor-pointer relative group hover:flex justify-center">
              <Link className="flex items-center gap-1">
                products <IoIosArrowDown className="text-xl" />
              </Link>
              <ul className="absolute z-10 w-40 top-5 font-normal hidden group-hover:block bg-white text-gray-800 rounded shadow-lg">
                <Link className="block px-4 py-2 hover:bg-gray-800 hover:text-white">
                  Distributed control system
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-800 hover:text-white">
                  PLC & SCADA
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-800 hover:text-white">
                  Power transformer
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-800 hover:text-white">
                  Electric Pannel
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-800 hover:text-white">
                  Field Instrument
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-800 hover:text-white">
                  AC/DC drives
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-800 hover:text-white">
                  Soft-Starters/Switchgears
                </Link>
              </ul>
            </li>
            <li className="hover:text-red-400 lg:mx-[20px] cursor-pointer relative group hover:flex justify-center">
              <Link className="flex items-center gap-1">
                Service
                <IoIosArrowDown className="text-xl" />
              </Link>
              <ul className="absolute z-10 w-40 top-5 font-normal hidden group-hover:block bg-white text-gray-800 rounded shadow-lg">
                <Link className="block px-4 py-2 hover:bg-gray-800 hover:text-white">
                  Turnkey Projects
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-800 hover:text-white">
                  Engineering
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-800 hover:text-white">
                  Commissioning
                </Link>
              </ul>
            </li>
            <li className="hover:text-red-400 lg:mx-[20px] cursor-pointer">
              <Link className="">contact us</Link>
            </li>
            <li className="hover:text-red-400 lg:mx-[20px] cursor-pointer">
              <Link className="">career</Link>
            </li>
          </ul>
        </div>
        <div className="social_icons flex justify-center items-center gap-3">
          <a
            href="#"
            className=" flex justify-center items-center w-9 h-9 rounded-full bg-orange-600 hover:bg-slate-900"
          >
            <FaFacebook className="text-white text-xl font-semibold" />
          </a>
          <a
            href="#"
            className=" flex justify-center items-center w-9 h-9 rounded-full bg-orange-600 hover:bg-slate-900"
          >
            <FaTwitter className="text-white text-xl font-semibold" />
          </a>
          <a
            href="#"
            className=" flex justify-center items-center w-9 h-9 rounded-full bg-orange-600 hover:bg-slate-900"
          >
            <FaGooglePlusG className="text-white text-xl font-semibold" />
          </a>
        </div>
        {isOpen ? (
          <div className="md:hidden " onClick={toggleMenu}>
            <IoClose className="humberger_icon text-3xl font-bold" />
          </div>
        ) : (
          <div className="md:hidden" onClick={toggleMenu}>
            <IoMenu className="humberger_icon text-3xl font-bold" />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
