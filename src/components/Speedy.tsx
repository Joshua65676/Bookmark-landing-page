import React from "react";
import { Button } from "./ui/Button";
import { tab2 } from "../assets";

const Speedy: React.FC = () => {
  return (
    <div className="w-full mx-auto md:container max-w-7xl">
      <main className="flex items-center justify-between w-full py-8 md:flex-row md:gap-44 mx:flex-col mx:gap-28">
        <div className="">
          <div className="relative md:left-40">
            <img src={tab2} alt="Speedy image" className="mx:w-[320px] md:w-[400px]" />
          </div>
          <div className="">
            <hr className="absolute md:w-[41rem] md:h-[18rem] bg-SoftBlue top- md:-mt-[17rem] -z-40 left-0 rounded-r-full mx:w-[18.5rem] mx:h-[17rem] mx:-mt-[15rem]" />
          </div>
        </div>

        <div className="flex flex-col gap-8 md:w-7/12 md:pl-44 mx:text-center md:text-left">
          <div className="">
            <h1 className="text-3xl font-semibold font-Rubik text-DarkBlue">
              Intelligent search
            </h1>
          </div>
          <div className="md:w-[25rem] font-Rubik mx:w-[20rem]">
            <p className="text-[16px] font-normal text-GrayishBlue inline leading-[26.2px] -tracking-[2.5%]">
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
          </div>
          <div className="flex-row gap-5 fle">
            <Button className="text-white rounded-md bg-SoftBlue hover:text-SoftBlue hover:border-SoftBlue border-SoftBlue">
              <span className=" font-Rubik">More Info</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Speedy;
