import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import "./swiper.css";

import React from "react";

const Testimonials = () => {
  return (
    <div className=" cursor-grab">
      {" "}
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className=" font-space text-center px-4">
          Working with FrontiersDev has transformed our travel business. Their
          stunning website and SEO strategies boosted our online visibility.
          FrontiersDev's work has been a game-changer. Their website and SEO
          strategies elevated our business.
          <br />
          <br />
          ~Apoorv Joshi
        </SwiperSlide>
        <SwiperSlide className=" font-space text-center px-4">
          Choosing FrontiersDev for our e-commerce site was one of our best
          decisions. Their API integration and payment gateway setup streamlined
          operations. FrontiersDev's e-commerce development was a game-changer
          for us. Their seamless integration improved our customer shopping
          experience.
          <br />
          <br />
          ~Priyanka Tonk
        </SwiperSlide>
        <SwiperSlide className=" font-space text-center px-4">
          Partnering with FrontiersDev on my YouTube journey has been
          incredible. Their support in creating my recipe website was
          invaluable. FrontiersDev understood and brought to life my vision for
          a recipe app. They've been essential in expanding my career.
          <br />
          <br />
          ~Megha Chauhan
        </SwiperSlide>
        <SwiperSlide className=" font-space text-center px-4">
          Collaborating with FrontiersDev on my hotel booking site was
          fantastic. They used NextJs technology and stellar SEO to bring my
          vision to life. FrontiersDev's attention to detail in design and
          content creation set them apart. Working with them on my hotel booking
          app was a pleasure.
          <br />
          <br />
          ~Sonu Sharma
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
