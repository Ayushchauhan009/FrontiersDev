import React from "react";
import Navbar from "./Navbar";

export default function Topbar({ trigger, nav, setNav }) {
  return (
    <div className="bg-background-primary-dark-color fixed z-50 top-0 w-full  border-txt-primary-dark-bg/10  border-solid h-16 mx-auto topbar-section">
      <div className="mx-auto flex justify-between md:px-6 items-center pt-6 lg:pt-8 h-full max-w-7xl px-4 lg:px-10">
        <div className="font-accentFont text-txt-primary-dark-bg font-black text-sm block lg:text-lg">
          <img src="/logoNav.png" alt="" className="w-16 h-auto" />
        </div>

        <div className="flex items-center">
          <div
            className={`button transition-all duration-1000 ${
              nav ? "hidden" : "block"
            }`}
          >
            <button className="mr-8 bg-[#7C22DE] font-clash hover:bg-transparent px-5 py-3 shadow-2xl scale-90 hover:scale-100 border border-transparent  hover:border-[#7C22DE] transition-all text-[20px] font-medium text-white rounded-[10px]">
              Say Hello
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
