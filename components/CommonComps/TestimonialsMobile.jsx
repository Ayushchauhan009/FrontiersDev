import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";

const TestimonialsMobile = () => {
  return (
    <div className="w-full h-[400px]">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper swiper2"
      >
        <SwiperSlide className="py-10 bg-center bg-transparent bg-cover">
          <p className="font-space text-center py-4 lg:py-0 px-4">
            Working with FrontiersDev has transformed our travel business. Their
            stunning website and SEO strategies boosted our online visibility.
            FrontiersDev's work has been a game-changer. Their website and SEO
            strategies elevated our business.
            <br />
            <br />
            ~Apoorv Joshi
          </p>
        </SwiperSlide>
        <SwiperSlide className="py-10 bg-center bg-cover">
          <p className="font-space text-center py-4 lg:py-0 px-4">
            Choosing FrontiersDev for our e-commerce site was one of our best
            decisions. Their API integration and payment gateway setup
            streamlined operations. FrontiersDev's e-commerce development was a
            game-changer for us.
            <br />
            <br />
            ~Priyanka Tonk
          </p>
        </SwiperSlide>
        <SwiperSlide className="py-10 bg-center bg-cover">
          <p className="font-space text-center py-4 lg:py-0 px-4">
            Partnering with FrontiersDev on my YouTube journey has been
            incredible. Their support in creating my recipe website was
            invaluable. FrontiersDev understood and brought to life my vision
            for a recipe app.
            <br />
            <br />
            ~Megha Chauhan
          </p>
        </SwiperSlide>
        <SwiperSlide className="py-10 bg-center bg-cover">
          <p className="font-space text-center py-4 lg:py-0 px-4">
            Collaborating with FrontiersDev on my hotel booking site was
            fantastic. They used NextJs technology and stellar SEO to bring my
            vision to life. FrontiersDev's attention to detail in design and
            content creation set them apart.
            <br />
            <br />
            ~Sonu Sharma
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestimonialsMobile;
