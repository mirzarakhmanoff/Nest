import React from "react";
import Logo from "@/assets/Header.png";
import { IoIosSearch } from "react-icons/io";
import { IoLocationOutline, IoCartOutline } from "react-icons/io5";
import { FaRegHeart, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto">
      <nav className="flex items-center  justify-center gap-4 mt-5">
        <NavLink to={"/"}>
          <div className="nav__logo">
            <img src={Logo} alt="" />
          </div>
        </NavLink>
        <div className="nav__items flex justify-between border border-green-500 w-[50%] py-3 px-3">
          <div className="nav__select">
            <select name="" id="">
              <option value="">All Categories</option>
            </select>
          </div>
          <div className="nav__search flex items-center w-[70%] border-l-2 px-4">
            <input
              type="text"
              placeholder="Search for items..."
              className="outline-none w-[100%]"
            />
            <IoIosSearch />
          </div>
        </div>

        <div className="location flex items-center">
          <IoLocationOutline />
          <select name="" id="">
            <option value="">
              <span>Your Location</span>
            </option>
          </select>
        </div>
        <div className="buttons flex items-center">
          <button className="relative flex items-center px-4 py-2 bg-white borderrounded-lg ">
            <div className="relative flex items-center">
              <FaRegHeart className="text-[#253D4E] text-2xl" />
              <span className="absolute -top-2 -right-2 bg-[#3BB77E] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white">
                4
              </span>
            </div>
            <p className="ml-3 text-sm font-semibold text-gray-800">Wishlist</p>
          </button>
          <button className="relative flex items-center px-4 py-2 bg-white borderrounded-lg ">
            <div className="relative flex items-center">
              <IoCartOutline className="text-[#253D4E]  text-2xl" />
              <span className="absolute -top-2 -right-2 bg-[#3BB77E] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white">
                4
              </span>
            </div>
            <p className="ml-3 text-sm font-semibold text-gray-800">Cart</p>
          </button>
          <button className="relative flex items-center px-4 py-2 bg-white borderrounded-lg ">
            <div className="relative flex items-center">
              <FaUser className="text-[#253D4E]  text-2xl" />
            </div>
            <p className="ml-3 text-sm font-semibold text-gray-800">Account</p>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
