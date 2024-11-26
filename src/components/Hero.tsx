import React from "react";
import { Button } from "./ui/Button";
import { hero } from "../assets";
const Hero: React.FC = () => {
  return (
    <div className="w-full mx-auto md:container max-w-7xl">
      <main className="flex flex-row items-center justify-between w-full gap-40 py-40">
        <div className="flex flex-col w-7/12 gap-8">
          <div className="">
            <h1 className="text-5xl font-semibold font-Rubik text-DarkBlue">
              A Simple Bookmark Manager
            </h1>
          </div>
          <div className="w-10/12 font-Rubik">
            <p className="text-[16px] font-normal text-GrayishBlue inline leading-[26.2px] -tracking-[2.5%]">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
          </div>
          <div className="flex flex-row gap-5">
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
          <div className="relative left-20">
            <img src={hero} alt="hero image" className="w-[750px]" />
          </div>
          <div className="">
            <hr className="absolute w-[29rem] h-[19rem] bg-SoftBlue top-64 -z-40 right-0 rounded-l-full"/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
