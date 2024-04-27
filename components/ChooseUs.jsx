import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/all";
import Image from "next/image";

const ChooseUs = () => {
  const containerRef = useRef(null);
  const draggableElements = useRef([]);

  useEffect(() => {
    // Ensure GSAP Draggable is registered
    gsap.registerPlugin(Draggable);

    // Make each child element draggable only if not on mobile
    if (!window.matchMedia("(max-width: 768px)").matches) {
      const elements = containerRef.current.querySelectorAll(".draggable");
      elements.forEach((element) => {
        const draggable = new Draggable.create(element, {
          type: "x,y",
          onDragEnd: () => {
            // Set a timeout to return the element to its original position after 3 seconds
            setTimeout(() => {
              gsap.to(element, { x: 0, y: 0, duration: 0.5 });
            }, 3000);
          },
        });
        // Store the Draggable instance for later use
        draggableElements.current.push(draggable);
      });
    }

    // Clean up function
    return () => {
      // Disable Draggable instances to prevent memory leaks
      draggableElements.current.forEach((draggable) => draggable[0].disable());
    };
  }, []);

  return (
    <div className="bg-black relative z-0">
      <div className="max-container px-6 lg:px-14  relative z-0">
        <p className="pb-20 font-extrabold font-platiPy text-[36px] lg:text-[52px] text-white">
          Why Choose Us?
        </p>
        <div
          ref={containerRef}
          className="flex text-white justify-center items-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="text-center flex flex-col items-center justify-center p-20 border-r border-white border-b draggable">
              <Image
                src="/team.png"
                alt="team"
                width={80}
                height={20}
                className="w-[60px]"
              />
              <h3 className="text-2xl font-semibold font-platiPy mb-2">
                Experienced Team
              </h3>
              <p className="font-space text-lg">
                Our team consists of seasoned professionals with years of
                experience in website development.
              </p>
            </div>
            <div className="text-center flex flex-col items-center justify-center p-20 border-l border-white border-b draggable">
              <Image
                src="/solutions.png"
                alt="team"
                width={80}
                height={20}
                className="w-[60px]"
              />
              <h3 className="text-2xl font-platiPy font-semibold my-2">
                Custom Solutions
              </h3>
              <p className="font-space text-lg">
                We provide tailored solutions to meet the unique needs and goals
                of each client.
              </p>
            </div>
            <div className="text-center flex flex-col items-center justify-center p-20 border-r border-white border-t draggable">
              <Image
                src="/techno.png"
                alt="technology"
                width={80}
                height={20}
                className="w-[60px]"
              />
              <h3 className="text-2xl font-platiPy font-semibold my-2">
                Latest Technologies
              </h3>
              <p className="font-space text-lg">
                We stay updated with the latest technologies and trends to
                ensure cutting-edge solutions.
              </p>
            </div>
            <div className="text-center  flex flex-col items-center justify-center p-20 border-l border-white border-t draggable">
              <Image
                src="/rating.png"
                alt="client satisfaction"
                width={80}
                height={20}
                className="w-[60px]"
              />
              <h3 className="text-2xl font-platiPy font-semibold my-2">
                Client Satisfaction
              </h3>
              <p className="font-space text-lg">
                Our priority is client satisfaction. We work closely with
                clients to deliver results that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
