"use client";
import React, { useState } from "react";

export default function Navbar({ nav, setNav }) {
  const [Home, setHome] = useState(true);
  const [ContactMe, setContactMe] = useState(false);
  const [Projects, setProjects] = useState(false);

  function handleNavButtons(e) {
    setNav(!nav);
    switch (e.target.id) {
      case "home":
        setHome(true);
        setContactMe(false);
        setProjects(false);
        break;
      case "contact":
        setHome(false);
        setContactMe(true);
        setProjects(false);
        break;
      case "projects":
        setHome(false);
        setContactMe(false);
        setProjects(true);
        break;

      default:
        break;
    }
  }

  return (
    <nav className="nav ">
      <div className="nav__content font-platiPy pt-[600px]">
        <p className=" mb-3 opacity-30 delay-300">MENU</p>
        <ul className="nav__list">
          <li
            onClick={handleNavButtons}
            className={`nav__list-item leading-8 400:leading-12 md:leading-16 xl:leading-[70px] ${
              Home && "active-nav"
            }`}
          >
            <a
              id="home"
              href="/"
              className="hover-target font-extrabold text-3xl lg:text-[80px]"
            >
              HOME
            </a>
          </li>
          <li className="nav__list-item leading-8 400:leading-12 md:leading-16 xl:leading-[75px]">
            <a
              href="http://"
              target="_blank"
              className="hover-target font-extrabold text-3xl lg:text-[80px]"
            >
              SERVICES
            </a>
          </li>
          <li className="nav__list-item leading-8 400:leading-12 md:leading-16 xl:leading-[70px]">
            <a
              href="http://"
              className="hover-target font-exo text-3xl 400:text-5xl  md:text-6xl xl:text-7xl"
            >
              Our Approach
            </a>
          </li>
          <li
            onClick={handleNavButtons}
            className={`nav__list-item leading-8 400:leading-12 md:leading-16 xl:leading-[70px] ${
              Projects && "active-nav"
            }`}
          >
            <a
              id="projects"
              href="#seeMyWork"
              className="hover-target font-exo text-3xl 400:text-5xl  md:text-6xl xl:text-7xl"
            >
              PROJECTS
            </a>
          </li>
          <li
            onClick={handleNavButtons}
            className={`nav__list-item leading-8 400:leading-12 md:leading-16 xl:leading-[70px] ${
              ContactMe && "active-nav"
            }`}
          >
            <a
              id="contact"
              href="#contactMe"
              className="hover-target font-exo text-3xl 400:text-5xl  md:text-6xl xl:text-7xl"
            >
              CONTACT US
            </a>
          </li>
        </ul>
        <p className="font-secondaryHeading delay-350 text-tiny mt-6 opacity-30 lg:text-base">
          Made with 🖤 in india.
        </p>
      </div>
    </nav>
  );
}
