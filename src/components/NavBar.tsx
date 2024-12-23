import React from "react";
import { bookmarklogo } from "../assets";
import { NavLink } from "../constants";
import { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import SideBar from "./SideBar";

const NavBar: React.FC = () => {
  const [stickyClass, setStickyClass] = useState<boolean>(false);
  // const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  
  
  // const handleSidebarToggle = () => {
  //   setSidebarOpen(!sidebarOpen);
  // };
  // const handleSidebarClose = () => {
  //   setSidebarOpen(false);
  // };

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
      <main className="container flex flex-row items-center justify-between w-full mx-auto md:py-8 max-w-7xl mx:py-5">
        <a href="/" className="">
          <img src={bookmarklogo} alt="Bookmark logo" />
        </a>
        <div className="flex-row gap-10 md:flex mx:hidden">
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
        {/* <div className="md:hidden mx:flex">
          <button onClick={handleSidebarToggle}>
            <img src={iconhamburger} alt="hamburger icon" />
          </button>
        </div> */}
        <div className="md:hidden mx:flex">
          <SideBar />
        </div>
      </main>
    </nav>
  );
};

export default NavBar;
