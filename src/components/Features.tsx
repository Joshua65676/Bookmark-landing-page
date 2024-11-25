import React from "react";
import { FeaturesLink } from "../constants";

const Features: React.FC = () => {
  return (
    <section className="w-full mx-auto md:container max-w-7xl">
      <main className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-3xl font-semibold font-Rubik text-DarkBlue">Features</h3>
          <div className="w-5/12 text-center font-Rubik">
            <p className="text-[16px] font-normal text-GrayishBlue inline leading-[26.2px] -tracking-[2.5%]">
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-row items-center gap-24">
            {FeaturesLink.map(({ id, title }) => (
              <ul key={id}>
                <button className="text-xl font-normal text-center font-Rubik text-GrayishBlue hover:text-DarkBlue">
                  <span>{title}</span>
                </button>
              </ul>
            ))}
          </div>
          <div>
            <hr className="border-2 border-GrayishBlue w-[50rem]"/>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Features;
