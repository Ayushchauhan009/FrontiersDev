// pages/loading.js

"use client";

import { useEffect, useState } from "react";

import Home from "@/components/Home";
import Loader from "@/components/Loader";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import HeightExtra from "@/components/HeightExtra";
import Pricing from "@/components/Pricing";
import { ProjectSection } from "@/components/ProjectSection";
import Form from "@/app/utilies/Form";
import StarsCanvas from "@/components/Stars";
import Testimonials from "@/components/CommonComps/Testimonials";
import TestimonialsMobile from "@/components/CommonComps/TestimonialsMobile";
import Approach from "@/components/Approach";
import OurApproach from "@/components/OurApproach";
import ChooseUs from "@/components/ChooseUs";

// import Navbar from "@/components/CommonComps/Navbar";

const Loading = () => {
  const [loading, setLoading] = useState(true);
  const [nav, setNav] = useState(false);

  function trigger() {
    setNav(!nav);
  }

  useEffect(() => {
    const delay = 4000;
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div
          className={`relative z-0 App ${
            nav && "nav-active"
          } h-screen min-h-screen`}
        >
          {/* <Navbar /> */}
          <Home trigger={trigger} nav={nav} setNav={setNav} />
          <Services />
          {/* <Intro /> */}
          <OurApproach />
          <ChooseUs />
          <ProjectSection />
          {/* <Pricing /> */}
          <div className="relative z-0">
            <Form />
            <StarsCanvas />
          </div>
        </div>
      )}
    </div>
  );
};

export default Loading;
