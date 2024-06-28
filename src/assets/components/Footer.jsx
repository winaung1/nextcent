import React from "react";
import logo from "../Logo.png";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
export const Footer = () => {
  return (
    <div className="bg-[#263238] p-4 py-10 text-gray-300">
      <div className="max-w-7xl mx-auto flex justify-between">
        <div>
          <img src={logo} alt="" />
          <div className="py-6">
            <p>Copyright 2024 UI Kit</p>
            <p>All rights reserved</p>
          </div>
          <div className="flex items-center space-x-4 text-2xl">
            <FaInstagram />
            <IoBasketballOutline />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

        <div className="md:flex md:space-x-10 justify-between">
          <div>
            <h1 className="text-white pb-2 font-semibold">Company</h1>
            <ul className="text-sm flex flex-col gap-3">
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div className="py-4">
            <h1 className="text-white pb-2 font-semibold">Support</h1>
            <ul className="text-sm flex flex-col gap-3">
              <li>Help center</li>
              <li>Terms of service</li>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Status</li>
            </ul>
          </div>
        <div>
          <h1 className="font-semibold text-white">Stay up to date</h1>
          <div className="flex rounded-lg my-2 bg-gray-700 items-center px-4 py-2">
            <input
              placeholder="Your email address"
              className="bg-transparent "
              type="text"
            />
            <LuSend />
          </div>
        </div>
        </div>

      </div>
    </div>
  );
};
