import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const HomeSlider = () => {
  return (
    <div className="homeSlider py-4">
      <div className="container">
        <Swiper
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="sliderHome"
        >
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/7ba5649b8d3f6f1a.jpg?q=20"
                alt="Banner Slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/3db48f3341053283.jpg?q=20"
                alt="Banner Slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/14dc2cc08203a031.jpg?q=20"
                alt="Banner Slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/d9290fb51138d286.png?q=20"
                alt="Banner Slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/3db48f3341053283.jpg?q=20"
                alt="Banner Slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/3db48f3341053283.jpg?q=20"
                alt="Banner Slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
