import React from "react";
import Logo from "@/assets/Header.png";
import { IoIosSearch } from "react-icons/io";
import { IoLocationOutline, IoCartOutline } from "react-icons/io5";
import { FaRegHeart, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../context";

const Header = () => {
  const [data] = useStateValue();

  return (
    <div className={`header mx-auto sticky top-0 left-0 bg-white z-30 py-4`}>
      <div className={`container mx-auto`}>
        <nav className="flex items-center justify-between lg:justify-center gap-4 mt-5 px-4 lg:px-0">
          <NavLink to={"/"}>
            <div className="nav__logo">
              <img src={Logo} alt="" className="w-24 md:w-32 lg:w-40" />
            </div>
          </NavLink>

          <div className="hidden lg:flex lg:w-[50%] items-center border border-green-500 py-3 px-3">
            <div className="nav__select">
              <select
                name=""
                id=""
                className="bg-transparent focus:outline-none"
              >
                <option value="">All Categories</option>
              </select>
            </div>
            <div className="nav__search flex items-center w-[70%] border-l-2 px-4">
              <input
                type="text"
                placeholder="Search for items..."
                className="outline-none w-[100%] bg-transparent"
              />
              <IoIosSearch />
            </div>
          </div>

          <div className="hidden lg:flex items-center">
            <IoLocationOutline />
            <select name="" id="" className="bg-transparent focus:outline-none">
              <option value="">
                <span>Your Location</span>
              </option>
            </select>
          </div>

          <div className="flex items-center">
            <NavLink to={"/wishlist"}>
              <button className="relative flex items-center px-4 py-2 bg-transparent rounded-lg">
                <div className="relative flex items-center">
                  <FaRegHeart className="text-[#253D4E] text-2xl" />
                  <span className="absolute -top-2 -right-2 bg-[#3BB77E] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white">
                    {data.wishlist.length}
                  </span>
                </div>
                <p className="ml-3 hidden lg:block text-sm font-semibold text-gray-800">
                  Wishlist
                </p>
              </button>
            </NavLink>

            <button className="relative flex items-center px-4 py-2 bg-transparent rounded-lg">
              <div className="relative flex items-center">
                <IoCartOutline className="text-[#253D4E] text-2xl" />
                <span className="absolute -top-2 -right-2 bg-[#3BB77E] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white">
                  4
                </span>
              </div>
              <p className="ml-3 hidden lg:block text-sm font-semibold text-gray-800">
                Cart
              </p>
            </button>

            <NavLink to={"/admin"}>
              <button className="relative flex items-center px-4 py-2 bg-transparent rounded-lg">
                <div className="relative flex items-center">
                  <FaUser className="text-[#253D4E] text-2xl" />
                </div>
                <p className="ml-3 hidden lg:block text-sm font-semibold text-gray-800">
                  Account
                </p>
              </button>
            </NavLink>
          </div>
        </nav>

        <div className="lg:hidden flex items-center justify-between mt-4 border border-green-500 py-3 px-3">
          <div className="nav__select">
            <select name="" id="" className="bg-transparent focus:outline-none">
              <option value="">All Categories</option>
            </select>
          </div>
          <div className="nav__search flex items-center w-[70%] border-l-2 px-4">
            <input
              type="text"
              placeholder="Search for items..."
              className="outline-none w-[100%] bg-transparent"
            />
            <IoIosSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
