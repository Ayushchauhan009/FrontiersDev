"use client";

import React, { useState } from "react";
import axios from "axios";
import Testimonials from "@/components/CommonComps/Testimonials";
import TestimonialsMobile from "@/components/CommonComps/TestimonialsMobile";

const Form = () => {
  const [name, setName] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData.entries());

    try {
      setIsSending(true);

      // Create the body with the correct format
      const requestBody = formDataObject;

      // Send POST request to your API Gateway endpoint
      const response = axios.post(
        'https://frontiersdev-backend.onrender.com/send-email',
        { requestBody },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Axios automatically throws for status codes >= 400, no need for .ok check
      if (response.status !== 200) {
        throw new Error(`Response status: ${response.status}`);
      }

      // Handle the successful response
      event.target.reset();
      setName('');
      setSubmittedName(formDataObject.name);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error(err);
      alert('Error, please try resubmitting the form');
    } finally {
      setIsSending(false);
    }
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="px-6 lg:px-14 py-20">
      <div className="max-container flex lg:items-center flex-col lg:flex-row lg:justify-start space-y-20 lg:space-y-0 lg:space-x-[280px]">
        <div className="rounded-2xl">
          <p className="font-bold font-platiPy text-[36px] lg:text-[52px] text-white">
            Get in Touch
          </p>

          <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <input
                type="text"
                value={name}
                name="name"
                placeholder="Full Name"
                required
                onChange={handleNameChange}
                className="py-4 lg:w-[500px] nameInput font-space text-[18px] border-b bg-transparent placeholder:text-white text-white outline-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <input
                type="email"
                name="email"
                placeholder="Email Id"
                required
                className="py-4 font-space text-[18px] border-b bg-transparent placeholder:text-white text-white outline-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <textarea
                rows="1"
                name="message"
                required
                placeholder="Project Brief"
                className="bg-tertiary py-4 border-b font-space text-[18px] bg-transparent resize-none placeholder:text-white text-white outline-none font-medium"
              />
            </label>
            <button
              type="submit"
              disabled={isSending}
              className={`mr-8 w-fit bg-[#7c22de] font-platiPy hover:bg-transparent px-8 py-3 shadow-2xl scale-100 hover:scale-105 border border-transparent hover:border-[#7C22DE] transition-all text-[20px] font-medium text-white rounded-[10px] ${isSending ? "sending" : ""}`}
            >
              {isSending ? "Sending..." : "Send"}
            </button>
          </form>
          {submitted && (
            <div className="fixed z-50 inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <div className="bg-black bg-opacity-40 p-6 rounded shadow-lg">
                <p className="text-center text-white text-[36px] lg:text-[70px] font-semibold font-platiPy mt-4">
                  Thank you, {submittedName}
                </p>
                <p className="text-white font-space text-center mt-4 text-[20px] lg:text-[28px]">
                  We will be in touch with you shortly.
                </p>
              </div>
            </div>
          )}
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
