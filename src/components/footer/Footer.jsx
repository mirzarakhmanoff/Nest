import React from "react";
import Logo from "@/assets/Header.png";
import footer1 from "@/assets/footer1.png";
import footer2 from "@/assets/footer2.jpg.png";
import footer3 from "@/assets/footer3.png.png";
import { MdOutlineLocationOn } from "react-icons/md";
import { SlEarphonesAlt } from "react-icons/sl";
import { BsSend } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-white text-black">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-6 items-center justify-between">
          <div className="space-y-6">
            <div className="flex items-center flex-col w-1/2 space-x-4">
              <img src={Logo} alt="Logo" className="w-32" />
              <p className="text-black text-lg">
                Awesome grocery store website template
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <MdOutlineLocationOn className="text-black text-xl" />
                <p>
                  <b className="text-black">Address:</b> 5171 W Campbell Ave
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <SlEarphonesAlt className="text-black text-xl" />
                <p>
                  <b className="text-black">Call Us:</b> (+91) - 540-025-124553
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <BsSend className="text-black text-xl" />
                <p>
                  <b className="text-black">Email:</b> sale@Nest.com
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <CiClock2 className="text-black text-xl" />
                <p>
                  <b className="text-black">Hours:</b> 10:00 - 18:00, Mon - Sat
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-black text-lg font-semibold">Company</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Delivery Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Account Links */}
          <div className="space-y-4">
            <p className="text-black text-lg font-semibold">Account</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Sign In
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  View Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  My Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Track My Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Help Ticket
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Shipping Details
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Compare Products
                </a>
              </li>
            </ul>
          </div>

          {/* Corporate and Popular Links */}
          <div className="space-y-4">
            <p className="text-black text-lg font-semibold">Corporate</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Become a Vendor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Affiliate Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Farm Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Farm Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Our Suppliers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Promotions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-black text-lg font-semibold">Popular</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Milk & Flavoured Milk
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Butter and Margarine
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Eggs Substitutes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Marmalades
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Sour Cream and Dips
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Tea & Kombucha
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Cheese
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
          {/* Install App */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <span className="text-black text-lg font-semibold">
              Install App
            </span>
            <p className="text-gray-400">From App Store or Google Play</p>
            <div className="flex gap-4 mt-4">
              <img src={footer1} alt="App Store" className="w-32" />
              <img src={footer2} alt="Google Play" className="w-32" />
            </div>
          </div>

          {/* Secured Payment Gateways */}
          <div className="flex flex-col items-center md:items-end">
            <p className="text-black text-lg font-semibold">
              Secured Payment Gateways
            </p>
            <img src={footer3} alt="Payment Gateways" className="w-40 mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
