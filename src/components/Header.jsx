import React from 'react'
import logo from './../assets/images/logo.png';
import { IoLogoYoutube } from "react-icons/io5";



function Header() {
  return (
    <div className="flex justify-between items-center">
      <img src={logo} className="w-[80px]" alt="" />
      <ul className="flex gap-4 md:gap-14">
        <li className="hover:font-bold cursor-pointer">Home</li>
        <li className="hover:font-bold cursor-pointer">About Us</li>
        <li className="hover:font-bold cursor-pointer">Contact Us</li>
      </ul>

      <button className="p-2 pl-3 pr-3 bg-red-500 rounded-full text-lg  text-white flex items-center mr-5">
        Subscribe <span className='ml-2'><IoLogoYoutube /></span>
      </button>
    </div>
  );
}

export default Header