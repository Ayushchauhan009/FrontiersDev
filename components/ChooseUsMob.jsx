import Image from "next/image";
import React from "react";

const ChooseUsMob = () => {
  return (
    <div className="bg-black relative z-0">
      <div className="max-container px-6 lg:px-14 py-10 lg:py-20 relative z-0">
        <p className="pb-20 font-extrabold font-platiPy text-[36px] lg:text-[52px] text-white">
          Why Choose Us?
        </p>
        <div className="flex text-white justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="text-center flex flex-col items-center justify-center p-14 lg:p-20 border-r border-white border-b draggable">
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
            <div className="text-center flex flex-col items-center justify-center p-14 lg:p-20 border-l border-white border-b draggable">
              <Image
                src="/solutions.png"
                alt="custom solutions"
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
            <div className="text-center flex flex-col items-center justify-center p-14 lg:p-20 border-r border-white border-t draggable">
              <Image
                src="/techno.png"
                alt="latest technologies"
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
            <div className="text-center  flex flex-col items-center justify-center p-14 lg:p-20 border-l border-white border-t draggable">
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

export default ChooseUsMob;
