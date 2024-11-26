import React from "react";
import { Bookmarklogo } from "../assets";
import { NavLink } from "../constants";
import { ImFacebook2 } from "react-icons/im";
import { TfiTwitterAlt } from "react-icons/tfi";

const Footer: React.FC = () => {
  return (
    <section className="bg-DarkBlue">
      <main className="flex flex-row justify-between w-full gap-16 py-10 mx-auto md:container max-w-7xl">
        <div className="flex flex-row gap-20">
          <a href="/" className="">
            <img src={Bookmarklogo} alt="Bookmark logo" />
          </a>
          <div className="flex flex-row gap-8">
            {NavLink.map(({ id, title, link }) => (
              <div key={id}>
                <a href={link}>
                  <span className="font-Rubik hover:text-SoftRed text-Gray">
                    {title}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <a href="" target="_blank" rel="noopener noreferrer">
            <ImFacebook2 className="w-8 h-6 text-Gray hover:text-SoftRed"/>
          </a>
          <a href="https://twitter.com/okorojoshuaosi2" target="_blank" rel="noopener noreferrer">
            <TfiTwitterAlt className="w-8 h-6 text-Gray hover:text-SoftRed"/>
          </a>
        </div>
      </main>
    </section>
  );
};

export default Footer;
