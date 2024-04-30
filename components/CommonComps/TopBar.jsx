"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Link from "next/link";

export default function Topbar({ trigger, nav, setNav }) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setHeight(window.scrollY || 0);
    };

    if (typeof window !== undefined) {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const backgroundColor = height > 100 ? "#0f002b" : "transparent";

  return (
    <div
      className={`bg-[${backgroundColor}] navigation transition-all duration-500 bg-opacity-90 fixed z-50 top-0 w-full h-20  border-txt-primary-dark-bg/10 border-solid  mx-auto topbar-section`}
    >
      <div className="mx-auto flex justify-between md:px-6 items-center pt-0 h-full max-w-[1440px] px-4 lg:px-10">
        <div className="font-platiPy text-txt-primary-dark-bg font-black text-sm lg:text-[22px] flex items-center tracking-widest">
          <img src="/logoNav.png" alt="" className="w-16 h-auto mr-0" />
          <span className="text-white hidden lg:block"> FrontiersDev</span>
        </div>

        <div className="flex items-center">
          <div
            className={`button transition-all duration-1000 ${
              nav ? "hidden" : "block"
            }`}
          >
            <button className="mr-8 bg-[#7c22de] font-platiPy hover:bg-transparent px-5 py-3 shadow-2xl scale-90 hover:scale-100 border border-transparent  hover:border-[#7C22DE] transition-all text-[20px] font-medium text-white rounded-[10px]">
              <Link href="#contact-us">Say Hello</Link>
            </button>
          </div>
          <div className="relative h-full flex justify-around items-center w-auto">
            <div onClick={trigger} className="menu-icon hover-target">
              <span className="bg-txt-primary-dark-bg  menu-icon__line menu-icon__line-left"></span>
              <span className="bg-txt-primary-dark-bg menu-icon__line"></span>
              <span className="bg-txt-primary-dark-bg  menu-icon__line menu-icon__line-right"></span>
            </div>
            <Navbar nav={nav} setNav={setNav} />
          </div>
        </div>
      </div>
    </div>
  );
}
