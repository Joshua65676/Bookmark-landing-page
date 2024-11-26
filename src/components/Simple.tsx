import React from "react";
import { Button } from "./ui/Button";
import { tab1 } from "../assets";

const Simple: React.FC = () => {
  return (
    <div className="w-full mx-auto md:container max-w-7xl">
      <main className="flex items-center justify-between w-full py-8 md:flex-row md:gap-44 mx:flex-col mx:gap-28">
        <div className="">
          <div className="relative md:left-36">
            <img src={tab1} alt="Simple image" className="mx:w-[320px] md:w-[400px]" />
          </div>
          <div className="">
            <hr className="absolute md:w-[42rem] md:h-[15rem] bg-SoftBlue top- md:-mt-[12rem] -z-40 left-0 rounded-r-full mx:w-[18.5rem] mx:h-[14rem] mx:-mt-[10.5rem]" />
          </div>
        </div>

        <div className="flex flex-col gap-8 pt-3 md:pl-40 md:w-7/12 mx:text-center md:text-left">
          <div className="">
            <h1 className="text-3xl font-semibold font-Rubik text-DarkBlue">
              Bookmark in one click
            </h1>
          </div>
          <div className="md:w-[23rem] font-Rubik mx:w-[19.5rem]">
            <p className="text-[16px] font-normal text-GrayishBlue inline leading-[26.2px] -tracking-[2.5%]">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
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

export default Simple;
