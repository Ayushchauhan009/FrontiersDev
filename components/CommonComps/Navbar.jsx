"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar({ nav, setNav }) {
  const [Home, setHome] = useState(true);
  const [ContactMe, setContactMe] = useState("#contact-us");
  const [Projects, setProjects] = useState("#our-projects");

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
            <Link
              id="home"
              href="/"
              className="hover-target font-extrabold text-3xl lg:text-[80px]"
            >
              HOME
            </Link>
          </li>
          <li className="nav__list-item leading-8 400:leading-12 md:leading-16 xl:leading-[75px]">
            <Link
              href="http://"
              target="_blank"
              className="hover-target font-extrabold text-3xl lg:text-[80px]"
            >
              SERVICES
            </Link>
          </li>
          <li className="nav__list-item leading-8 400:leading-12 md:leading-16 xl:leading-[70px]">
            <Link
              href="http://"
              className="hover-target font-exo text-3xl 400:text-5xl  md:text-6xl xl:text-7xl"
            >
              Our Approach
            </Link>
          </li>
          <li
            onClick={handleNavButtons}
            className={`nav__list-item leading-8 400:leading-12 md:leading-16 xl:leading-[70px] ${
              Projects && "active-nav"
            }`}
          >
            <Link
              id="projects"
              href="#our-projects"
              className="hover-target font-exo text-3xl 400:text-5xl  md:text-6xl xl:text-7xl"
            >
              PROJECTS
            </Link>
          </li>
          <li
            onClick={handleNavButtons}
            className={`nav__list-item leading-8 400:leading-12 md:leading-16 xl:leading-[70px] ${
              ContactMe && "active-nav"
            }`}
          >
            <Link
              id="contact"
              href="#contact-us"
              className="hover-target font-exo text-3xl 400:text-5xl  md:text-6xl xl:text-7xl"
            >
              CONTACT US
            </Link>
          </li>
        </ul>
        <p className="font-secondaryHeading delay-350 text-tiny mt-6 opacity-30 lg:text-base">
          Made with 🖤 in india.
        </p>
      </div>
    </nav>
  );
}
