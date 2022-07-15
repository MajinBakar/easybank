import React from "react";
import logowhite from "../assets/logo-white.svg";
import Socials from "./Socials";
import Button from "./Button"


const Footer = () => {
  return (
    <div className="flex justify-between sm:h-48 bg-[#2d314d] sm:px-14 md:px-20 lg:px-32 xl:px-40 2xl:px-40 sm:py-10 font-public">
      <div className="hidden sm:flex flex-row justify-between">
      <div className="flex flex-col justify-between">
        <div>
          <img src={logowhite} alt="logo" />
        </div>
        <div>
          <Socials />
        </div>
      </div>
      <ul className="flex flex-col text-gray-400 text-sm lg:text-base px-2 md:px-10 lg:px-24 xl:px-40">
        <li className="pb-2 cursor-pointer hover:text-teal-600">About Us</li>
        <li className="pb-2 cursor-pointer hover:text-teal-600">Contact</li>
        <li className="cursor-pointer hover:text-teal-600">Blog</li>
      </ul>
      <ul className="flex flex-col text-gray-400 text-sm lg:text-base">
        <li className="pb-2 cursor-pointer hover:text-teal-600">Careers</li>
        <li className="pb-2 cursor-pointer hover:text-teal-600">Support</li>
        <li className="cursor-pointer hover:text-teal-600">Privacy Policy</li>
      </ul>
      </div>


      <div className="flex flex-col items-center w-full sm:hidden bg-[#2d314d] text-center pt-10">
          <img src={logowhite} alt="logo" className="pb-6"/>
          <Socials/>
        <ul className="text-white text-base pt-5">
        <li className="pb-2 cursor-pointer hover:text-teal-600">About Us</li>
        <li className="pb-2 cursor-pointer hover:text-teal-600">Contact</li>
        <li className="cursor-pointer hover:text-teal-600">Blog</li>
      </ul>
      <ul className="text-white text-base pt-2 pb-5">
        <li className="pb-2 cursor-pointer hover:text-teal-600">Careers</li>
        <li className="pb-2 cursor-pointer hover:text-teal-600">Support</li>
        <li className="cursor-pointer hover:text-teal-600">Privacy Policy</li>
      </ul>

          <Button text="Request Invite"/>
          <p className="text-gray-400 text-sm lg:text-base pt-5 pb-10">EasyBank. All Rights Reserved</p>
      </div>




      <div className="hidden sm:flex flex-col justify-between">
        <div className="flex justify-end">
        <Button text="Request Invite"/>
        </div>
        <p className="text-gray-400 text-sm lg:text-base">EasyBank. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
