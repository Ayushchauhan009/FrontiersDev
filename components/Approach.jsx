import React, { useState } from "react";

export default function Technologies() {
  const [toogle, setToogle] = useState(1);
  // const [path, setPath] = useState("tabs-active");

  const handleTabs = (number) => {
    setToogle(number);
  };

  const showContent = () => {
    switch (toogle) {
      case 1:
        return (
          <div className="img-box flex w-full text-white font-space text-[20px] py-4 px-8 h-full ">
            <ul>
              <li>
                <strong>Keyword Research:</strong> Conduct thorough keyword
                research to target relevant terms and phrases used by your
                audience.
              </li>

              <br />

              <li>
                <strong>Responsive Design:</strong> Ensure your website is
                mobile-friendly and optimized for various devices to improve
                user experience and search rankings.
              </li>
              <br />
              <li>
                <strong>Optimized Content:</strong> Create high-quality,
                keyword-rich content that provides value to users and aligns
                with search intent.
              </li>
              <br />
              <li>
                <strong>Meta Tags Optimization:</strong> Craft unique meta
                titles and descriptions incorporating targeted keywords to
                enhance click-through rates and search visibility.
              </li>
              <br />
              <li>
                <strong>Regular Updates:</strong> Keep your website updated with
                fresh content, regular maintenance, and improvements to
                demonstrate relevance and authority to search engines.
              </li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="img-box flex w-full text-white font-space text-[20px] py-4 px-8 h-full ">
            <ul>
              <li>
                <strong>User-Centric Design:</strong> Focus on creating an
                intuitive and user-friendly interface that enhances the overall
                browsing experience.
              </li>
              <br />
              <li>
                <strong>Fast Loading Speed:</strong> Optimize design elements
                and assets to ensure quick page loading times, which positively
                impacts user satisfaction and search engine rankings.
              </li>
              <br />
              <li>
                <strong>Mobile Optimization:</strong> Design with a mobile-first
                approach, ensuring seamless usability and functionality across
                various devices to cater to a wide audience and improve search
                visibility.
              </li>
              <br />
              <li>
                <strong>Clear Call-to-Actions:</strong> Implement clear and
                prominent calls-to-action (CTAs) that guide users towards
                desired actions, contributing to higher conversion rates and
                improved SEO performance.
              </li>
            </ul>
          </div>
        );
      case 3:
        return (
          <div className="img-box flex w-full text-white font-space text-[20px] py-4 px-8 h-full ">
            <ul>
              <li>
                <strong>Keyword Research:</strong> Conduct thorough keyword
                research to identify relevant terms and phrases that your target
                audience is searching for.
              </li>
              <br />
              <li>
                <strong>Compelling Headlines:</strong> Craft attention-grabbing
                headlines that incorporate targeted keywords and accurately
                reflect the content of your articles or pages.
              </li>
              <br />
              <li>
                <strong>High-Quality Content:</strong> Create informative,
                engaging, and well-researched content that addresses the needs
                and interests of your audience while naturally incorporating
                targeted keywords.
              </li>
              <br />
              <li>
                <strong>Optimized Meta Tags:</strong> Write unique meta titles
                and descriptions for each page or article, including relevant
                keywords to improve click-through rates and search engine
                visibility.
              </li>
              <br />
              <li>
                <strong>Internal Linking:</strong> Strategically interlink your
                content to other relevant pages within your website to improve
                navigation, distribute link equity, and enhance SEO performance.
              </li>
            </ul>
          </div>
        );
      case 4:
        return (
          <div className="img-box flex w-full text-white font-space text-[20px] py-4 px-8 h-full ">
            <ul>
              <li>
                <strong>Image Optimization:</strong> Optimize graphics for web
                use by compressing file sizes, improving page loading speed and
                overall user experience, which positively impacts SEO.
              </li>
              <br />
              <li>
                <strong>Alt Text:</strong> Include descriptive alt text for all
                images and graphics to improve accessibility for visually
                impaired users and provide search engines with additional
                context about your content.
              </li>
              <br />
              <li>
                <strong>Visual Hierarchy:</strong> Use visual hierarchy
                principles to guide users' attention towards important elements
                and messages within your graphics, enhancing usability and
                engagement.
              </li>
              <br />
              <li>
                <strong>Brand Consistency:</strong> Maintain consistency in
                design elements, color schemes, and branding across all graphics
                to strengthen brand recognition, which can positively impact
                search engine rankings.
              </li>
              {/* <br />
              <li>
                <strong>Responsive Design:</strong> Ensure that graphics are
                designed to be responsive and display correctly on various
                devices and screen sizes, providing a seamless experience for
                users and improving SEO performance.
              </li> */}
            </ul>
          </div>
        );
      case 5:
        return (
          <div className="img-box flex w-full text-white font-space text-[20px] py-4 px-8 h-full ">
            <ul>
              <li>
                <strong>Keyword-Optimized Titles:</strong> Craft descriptive and
                keyword-rich titles for your videos to improve search engine
                visibility and attract relevant viewers.
              </li>
              <br />
              <li>
                <strong>Engaging Thumbnails:</strong> Create compelling
                thumbnails that accurately represent the content of your videos
                and entice users to click, increasing click-through rates and
                SEO performance.
              </li>
              <br />
              <li>
                <strong>Quality Content:</strong> Produce high-quality videos
                with valuable and engaging content that resonates with your
                target audience and encourages longer watch times, signaling to
                search engines the relevance and quality of your content.
              </li>
              <br />
              <li>
                <strong>Optimized Descriptions:</strong> Write detailed
                descriptions with relevant keywords.
              </li>
              <br />
              <li>
                <strong>Call-to-Action:</strong> Include clear and relevant
                calls-to-action within your videos to encourage viewer
                engagement, such as subscribing, liking, or visiting your
                website, which can indirectly impact SEO metrics like user
                engagement and retention.
              </li>
            </ul>
          </div>
        );

      default:
        break;
    }
  };

  return (
    <div className=" font-platiPy  ">
      <div className=" relative">
        <div className="h-[600px] lg:h-auto">
          <div className="opacity-20 hidden lg:block absolute -inset-6 md:-inset-8 bg-gradient-to-r from-[#3500d3] via-red-500  to-yellow-400 rounded-lg animate-tilt"></div>
          <div className=" transition relative    bg-[#000000af] rounded-xl border  border-[#7C22DE] px-3 py-2 md:px-4 lg:px-6">
            <div className="w-full flex flex-col lg:flex-row lg:h-full py-4">
              <div className="buttons flex overflow-x-scroll h-full w-full py-6 px-4 items-center border-b space-y-0 lg:space-y-6 lg:flex-col lg:overflow-x-hidden  lg:w-80 lg:border-r lg:border-r-[#7C22DE] lg:border-b-0 lg:justify-between lg:py-0 lg:px-0 lg:pr-3">
                <button
                  onClick={() => {
                    handleTabs(1);
                  }}
                  className={`${
                    toogle === 1 && "tabs-active"
                  } h-20  mr-4 p-5 lg:text-xl  flex flex-col items-center justify-center rounded-lg lg:mr-0 lg:w-full`}
                >
                  {/* <img
                    className="w-7 -mt-2"
                    src={Programming}
                    alt="programming language logo"
                  /> */}
                  <span className="leading-[26px]  whitespace-nowrap text-lg lg:text-xl ">
                    Website Development
                  </span>
                </button>
                <button
                  onClick={() => {
                    handleTabs(2);
                  }}
                  className={`${
                    toogle === 2 && "tabs-active"
                  } h-20  mr-4 p-4 lg:text-xl  flex flex-col items-center justify-center rounded-lg lg:mr-0 lg:w-full`}
                >
                  {/* <img
                    className="w-7 -mt-2  "
                    src={Frontend}
                    alt="frontend library logo"
                  /> */}
                  <span className="leading-[26px] text-lg lg:text-xl">
                    UI/UX Designing
                  </span>
                </button>
                <button
                  onClick={() => {
                    handleTabs(3);
                  }}
                  className={`${
                    toogle === 3 && "tabs-active"
                  } h-20  mr-4 p-4 lg:text-xl  flex flex-col items-center justify-center rounded-lg lg:mr-0 lg:w-full`}
                >
                  {/* <img
                    className="w-5  "
                    src={Backend}
                    alt="backend library logo"
                  /> */}
                  <span className="leading-[26px] text-lg lg:text-xl">
                    Content Writing
                  </span>
                </button>
                <button
                  onClick={() => {
                    handleTabs(4);
                  }}
                  className={`${
                    toogle === 4 && "tabs-active"
                  } h-20  mr-4 p-4 lg:text-xl  flex flex-col items-center justify-center rounded-lg lg:mr-0 lg:w-full`}
                >
                  {/* <img className="w-5  " src={Databases} alt="Databases logo" /> */}
                  <span className="leading-[26px] text-lg lg:text-xl">
                    Graphic Designing
                  </span>
                </button>
                <button
                  onClick={() => {
                    handleTabs(5);
                  }}
                  className={`${
                    toogle === 5 && "tabs-active"
                  } h-20  mr-4 p-4 lg:text-xl  flex flex-col items-center justify-center rounded-lg lg:mr-0 lg:w-full`}
                >
                  <span className=" leading-[26px] text-lg lg:text-xl">
                    Video Editing
                  </span>
                </button>
              </div>
              <div className=" w-full relative overflow-y-auto h-[26rem] sm:h-80 lg:h-full">
                {showContent(toogle)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
