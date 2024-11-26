import React from "react";
import { Button } from "./ui/Button";
import { tab2 } from "../assets";

const Speedy: React.FC = () => {
  return (
    <div className="w-full mx-auto md:container max-w-7xl">
      <main className="flex flex-row items-center justify-between w-full py-8 gap-44">
        <div className="">
          <div className="relative left-40">
            <img src={tab2} alt="Speedy image" className="w-[]" />
          </div>
          <div className="">
            <hr className="absolute w-[41rem] h-[18rem] bg-SoftBlue top- -mt-[17rem] -z-40 left-0 rounded-r-full" />
          </div>
        </div>

        <div className="flex flex-col w-7/12 gap-8 pl-44">
          <div className="">
            <h1 className="text-3xl font-semibold font-Rubik text-DarkBlue">
              Intelligent search
            </h1>
          </div>
          <div className="w-[25rem] font-Rubik">
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
