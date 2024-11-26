import React, { useState } from "react";
import { FeaturesLink } from "../constants";
import Simple from "./Simple";
import Speedy from "./Speedy";
import Easy from "./Easy";

const MainFeatures: React.FC = () => {
  const [activeFeature, setActiveFeature] =
    useState<string>("Simple Bookmarking");

  const handleButtonClick = (title: string) => {
    setActiveFeature(title);
  };

  const renderFeatureContent = () => {
    switch (activeFeature) {
      case "Simple Bookmarking":
        return <Simple />;
      case "Speedy Searching":
        return <Speedy />;
      case "Easy Sharing":
        return <Easy />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="flex items-center md:gap-24 md:flex-row mx:flex-col mx:gap-5">
          {FeaturesLink.map(({ id, title }) => (
            <div key={id} className="mx:p-3 md:p-0">
              <button
                className={`text-xl font-normal text-center font-Rubik ${
                  activeFeature === title ? "text-DarkBlue border-b-4 border-SoftRed md:h-16 mx:h-12" : "text-GrayishBlue"
                } hover:text-DarkBlue`}
                onClick={() => handleButtonClick(title)}
              >
                <span>{title}</span>
              </button>
              <hr className="absolute w-8/12 left-16 border-GrayishBlue mx:flex md:hidden" />
            </div>
          ))}
        </div>
        <div>
          <hr className=" border-GrayishBlue w-[50rem] md:flex mx:hidden" />
        </div>
      </div>
      <div className="mt-8">{renderFeatureContent()}</div>
    </div>
  );
};

export default MainFeatures;
