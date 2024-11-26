import React from "react";
import { Button } from "./ui/Button";
import { tab1 } from "../assets";

const Simple: React.FC = () => {
  return (
    <div className="w-full mx-auto md:container max-w-7xl">
      <main className="flex flex-row items-center justify-between w-full py-8 gap-44">
        <div className="">
          <div className="relative left-36">
            <img src={tab1} alt="Simple image" className="w-[]" />
          </div>
          <div className="">
            <hr className="absolute w-[42rem] h-[15rem] bg-SoftBlue top- -mt-[12rem] -z-40 left-0 rounded-r-full" />
          </div>
        </div>

        <div className="flex flex-col w-7/12 gap-8 pt-3 pl-40">
          <div className="">
            <h1 className="text-3xl font-semibold font-Rubik text-DarkBlue">
              Bookmark in one click
            </h1>
          </div>
          <div className="w-[23rem] font-Rubik">
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
