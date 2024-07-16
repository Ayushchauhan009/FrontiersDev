import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  let fDate = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  // const [submittedName, setSubmittedName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      setIsSending(true);
      const response = await fetch("/api/footer", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }
      event.target.reset();
      setEmail("");

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    } finally {
      setIsSending(false);
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="bgOpacity2">
      <div className="px-4 lg:px-10 py-20  text-white max-container">
        <div className="pb-10 flex flex-col lg:flex-row lg:justify-between">
          <div className="font-platiPy text-txt-primary-dark-bg font-black text-sm lg:text-[22px] flex items-center tracking-widest">
            <img src="/logo.png" alt="" className="w-16 h-auto mr-0" />
            FrontiersDev
          </div>
          <div className="mt-4 lg:mt-0 relative">
            <form
              className="flex space-x-1 lg:block lg:space-x-0"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                name="email"
                id="email"
                required
                value={email}
                onChange={handleEmailChange}
                placeholder="Your Email Id"
                className="py-3 lg:py-4 w-fit  px-5 lg:w-[400px] font-space rounded-[8px] bg-transparent outline-none border-2 border-[#7C22DE]"
              />
              <button className=" lg:ml-0  lg:mt-0.5 mr-1 lg:mr-8 bg-[#7c22de] font-platiPy hover:bg-[#7d22de15] px-4 lg:px-10 py-2.5 lg:py-3 shadow-2xl scale-100  border border-transparent   transition-all text-lg Lg:text-[20px] font-medium text-white rounded-[8px] lg:absolute lg:-right-[0px] ">
                {isSending ? "Sending..." : "Send"}
              </button>
            </form>
            {submitted && (
              <div className="fixed z-50 inset-0 flex justify-center items-center bg-black bg-opacity-50">
                <div className="bg-black bg-opacity-40 p-6 rounded shadow-lg">
                  <p className="text-center text-white text-[36px] lg:text-[70px] font-semibold font-platiPy mt-4">
                    Thank you
                  </p>
                  <p className="text-white font-space text-center mt-4 text-[20px] lg:text-[28px] ">
                    for subscribing to us.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col space-y-12 lg:space-y-0 lg:flex-row  justify-between ">
          <div className="">
            <p className="border-b-2 border-[#7C22DE] inline-block font-platiPy pr-3 py-2  font-bold text-[20px] uppercase tracking-wide">
              About Us
            </p>
            <ul className="text-lg flex flex-col font-space space-y-4 mt-5">
              <Link href="#our-approach" className=" hover:underline">
                Our Approach
              </Link>
              <Link href="#our-projects" className=" hover:underline">
                Our Projects
              </Link>
              <Link href="#contact-us" className=" hover:underline">
                Contact Us
              </Link>
            </ul>
          </div>
          <div className="">
            <p className="border-b-2 border-[#7C22DE] inline-block pr-3 py-2 font-platiPy font-bold text-[20px] uppercase tracking-wide">
              Our Services
            </p>
            <ul className="font-space space-y-4 text-lg mt-5">
              <li>Website Development</li>
              <li>UI/UX Designing</li>
              <li>Content Writing</li>
              <li>Graphic Designing</li>
              <li>Video Editing</li>
            </ul>
          </div>

          <div className="border-l-0  lg:border-l-2  lg:w-[60%] border-[#7C22DE] lg:pl-10 pt-5 border-t-2 lg:border-t-0 lg:pt-5 font-space text-[18px] font-medium">
            <p>
              {" "}
              Welcome to our digital realm, where passion meets proficiency! As
              a dynamic duo of developers, we craft websites that marry
              innovation with elegance. With unwavering dedication, we transform
              visions into vibrant online realities. Join us on this journey of
              creativity and collaboration. Let's build your digital dreams
              together!
            </p>
            <br />
            <div className="flex space-x-5 mt-4 items-center">
              <p className="font-space text-center lg:text-left text-[16px] font-normal ">
                © {fDate} FrontiersDev
              </p>
              <Link
                href="https://www.youtube.com/channel/UCDPBOylX8arfbXRppChfu-g"
                target="_blank"
              >
                <Image
                  src="/youtube.png"
                  alt="youtube"
                  width={40}
                  height={60}
                />
              </Link>
              <Link href="https://www.instagram.com/ayush.jsx/" target="_blank">
                <Image src="/Ig.png" alt="instagram" width={40} height={60} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
