import React from "react";
import { Extensions } from "../constants";
import { Button } from "./ui/Button";

const Extension: React.FC = () => {
  return (
    <section className="w-full py-40 mx-auto md:container max-w-7xl">
      <main className="flex flex-col items-center gap-20">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-3xl font-semibold font-Rubik text-DarkBlue">
            {" "}
            Download the extension
          </h3>
          <div className="text-center md:w-7/12 font-Rubik mx:w-9/12">
            <p className="text-[16px] font-normal text-GrayishBlue inline leading-[26.2px] -tracking-[2.5%]">
              We’ve got more browsers in the pipeline. Please do let us know if
              you’ve got a favourite you’d like us to prioritize.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-10 text-center md:flex-row mx:flex-col">
          {Extensions.map(({ id, image, title, version, dotbg, addbutton }) => (
            <div key={id}>
              <div className="flex flex-col gap-5 bg-white shadow-xl h-[18rem] md:w-[15rem] rounded-xl">
                <div className="flex items-center justify-center">
                  <img src={image} alt={title} className="" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="">
                    <h3 className="text-lg font-semibold font-Rubik ">{title}</h3>
                  </div>
                  <div className="">
                    <span className="text-sm font-Rubik text-GrayishBlue">{version}</span>
                  </div>
                </div>
                <div>
                  <img src={dotbg} alt={title} className="" />
                </div>
                <div>
                  <Button className="text-white bg-SoftBlue w-[13rem] rounded-xl border-SoftBlue hover:text-SoftBlue">
                    <span className="font-Rubik">{addbutton}</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Extension;
