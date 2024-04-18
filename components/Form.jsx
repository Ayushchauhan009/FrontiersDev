import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";

const Form = () => {
  return (
    <div className=" xl:flex-row px-20 flex-col-reverse flex gap-10 overflow-hidden">
      <div className="max-container">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75]  p-6 rounded-2xl "
        >
          <p className="font-extrabold font-clash text-[28px] lg:text-[52px] text-white">
            Get in touch
          </p>
          {/* <h3 className="">Contact</h3> */}

          <form
            // ref={formRef}
            // onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white mb-4 font-medium">Your name</span>
              <input
                type="text"
                name="name"
                // value={form.name}
                // onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 border-none placeholder:text-secondary text-white rounded-lg outline-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white mb-4 font-medium">Your email</span>
              <input
                type="email"
                name="email"
                // value={form.email}
                // onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 border-none placeholder:text-secondary text-white rounded-lg outline-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white mb-4 font-medium">Your message</span>
              <textarea
                rows="7"
                name="message"
                // value={form.message}
                // onChange={handleChange}
                placeholder="your message here"
                className="bg-tertiary py-4 px-6 border-none placeholder:text-secondary text-white rounded-lg outline-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {/* {loading ? "Sending..." : "Send"} */}
            </button>
          </form>
        </motion.div>
      </div>

      {/* <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
      >
        <EarthCanvas />
      </motion.div> */}
    </div>
  );
};

export default Form;
