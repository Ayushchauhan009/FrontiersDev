import React, { useRef, useEffect, useState } from "react";

const Box = () => <div className="item"></div>;

const Projects = () => {
  const scrollContainerRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isInViewport) {
        const scrollContainer = scrollContainerRef.current;
        const scrollTop = window.scrollY;
        scrollContainer.scrollLeft = scrollTop;
      }
    };

    if (isInViewport) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isInViewport]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the component is in viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(scrollContainerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="scroll" ref={scrollContainerRef}>
      {[...Array(10)].map((_, index) => (
        <div key={index} className="item title sticky">
          Box {index + 1}
        </div>
      ))}
      {[...Array(10)].map((_, index) => (
        <Box key={index} />
      ))}
    </div>
  );
};

export default Projects;
