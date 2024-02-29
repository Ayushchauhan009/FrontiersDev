import React, { useState } from "react";

const Pricing = () => {
  const [activeButton, setActiveButton] = useState("Basic");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <div className=" lg:px-20 px-5 py-10 bgOpacity2 h-auto">
      <div className="max-container">
        <div className="w-full font-clash tracking-wider lg:h-[80px] border border-[#7c22de] lg:rounded-[30px] rounded-[10px] flex lg:flex-row flex-col h-auto justify-between items-center transAll">
          <p
            className={`cursor-pointer clickable text-xl text-white  font-exo  py-6 px-20 rounded-[30px] font-bold ${
              activeButton === "Basic" ? "clickable-bg" : ""
            }`}
            onClick={() => handleClick("Basic")}
          >
          Enhanced
          </p>
          <p
            className={`cursor-pointer clickable text-xl text-white font-exo  py-6 px-20 rounded-[40px] font-bold ${
              activeButton === "Standard" ? "clickable-bg " : ""
            }`}
            onClick={() => handleClick("Standard")}
          >
          Exclusive
          </p>
          <p
            className={`cursor-pointer clickable text-xl font-exo text-white  py-6 px-20 rounded-[30px] font-bold ${
              activeButton === "Premium" ? "clickable-bg" : ""
            }`}
            onClick={() => handleClick("Premium")}
          >
          Infinity
          </p>
        </div>
        <div
          className="priceDiv basicPrice  h-auto border border-[#7c22de] lg:rounded-[30px] rounded-[10px] justify-between items-center transAll lg:p-10 p-6 text-white mt-3"
          style={{ display: activeButton === "Basic" ? "block" : "none" }}
        >
          <div className="flex items-start ">
            <div className="lg:w-[60%]">
              <p className="lg:text-4xl text-2xl tracking-wider font-bold font-clash">
                Static Landing Page
              </p>
              <p className="lg:text-lg text-base font-normal mt-3 font-space">
                Streamlined Information Presentation
              </p>
              <p className="lg:text-lg text-base font-normal mt-5 font-space">
                {" "}
                Create simple web pages that display information or showcase
                content without including dynamic or interactive elements.
              </p>

              <div className="mt-6 lg:text-[17px] text-base">
                <ul className="listStyle space-y-2 font-space">
                  <li>Custom Designed Static Pages</li>
                  <li>Clear And Concise Content</li>
                  <li>Responsive Layout</li>
                  <li>Cross-Browser Compatibility</li>
                  <li>Fast Loading Times</li>
                  <li>Maintenance And Updates</li>
                </ul>
              </div>
              <button className="bg-[#7c22de] text-[22px] font-clash  hover:bg-transparent shadow-2xl scale-90 hover:scale-100 py-3 px-16 lg:w-[50%] w-[100%] rounded-[10px] tracking-widest text-white font-bold mt-7 border border-transparent  hover:border-[#7C22DE] transition-all">
                <span>₹</span> 3000
              </button>
            </div>
            <div className="">
              <div class="pyramid-loader">
                <div class="pyramid-wrapper">
                  <span class="side side1"></span>
                  <span class="side side2"></span>
                  <span class="side side3"></span>
                  <span class="side side4"></span>
                  <span class="shadow"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="priceDiv standPrice  h-auto border border-[#7c22de] lg:rounded-[30px] rounded-[10px] justify-between items-center transAll lg:p-10 p-6 text-white mt-3"
          style={{ display: activeButton === "Standard" ? "block" : "none" }}
        >
          <div className="flex items-start ">
            <div className="lg:w-[60%]">
              <p className="lg:text-4xl text-2xl tracking-wider font-bold font-clash">
                Standard Full Stack Website
              </p>
              <p className="lg:text-lg text-base font-normal mt-3 font-space">
                Engaging Interactions and Visual Enhancements
              </p>
              <p className="lg:text-lg text-base font-normal mt-5 font-space">
                {" "}
                Improved websites incorporate dynamic elements such as animated
                features and interactive components to create a more engaging
                user experience.
              </p>

              <div className="mt-6 lg:text-[17px] text-base">
                <ul className="listStyle space-y-1">
                  <li>Custom Development With Dynamic Features</li>
                  <li>Dynamic Content Generation</li>
                  <li>Animating Elements</li>
                  <li>Interactive Elements</li>
                  <li>Rotating Text Or Images</li>
                  <li>Integration Of External APIs Or Services</li>
                </ul>
              </div>
              <button className="bg-[#7c22de] text-[22px] font-clash  hover:bg-transparent shadow-2xl scale-90 hover:scale-100 py-3 px-16 lg:w-[50%] w-[100%]  rounded-[10px] tracking-widest text-white font-bold mt-7 border border-transparent  hover:border-[#7C22DE] transition-all">
                <span>₹</span> 20000
              </button>
            </div>
            <div className="">
              <div class="pyramid-loader">
                <div class="pyramid-wrapper">
                  <span class="side side1"></span>
                  <span class="side side2"></span>
                  <span class="side side3"></span>
                  <span class="side side4"></span>
                  <span class="shadow"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="priceDiv prePrice  h-auto border border-[#7c22de] lg:rounded-[30px] rounded-[10px] justify-between items-center transAll lg:p-10 p-6 text-white mt-3"
          style={{ display: activeButton === "Premium" ? "block" : "none" }}
        >
          <div className="flex items-start ">
            <div className="lg:w-[60%]">
              <p className="lg:text-4xl text-2xl tracking-wider font-bold font-clash">
                Premium Dynamic Web Application
              </p>
              <p className="lg:text-lg text-base font-normal mt-3 font-space">
                Advanced Functionality and Personalized Solutions
              </p>
              <p className="lg:text-lg text-base font-normal mt-3 font-space">
                {" "}
                Sophisticated websites integrate functionalities like database
                integration, content management systems (CMS), user
                authentication, e-commerce capabilities, and heightened security
                protocols to address complex requirements effectively.
              </p>

              <div className="mt-6 lg:text-[17px] text-base">
                <ul className="listStyle space-y-2 font-space">
                  <li>Custom Development With Advanced Features</li>
                  <li>Database Integration</li>
                  <li>Responsive Layout</li>
                  <li>Content Management System</li>
                  <li>Personalization And Customization Options</li>
                  <li>Integration With Payment Gateways</li>
                </ul>
              </div>
              <button className="bg-[#7c22de] text-[22px] font-clash  hover:bg-transparent shadow-2xl scale-90 hover:scale-100 py-3 px-16 lg:w-[50%] w-[100%] rounded-[10px] tracking-widest text-white font-bold mt-7 border border-transparent  hover:border-[#7C22DE] transition-all">
                <span>₹</span> 40000
              </button>
            </div>
            <div className="">
              <div class="pyramid-loader">
                <div class="pyramid-wrapper">
                  <span class="side side1"></span>
                  <span class="side side2"></span>
                  <span class="side side3"></span>
                  <span class="side side4"></span>
                  <span class="shadow"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
