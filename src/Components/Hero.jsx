import React from "react";
import Navbar from "./NavBar";
import herobackground from "../assets/bg-intro-desktop.svg";
import mobileherobackground from "../assets/bg-intro-mobile.svg";
import mockups from "../assets/image-mockups.png";
import Button from "./Button";
import NavBarMobile from "./NavBarMobile";

const Hero = () => {
  return (
    <div className=" sm:pb-12 md:pb-24 lg:pb-60 xl:pb-68 2xl:pb-72 font-public bg-slate-50">
      <div className="relative hidden sm:block z-50">
        <Navbar />
      </div>
      <div className="relative visible sm:hidden z-50">
        <NavBarMobile hamburger/>
      </div>
      <div>
      <div className="relative sm:hidden h-fit">
      <img src={mobileherobackground} alt="mobilehero" className="relative -top-24 right-0 w-screen z-15" />

      <img
          className="absolute scale-75  z-30 -top-40"
          src={mockups}
          alt="phone mockups"
        />

      </div>
      <div className="flex flex-col">
      <h1 className=" md:hidden flex  text-5xl -mt-40 mb-5 font-normal justify-center text-center text-[#2B2F4A]">
            Next generation
            <br />
            digital banking
          </h1>
          <p className="sm:hidden text-gray-400 text-md text-center mb-5 ">
            Take your financial life online. Your Easybank
            <br />
            account will be a one-stop-shop for spending,
            <br />
            saving, budgeting, investing, and much more.
          </p>
          <div className="flex md:hidden pb-10 justify-center">
          <Button text="Request Invite"/>
          </div>
        </div>

      </div>

      <div className="hidden sm:flex sm:pl-20 md:pl-20 lg:pl-32 xl:pl-40 2xl:pl-40">
        <div className="flex w-2/5 flex-col sm:mt-10 md:mt-16 lg:mt-24 xl:mt-28 2xl:mt-28 order-3">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-normal text-[#2B2F4A]">
            Next generation
            <br />
            digital banking
          </h1>
          <p className="pt-6 pb-6 text-gray-400 text-sm s lg:text-base ">
            Take your financial life online. Your Easybank account
            <br />
            will be a one-stop-shop for spending, saving,
            <br />
            budgeting, investing, and much more.
          </p>
          <Button text="Request Invite" />
        </div>
      </div>

      <div className="hidden sm:flex sm:w-3/5">
        <img
          className="flex justify-center scale-50 items-center sm:absolute sm:-right-64 sm:-top-60 md:-right-64 md:-top-60 lg:-right-52 lg:-top-44 xl:-right-40 xl:-top-28 2xl:-top-24 2xl:-right-36 sm:scale-[0.5] md:scale-[0.58] lg:scale-[0.6] xl:scale-90 2xl:scale-95 z-30"
          src={mockups}
          alt="phone mockups"
        />
        <img
          className="invisible sm:visible sm:absolute sm:-top-32 sm:-right-64 md:-top-48 md:-right-80 lg:-top-52 lg:-right-96 xl:-top-60 xl:-right-80 sm:scale-[0.8] md:scale-[0.58] lg:scale-[0.60] xl:scale-[0.7] 2xl:scale-[0.80]"
          src={herobackground}
          alt="herobackground"
        />
      </div>
    </div>
  );
};

export default Hero;
