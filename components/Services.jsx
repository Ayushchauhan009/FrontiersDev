"use client";

import React, { useState, useEffect } from "react";

const Services = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const images = [
    "/serv1.png",
    "/serv2.png",
    "/serv3.png",
    "/serv4.png",
    "/serv5.png",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const listItems = document.querySelectorAll(".service-list-item");
      const scrollPosition = window.scrollY;

      listItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setVisibleIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  return (
    <div className="relative bgOpacity2 pb-20 text-white">
      <div
        className={` px-5 lg:px-24 max-container ${
          isSticky ? "lg:sticky inset-0 top-20" : ""
        }`}
      >
        <div className="flex flex-col lg:flex-row items-start lg:space-x-20 justify-between lg:pt-20 ">
          <div className="font-bold w-full lg:w-[100%] sticky top-10 lg:top-20 font-exo">
            <p className="mt-10 mb-16 lg:mb-32 font-semibold  text-3xl lg:text-[55px] headings ">
              Services
            </p>
            <div className="relative" style={{ height: "300px" }}>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="absolute w-[100%] h-[100%] object-contain z-50 opacity-50 md:opacity-100  lg:scale-[1.4]  rounded-[20px]"
                  style={{
                    display: index === visibleIndex ? "block" : "none",
                  }}
                />
              ))}
            </div>
          </div>
          <div>
            <ol className="w-full mt-10 z-0 lg:mt-32 space-y-20 lg:space-y-40 list-none">
              {[
                {
                  title: "Website Development",
                  description:
                    "Crafting responsive and dynamic websites tailored to your specific needs.",
                },
                {
                  title: "UI/UX Designing",
                  description:
                    "Creating visually appealing and user-friendly interfaces that enhance the overall user experience.",
                },
                {
                  title: "Content Writing",
                  description:
                    "Delivering compelling and engaging content for your website, blog, or marketing materials. ",
                },
                {
                  title: "Graphic Designing",
                  description:
                    "Transforming ideas into visually stunning graphics. ",
                },
                {
                  title: "Video Editing",
                  description:
                    "Editing and enhancing video content to tell your story effectively.",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className={`service-list-item z-0 font-semibold text-[20px] mb-8 relative ${
                    index === visibleIndex
                      ? "opacity-100"
                      : "opacity-25 lg:opacity-25"
                  }`}
                  style={{
                    transition: "opacity 0.5s ease-in-out",
                  }}
                >
                  <div>
                    <span className="block headings text-[32px] lg:text-[40px]">
                      {item.title}
                    </span>
                    <ul className="list-none font-space font-normal text-lg lg:text-[20px] mt-2 lg:mt-5">
                      <li>{item.description}</li>
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
