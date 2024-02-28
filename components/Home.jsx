"use client";

import { useEffect, useState } from "react";
import TopBar from "./CommonComps/TopBar";

const Header = ({ trigger, nav, setNav }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateClipPath = () => {
    const ellipseXRadius =
      viewportWidth >= 768 ? 150 + scrollPosition * 2 : 50 + scrollPosition * 2;
    const ellipseYRadius =
      viewportWidth >= 768 ? 150 + scrollPosition * 2 : 50 + scrollPosition * 2;
    const clipPathValue = `ellipse(${ellipseXRadius}px ${ellipseYRadius}px at ${cursorPosition.x}px ${cursorPosition.y}px)`;
    return clipPathValue;
  };

  return (
    <div>
      <TopBar trigger={trigger} nav={nav} setNav={setNav} />
      <div className="header text-white">
        <div className="visibleImage bg-opacity-50">
          <p className="font-bold flex flex-col text-[30px] pt-32 px-6 lg:px-0 lg:text-[70px] font-clash text-center  justify-center items-center h-full lg:h-screen">
            Elevate Your Web Presence <br className="hidden lg:block" /> with
            Innovation{" "}
            <span className="mt-20  animate-bounce">
              <img
                src="/downHeader.png"
                alt=""
                className="w-20 bg-transparent rounded-[15px]  z-50"
              />
            </span>
          </p>
        </div>
        <div
          className="hiddenImage"
          style={{
            clipPath: calculateClipPath(),
          }}
        >
          <p className="font-bold text-[30px] pt-32 flex-col px-6 lg:px-0 font-clash lg:text-[70px] text-center flex justify-center items-center h-full lg:h-screen">
            Boost Your Digital Impact <br className="hidden lg:block" /> with
            Innovation{" "}
            <span className="mt-20 animate-bounce">
              <img
                src="/downHeader.png"
                alt=""
                className="w-20 bg-transparent rounded-full z-50"
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
