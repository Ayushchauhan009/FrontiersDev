"use client";
import React from "react";
import { projects } from "@/constants";
import { Tilt } from "react-tilt";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full "
      >
        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          {/* <p className="mt-2 text-secondary text-[14px]">{description}</p> */}
        </div>
        <div className="mt-4 flex flex-wrap gap-2"></div>
      </Tilt>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <div>
        <p>My Projects</p>
        <h2>Projects</h2>
      </div>
      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. it reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export { ProjectCard, Projects };
