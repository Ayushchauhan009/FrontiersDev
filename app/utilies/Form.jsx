"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import Testimonials from "../../components/CommonComps/Testimonials";
import TestimonialsMobile from "../../components/CommonComps/TestimonialsMobile";
import axios from "axios";

const Form = () => {
  const [isSending, setIsSending] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      setIsSending(true);
      const response = await fetch("/api/contact", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }
      event.target.reset();

      alert("Message successfully sent");
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className=" px-0 lg:px-20 py-20">
      <div className="max-container flex lg:items-center  flex-col lg:flex-row lg:justify-center space-y-20 lg:space-y-0 lg:space-x-[280px]">
        <div className="  p-6 rounded-2xl ">
          <p className="font-bold font-platiPy text-[36px] lg:text-[52px] text-white">
            Get in Touch
          </p>

          <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className=" py-4 lg:w-[500px] nameInput font-space text-[18px]  border-b bg-transparent placeholder:text-white text-white outline-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <input
                type="email"
                name="email"
                placeholder="Email Id"
                required
                className=" py-4 font-space text-[18px] border-b bg-transparent placeholder:text-white text-white outline-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <textarea
                rows="1"
                name="message"
                required
                placeholder="Project Brief"
                className="bg-tertiary py-4  border-b  font-space text-[18px] bg-transparent resize-none placeholder:text-white text-white outline-none font-medium"
              />
            </label>
            <button
              type="submit"
              disabled={isSending}
              className={`mr-8  w-fit bg-[#7c22de] font-clash hover:bg-transparent px-8 py-3 shadow-2xl scale-100 hover:scale-105 border border-transparent  hover:border-[#7C22DE] transition-all text-[20px] font-medium text-white rounded-[10px] ${
                isSending ? "sending" : ""
              }`}
            >
              {isSending ? "Sending..." : "Send"}
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
