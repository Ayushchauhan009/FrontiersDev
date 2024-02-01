"use client";

import React, { useState, useEffect } from "react";

const Services = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];

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
    <div className="relative bg-[#a2f2ff] pb-20 text-black">
      <div
        className={` px-5 lg:px-24 max-container ${
          isSticky ? "sticky top-20" : ""
        }`}
      >
        <div className="flex flex-col lg:flex-row items-start lg:space-x-20 justify-between lg:pt-20 ">
          <div className="font-bold w-full lg:w-[150%] sticky top-10 lg:top-20 font-exo">
            <p className="my-10 font-semibold text-3xl lg:text-5xl font-serif ">
              Services
            </p>
            <div className="relative" style={{ height: "300px" }}>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="absolute z-20 shadow-2xl  rounded-[20px]"
                  style={{
                    display: index === visibleIndex ? "block" : "none",
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              ))}
            </div>
          </div>
          <div>
            <ol className="w-full mt-10 lg:mt-32 space-y-20 list-none">
              {[
                {
                  title: "Website Development",
                  description:
                    "Crafting responsive and dynamic websites tailored to your specific needs. From simple landing pages to complex web applications, we bring your online presence to life.",
                  points: [
                    "Customized website development",
                    "Responsive design for all devices",
                    // "User-focused approach",y
                  ],
                },
                {
                  title: "UI/UX Designing",
                  description:
                    "Creating visually appealing and user-friendly interfaces that enhance the overall user experience. Our designs focus on usability, accessibility, and aesthetics.",
                  points: [
                    "Intuitive user interface design",
                    "User experience optimization",
                    // "Aesthetic and modern design principles",
                  ],
                },
                {
                  title: "Content Writing",
                  description:
                    "Delivering compelling and engaging content for your website, blog, or marketing materials. We specialize in creating content that resonates with your target audience.",
                  points: [
                    "Strategic content creation",
                    "Target audience alignment",
                    // "SEO-optimized writing",
                  ],
                },
                {
                  title: "Graphic Designing",
                  description:
                    "Transforming ideas into visually stunning graphics. Our graphic design services cover everything from logos and branding to promotional materials and print design. We focus on bringing your concepts to life through creative and impactful visual elements.",
                  points: [
                    "Logo and branding design",
                    "Promotional materials creation",
                    // "Print design for various media",
                  ],
                },
                {
                  title: "Video Editing",
                  description:
                    "Editing and enhancing video content to tell your story effectively. From promotional videos to tutorials, we ensure your message is communicated seamlessly through professional video editing.",
                  points: [
                    "Professional video editing services",
                    "Effective storytelling through visuals",
                    // "Promotional and tutorial video creation",
                  ],
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="service-list-item  z-0 font-semibold text-[20px] mb-8 relative"
                >
                  {/* <span className="bullet-point absolute">&#8226;</span> */}
                  <div>
                    <span className="block ">
                      {index + 1}. {item.title}
                    </span>
                    <ul className="list-none font-normal backdrop-blur-3xl  headings text-base ml-6">
                      <li>{item.description}</li>
                      {item.points && (
                        <ul className="list-disc font-normal  text-base ml-6">
                          {item.points.map((point, pointIndex) => (
                            <li key={pointIndex}>{point}</li>
                          ))}
                        </ul>
                      )}
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
