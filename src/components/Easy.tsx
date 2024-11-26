import React from "react";
import { Button } from "./ui/Button";
import { tab3 } from "../assets";

const Easy: React.FC = () => {
  return (
    <div className="w-full mx-auto md:container max-w-7xl">
      <main className="flex flex-row items-center justify-between w-full py-8 gap-[11rem]">
        <div className="">
          <div className="relative left-40">
            <img src={tab3} alt="Simple image" className="w-[750p]" />
          </div>
          <div className="">
            <hr className="absolute w-[42rem] h-[17rem] bg-SoftBlue top- -mt-[15rem] -z-40 left-0 rounded-r-full" />
          </div>
        </div>

        <div className="flex flex-col w-7/12 gap-8 pl-48">
          <div className="">
            <h1 className="text-3xl font-semibold font-Rubik text-DarkBlue">
              Share your bookmarks
            </h1>
          </div>
          <div className="w-[24rem] font-Rubik">
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
