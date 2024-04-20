"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import Testimonials from "./CommonComps/Testimonials";
import TestimonialsMobile from "./CommonComps/TestimonialsMobile";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className=" px-0 lg:px-20 pb-20">
      <div className="max-container flex lg:items-center  flex-col lg:flex-row lg:justify-center space-y-20 lg:space-y-0 lg:space-x-[280px]">
        <div
          // variants={slideIn("left", "tween", 0.2, 1)}
          className="  p-6 rounded-2xl "
        >
          <p className="font-extrabold font-clash text-[28px] lg:text-[52px] text-white">
            Get in Touch
          </p>
          {/* <h3 className="">Contact</h3> */}

          <form
            // ref={formRef}
            // onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              {/* <span className="text-white mb-4 font-medium">Your name</span> */}
              <input
                type="text"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Full Name"
                className="bg-tertiary py-4 lg:w-[500px]  font-space text-[18px]  border-b bg-transparent placeholder:text-white text-white outline-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              {/* <span className="text-white mb-4 font-medium">Your email</span> */}
              <input
                type="email"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email Id"
                className="bg-tertiary py-4 font-space text-[18px] border-b bg-transparent placeholder:text-white text-white outline-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              {/* <span className="text-white mb-4 font-medium">Your message</span> */}
              <textarea
                rows="1"
                name="message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder="Project Brief"
                className="bg-tertiary py-4  border-b  font-space text-[18px] bg-transparent resize-none placeholder:text-white text-white outline-none font-medium"
              />
            </label>
            <button className="mr-8 w-fit bg-[#7c22de] font-clash hover:bg-transparent px-8 py-3 shadow-2xl scale-100 hover:scale-105 border border-transparent  hover:border-[#7C22DE] transition-all text-[20px] font-medium text-white rounded-[10px]">
              Send
            </button>
          </form>
        </div>

        <div className="px-14 lg:block hidden lg:px-0">
          <Testimonials />
        </div>
        <div className="block lg:hidden">
          <TestimonialsMobile />
        </div>
      </div>
    </div>
  );
};

export default Form;
