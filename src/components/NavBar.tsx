import React from "react";
import { bookmarklogo } from "../assets";
import { NavLink } from "../constants";
import { useState, useEffect } from "react";
import { Button } from "./ui/Button";

const NavBar: React.FC = () => {
  const [stickyClass, setStickyClass] = useState<boolean>(false);

  const stickNavbar = () => {
    if (typeof window !== "undefined") {
      const windowHeight = window.scrollY;
      setStickyClass(windowHeight > 50);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50   ${
        stickyClass
          ? "bg-white/20 backdrop-blur-sm border-b border-slate-300 shadow-lg"
          : ""
      }`}
    >
      <main className="flex flex-row items-center justify-between w-full py-8 mx-auto md:container max-w-7xl">
        <a href="/" className="">
          <img src={bookmarklogo} alt="Bookmark logo" />
        </a>
        <div className="flex flex-row gap-10">
          <div className="flex flex-row gap-8">
            {NavLink.map(({ id, title, link }) => (
              <div key={id}>
                <a href={link}>
                  <span className="font-Rubik hover:text-SoftRed">{title}</span>
                </a>
              </div>
            ))}
          </div>
          <div className="-mt-1">
            <Button className="w-20 h-8 rounded border-SoftRed bg-SoftRed hover:text-SoftRed">
              <span className="font-Rubik">Login</span>
            </Button>
          </div>
        </div>
      </main>
    </nav>
  );
};

export default NavBar;
