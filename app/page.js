// pages/loading.js

"use client";

import { useEffect, useState } from "react";
// import ParticleLoader from "../components/ParticleLoader";
// import { Link } from "next/link";
import Home from "@/components/Home";
import Loader from "@/components/Loader";
import Intro from "@/components/Intro";

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = 1000;
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
        <div>
          <Home />
          <Intro />
        </div>
      )}
    </div>
  );
};

export default Loading;
