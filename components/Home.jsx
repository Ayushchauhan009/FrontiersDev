"use client";

import { useEffect, useState } from "react";
import TopBar from "./CommonComps/TopBar";

const Header = ({ trigger, nav, setNav }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateClipPath = () => {
    const ellipseXRadius = 150 + scrollPosition * 2; // Increase size based on scroll position
    const ellipseYRadius = 150 + scrollPosition * 2;
    const clipPathValue = `ellipse(${ellipseXRadius}px ${ellipseYRadius}px at ${cursorPosition.x}px ${cursorPosition.y}px)`;
    return clipPathValue;
  };

  return (
    <div>
      <TopBar trigger={trigger} nav={nav} setNav={setNav} />
      <div className="header text-white">
        <div className="visibleImage">
          <p className="font-bold text-[70px] font-exo text-center flex justify-center items-center h-screen">
            Elevate Your Web Presence <br /> with Innovation
          </p>
        </div>
        <div
          className="hiddenImage"
          style={{
            clipPath: calculateClipPath(),
          }}
        >
          <p className="font-bold text-[70px] font-exo text-center flex justify-center items-center h-screen">
            Boost Your Digital Impact <br /> with Innovation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
