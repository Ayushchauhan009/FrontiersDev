import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// import {
//   image1,
//   image2,
//   image3,
//   image4,
//   image5,
//   image6,
//   image7,
// } from "../assets";

gsap.registerPlugin(ScrollTrigger);

const Approach = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to(container.current, {
        x: -(container.current.scrollWidth - window.innerWidth + 80),
        scrollTrigger: {
          trigger: container.current,
          duration: 1,
          start: "top 10%",
          end: () =>
            `+=${container.current.scrollWidth + 80 - window.innerWidth}`,
          scrub: 0.6,
          markers: false,
          pin: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="racesWrapper text-white">
        <div
          ref={container}
          className=" py-10  sm:py-20 pl-10 sm:pl-20  relative flex space-x-36 "
        >
          <h2 className="text-[100px] flex flex-col border border-white p-20 items-center text-center space-y-4">
            Haridwar
            <span className="text-[32px]">
              This is the most beautified place of Uttarakhand
            </span>
          </h2>
          <h2 className="text-[100px] flex flex-col border border-white p-20 items-center text-center space-y-4">
            Haridwar
            <span className="text-[32px]">
              This is the most beautified place of Uttarakhand
            </span>
          </h2>
          <h2 className="text-[100px] flex flex-col border border-white p-20 items-center text-center space-y-4">
            Haridwar
            <span className="text-[32px]">
              This is the most beautified place of Uttarakhand
            </span>
          </h2>
          <h2 className="text-[100px] flex flex-col border border-white p-20 items-center text-center space-y-4">
            Haridwar
            <span className="text-[32px]">
              This is the most beautified place of Uttarakhand
            </span>
          </h2>
          <h2 className="text-[100px] flex flex-col border border-white p-20 items-center text-center space-y-4">
            Haridwar
            <span className="text-[32px]">
              This is the most beautified place of Uttarakhand
            </span>
          </h2>
          <h2 className="text-[100px] flex flex-col border border-white p-20 items-center text-center space-y-4">
            Haridwar
            <span className="text-[32px]">
              This is the most beautified place of Uttarakhand
            </span>
          </h2>
          <h2 className="text-[100px] flex flex-col border border-white p-20 items-center text-center space-y-4">
            Haridwar
            <span className="text-[32px]">
              This is the most beautified place of Uttarakhand
            </span>
          </h2>

          {/* <img src={image1} alt="" className="lg:w-[40%] h-auto" />
          <img src={image2} alt="" className="lg:w-[40%] h-auto" />
          <img src={image3} alt="" className="lg:w-[40%] h-auto" />
          <img src={image4} alt="" className="lg:w-[40%] h-auto" />
          <img src={image5} alt="" className="lg:w-[40%] h-auto" />
          <img src={image6} alt="" className="lg:w-[40%] h-auto" />
          <img src={image7} alt="" className="lg:w-[40%] h-auto" /> */}
        </div>
      </div>
    </div>
  );
};

export default Approach;
