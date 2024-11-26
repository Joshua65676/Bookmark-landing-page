import React from "react";
import { Button } from "./ui/Button";
import { tab3 } from "../assets";

const Easy: React.FC = () => {
  return (
    <div className="w-full mx-auto md:container max-w-7xl">
      <main className="flex items-center justify-between w-full py-8 md:gap-[11rem] md:flex-row mx:flex-col mx:gap-28">
        <div className="">
          <div className="relative md:left-40">
            <img src={tab3} alt="Simple image" className="mx:w-[320px] md:w-[400px]" />
          </div>
          <div className="">
            <hr className="absolute md:w-[42rem] md:h-[17rem] bg-SoftBlue top- md:-mt-[15rem] -z-40 left-0 rounded-r-full mx:w-[18.5rem] mx:h-[17rem] mx:-mt-[14.5rem]" />
          </div>
        </div>

        <div className="flex flex-col gap-8 md:pl-48 md:w-7/12 mx:text-center md:text-left">
          <div className="">
            <h1 className="text-3xl font-semibold font-Rubik text-DarkBlue">
              Share your bookmarks
            </h1>
          </div>
          <div className="md:w-[24rem] font-Rubik mx:w-[20rem]">
            <p className="text-[16px] font-normal text-GrayishBlue inline leading-[26.2px] -tracking-[2.5%]">
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
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

export default Easy;
