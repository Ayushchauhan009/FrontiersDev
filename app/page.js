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
import ChooseUsMob from "@/components/ChooseUsMob";
import Footer from "@/components/Footer";
import Head from "next/head";

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
      <Head>
      <title>Frontiers Dev</title>
      <meta name="description" content="Elevate your online presence with expert website development services from FrontiersDev." />
      <meta property="og:title" content="Frontiers Dev" />
      <meta property="og:description" content="Elevate your online presence with expert website development services from FrontiersDev." />
      <meta property="og:image" content="https://frontiers.dev/Bg2.png" />
      <meta property="og:url" content="https://frontiers.dev/" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Frontiers Dev" />
      <meta name="twitter:description" content="Elevate your online presence with expert website development services from FrontiersDev." />
      <meta name="twitter:image" content="https://frontiers.dev/Bg2.png" />
    </Head>
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
          <div id="our-services">
            <Services />
          </div>
          {/* <Intro /> */}
          <div id="our-approach">
            <OurApproach />
          </div>
          <div className="hidden lg:block">
            <ChooseUs />
          </div>
          <div className="lg:hidden block">
            <ChooseUsMob />
          </div>
          <div id="our-projects">
            <ProjectSection />
          </div>
          {/* <Pricing /> */}
          <div id="contact-us" className="relative z-0">
            <Form />
            <StarsCanvas />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Loading;
