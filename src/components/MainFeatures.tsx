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
        <div className="flex flex-row items-center gap-24">
          {FeaturesLink.map(({ id, title }) => (
            <ul key={id}>
              <button
                className={`text-xl font-normal text-center font-Rubik ${
                  activeFeature === title ? "text-DarkBlue border-b-4 border-SoftRed h-16" : "text-GrayishBlue"
                } hover:text-DarkBlue`}
                onClick={() => handleButtonClick(title)}
              >
                <span>{title}</span>
              </button>
            </ul>
          ))}
        </div>
        <div>
          <hr className="border border-GrayishBlue w-[50rem]" />
        </div>
      </div>
      <div className="mt-8">{renderFeatureContent()}</div>
    </div>
  );
};

export default MainFeatures;
