import React from "react";
import { Button } from "./ui/Button";
import { hero } from "../assets";
const Hero: React.FC = () => {
  return (
    <div className="container w-full mx-auto max-w-7xl">
      <main className="flex items-center justify-between w-full py-40 md:gap-40 md:flex-row mx:flex-col-reverse mx:gap-20">
        <div className="flex flex-col gap-8 md:w-7/12 mx:text-center md:text-left">
          <div className="">
            <h1 className="font-semibold md:text-5xl font-Rubik text-DarkBlue mx:text-3xl">
              A Simple Bookmark Manager
            </h1>
          </div>
          <div className="md:w-10/12 font-Rubik mx:w-11/12 mx:pl-5 md:pl-0">
            <p className="text-[16px] font-normal text-GrayishBlue inline leading-[26.2px] -tracking-[2.5%] mx:text-center">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
          </div>
          <div className="flex flex-row gap-5 mx:justify-center md:justify-start">
            <Button className="text-white rounded-md w-36 bg-SoftBlue hover:text-SoftBlue hover:border-SoftBlue border-SoftBlue">
              <span className=" font-Rubik">Get it on Chrome</span>
            </Button>
            <Button className="rounded-md border-Gray bg-Gray w-36 text-DarkBlue hover:border-DarkBlue ">
              <span className="font-Rubik">Get it on Firefox</span>
            </Button>
          </div>
        </div>
        {/* hero image */}
        <div className="">
          <div className="relative md:left-20">
            <img src={hero} alt="hero image" className="md:w-[750px] " />
          </div>
          <div className="">
            <hr className="absolute md:w-[29rem] md:h-[19rem] bg-SoftBlue md:top-64 -z-40 right-0 rounded-l-full mx:w-[18.5rem] mx:h-[12rem] mx:top-[14rem]"/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
