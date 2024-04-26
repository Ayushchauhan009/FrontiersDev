import React, { useState, useEffect, useRef } from "react";
// import CPP from "../../Assets/icons/c++.svg";
// import C from "../../Assets/icons/c.svg";
// import PYTHON from "../../Assets/icons/python.svg";
// import JAVASCRIPT from "../../Assets/icons/javascript.svg";
// import HTML from "../../Assets/icons/html5.svg";
// import CSS from "../../Assets/icons/css3.svg";
// import Reactjs from "../../Assets/icons/reactjs.svg";
// import SASS from "../../Assets/icons/sass.svg";
// import JQuery from "../../Assets/icons/jquery.svg";
// import Tailwind from "../../Assets/icons/tailwindcss.svg";
// import Nextjs from "../../Assets/icons/next-js.svg";
// import Node from "../../Assets/icons/node.svg";
// import Express from "../../Assets/icons/express.svg";
// import Firebase from "../../Assets/icons/firebase.svg";
// import MySql from "../../Assets/icons/mysql.svg";
// import Mongo from "../../Assets/icons/mongo.svg";
// import Figma from "../../Assets/icons/figma.svg";
// import Git from "../../Assets/icons/git.svg";
// import Github from "../../Assets/icons/github.svg";
// import Linux from "../../Assets/icons/linux.png";
// import Ubuntu from "../../Assets/icons/ubuntu.svg";
// import vsCode from "../../Assets/icons/vsCode.svg";
// import Programming from "../../Assets/icons/programming.svg";
// import Frontend from "../../Assets/icons/webdesign.svg";
// import Backend from "../../Assets/icons/server.svg";
// import Databases from "../../Assets/icons/db.svg";
// import UI_UX from "../../Assets/icons/ui-ux.svg";
// import Vim from "../../Assets/icons/vim.svg";
// import "./Technologies.css";
// import "aos/dist/aos.css";

export default function Technologies() {
  const [toogle, setToogle] = useState(1);
  const [path, setPath] = useState("Website Development");

  const handleTabs = (number) => {
    setToogle(number);
  };

  const showContent = () => {
    switch (toogle) {
      case 1:
        return (
          <div className="img-box flex w-full text-white font-space text-[20px] py-4 px-8 h-full ">
            <p>Hello world</p>
          </div>
        );
      case 2:
        return (
          <div className="img-box flex w-full flex-wrap justify-around mt-6 Frontend content">
            <p></p>
          </div>
        );
      case 3:
        return (
          <div className="img-box flex w-full flex-wrap justify-around mt-6 backend content">
            <p></p>
          </div>
        );
      case 4:
        return (
          <div className="img-box flex w-full flex-wrap justify-around mt-6 databases content">
            <p></p>
          </div>
        );
      case 5:
        return (
          <div className="img-box flex w-full flex-wrap justify-around mt-6 ui_ux content">
            <p></p>
          </div>
        );

      default:
        break;
    }
  };

  return (
    <div className="tech-cover font-platiPy relative w-full lg:h-[800px] flex lg:items-center justify-center  technologies-section lg:mt-12">
      <div className="skills-cover w-10/12 h-[100%]  -mt-14  lg:mt-0  relative ">
        <div className="technology-box min-h-[20rem] w-full lg:translate-x-[50px] lg:-translate-y-[100px] max-w-128 lg:max-w-[62rem] lg:h-[32rem]">
          <div className="opacity-20 absolute -inset-6 md:-inset-8 bg-gradient-to-r from-[#3500d3] via-red-500  to-yellow-400 rounded-lg animate-tilt"></div>
          <div className="transform translate-y-20 transition relative w-full h-full skills bg-[#000000af] rounded-xl border  border-[#7C22DE] px-3 py-2 md:px-4 lg:px-6">
            <div className="w-full flex flex-col lg:flex-row lg:h-full py-4">
              <div className="buttons flex overflow-x-scroll h-full w-full py-6 px-4 items-center border-b space-y-0 lg:space-y-6 lg:flex-col lg:overflow-x-hidden  lg:w-80 lg:border-r lg:border-r-[#7C22DE] lg:border-b-0 lg:justify-between lg:py-0 lg:px-0 lg:pr-6">
                <button
                  onClick={() => {
                    handleTabs(1);
                    setPath("Website Development");
                  }}
                  className={`${
                    toogle === 1 && "tabs-active"
                  } h-20  mr-4 p-4 lg:text-xl  flex flex-col items-center justify-center rounded-lg lg:mr-0 lg:w-full`}
                >
                  {/* <img
                    className="w-7 -mt-2"
                    src={Programming}
                    alt="programming language logo"
                  /> */}
                  <span className="leading-[26px] text-lg lg:text-xl ">
                    Website Development
                  </span>
                </button>
                <button
                  onClick={() => {
                    handleTabs(2);
                    setPath("UI/UX Designing");
                  }}
                  className={`${
                    toogle === 2 && "tabs-active"
                  } h-20  mr-4 p-4 lg:text-xl  flex flex-col items-center justify-center rounded-lg lg:mr-0 lg:w-full`}
                >
                  {/* <img
                    className="w-7 -mt-2  "
                    src={Frontend}
                    alt="frontend library logo"
                  /> */}
                  <span className="leading-[26px] text-lg lg:text-xl">
                    UI/UX Designing
                  </span>
                </button>
                <button
                  onClick={() => {
                    handleTabs(3);
                    setPath("Content Writing");
                  }}
                  className={`${
                    toogle === 3 && "tabs-active"
                  } h-20  mr-4 p-4 lg:text-xl  flex flex-col items-center justify-center rounded-lg lg:mr-0 lg:w-full`}
                >
                  {/* <img
                    className="w-5  "
                    src={Backend}
                    alt="backend library logo"
                  /> */}
                  <span className="leading-[26px] text-lg lg:text-xl">
                    Content Writing
                  </span>
                </button>
                <button
                  onClick={() => {
                    handleTabs(4);
                    setPath("Graphic Designing");
                  }}
                  className={`${
                    toogle === 4 && "tabs-active"
                  } h-20  mr-4 p-4 lg:text-xl  flex flex-col items-center justify-center rounded-lg lg:mr-0 lg:w-full`}
                >
                  {/* <img className="w-5  " src={Databases} alt="Databases logo" /> */}
                  <span className="leading-[26px] text-lg lg:text-xl">
                    Graphic Designing
                  </span>
                </button>
                <button
                  onClick={() => {
                    handleTabs(5);
                    setPath("Video Editing");
                  }}
                  className={`${
                    toogle === 5 && "tabs-active"
                  } h-20  mr-4 p-4 lg:text-xl  flex flex-col items-center justify-center rounded-lg lg:mr-0 lg:w-full`}
                >
                  {/* <img
                    className="w-6 "
                    src={UI_UX}
                    alt="other technologies logos"
                  /> */}
                  <span className=" leading-[26px] text-lg lg:text-xl">
                    Video Editing
                  </span>
                </button>
              </div>
              <div className="h-64 w-full relative overflow-y-auto sm:h-80 lg:h-full">
                {showContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
