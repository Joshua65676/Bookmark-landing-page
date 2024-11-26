import React, { useState } from "react";
import { Bookmarklogo, iconclose, iconhamburger } from "../assets";
import { Button } from "./ui/Button";
import { NavLink } from "../constants";
import { ImFacebook2 } from "react-icons/im";
import { TfiTwitterAlt } from "react-icons/tfi";

// interface SidebarProps {
//   isOpen: boolean;
//   handleClose: () => void;
// }
const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="">
      <main
        className="container flex flex-col items-center w-full py-8 mx-auto max-w-7xl"
        onClick={toggleIcon}
      >
        {isOpen ? (
          <div className="">
            <button>
              <img src={iconhamburger} alt="hamburger icon" />
            </button>
          </div>
        ) : (
          <div className="container absolute z-10 w-[100vw] bg-DarkBlue bg-opacity-80 h-[100vh] top-0 left-0 py-10 flex flex-col gap-16">
            <div className="flex flex-row justify-between pl-3">
              <img src={Bookmarklogo} alt="" />
              <button>
                <img src={iconclose} alt="close icon" className="pr-4"/>
              </button>
            </div>

            <div className="flex flex-col items-center gap-10">
              <div className="flex flex-col gap-5 text-center">
                <hr className="w-[20rem]"/>
                {NavLink.map(({ id, title, link }) => (
                  <div key={id} className="flex flex-col gap-5">
                    <a href={link}>
                      <span className="text-2xl text-center font-Rubik hover:text-SoftRed text-Gray">
                        {title}
                      </span>
                    </a>
                    <hr />
                  </div>
                ))}
              </div>
              <div>
                <Button className="w-[20rem] bg- border-4 border-white rounded-lg h-[3.5rem]">
                  <span className="text-xl font-bold text-white uppercase font-Rubik">Login</span>
                </Button>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-8 pt-24">
              <a href="" target="_blank" rel="noopener noreferrer">
                <ImFacebook2 className="w-10 h-8 text-Gray hover:text-SoftRed" />
              </a>
              <a
                href="https://twitter.com/okorojoshuaosi2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TfiTwitterAlt className="w-10 h-8 text-Gray hover:text-SoftRed" />
              </a>
            </div>
          </div>
        )}
      </main>
    </section>
  );
};

export default SideBar;
