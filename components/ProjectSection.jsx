// components/Components.js
import React from "react";
import { projects } from "@/constants";
import { Tilt } from "react-tilt";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, textVariant, staggerContainer } from "@/utils/motion";

const FirstComponent = ({ index, name, image, tags, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#2A153F] cardHovered shadow-2xl hover:bg-transparent border border-transparent hover:border-[#7C22DE] transition-all p-5 rounded-2xl lg:w-auto sm:w-[360px] w-full "
      >
        <div className="mt-5 ">
          <div className="absolute card-img--hover inset-0 flex  justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-16 hover:bg-transparent border border-transparent hover:border-[#7c22de] transition-all bg-white shadow-xl h-16 p-2 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src="/next.png"
                alt="demo"
                className="w-auto h-auto object-contain"
              />
            </div>
          </div>
          <Image
            src={image}
            width={600}
            height={600}
            alt={name}
            className="w-full mb-4 h-[200px] rounded-2xl object-cover"
          />
          <h3 className="text-white font-space font-semibold text-[24px]">
            {name}
          </h3>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-[14px] font-clash text-white ${tag.color} `}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const ProjectSection = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="bgOpacity2">
        <div className="max-container px-5 pb-20 lg:px-24">
          <motion.div className="text-white" variants={textVariant()}>
            <p className="font-extrabold font-clash text-[52px]">
              Our Projects
            </p>
            {/* <h2>Projects</h2> */}
          </motion.div>
          <div className="w-full text-white flex">
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-3 font-space text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
              Following projects showcase our skills and experience through
              real-world examples of our work. Each project is briefly described
              with links to live demos in it. These projects reflect our ability
              to solve complex problems, work with different technologies, and
              manage our work effectively.
              <br />
              <br /> You can check more of our work that we have done by going
              through our individual Portfolio Websites mentioned below.
              <br />
              <br />
              *Hover or click on cards to check the link.
            </motion.p>
          </div>
          <div
            className={`mt-20 grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-10`}
          >
            {projects.map((project, index) => (
              <div className="">
                <FirstComponent
                  key={`project-${index}`}
                  index={index}
                  {...project}
                />
              </div>
            ))}
          </div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-white font-clash text-[32px] mt-10 text-center"
          >
            More to come
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export { FirstComponent, ProjectSection };
