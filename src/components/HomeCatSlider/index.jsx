import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider">
      <div className="container">
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex flex-col justify-center items-center ">
                <img
                  src="https://www.jiomart.com/images/product/original/494422429/redmi-pad-pro-30-73-cm-12-1-inch-tablet-6-gb-ram-128-gb-grey-vhu4932in-digital-o494422429-p609956365-0-202409131256.jpeg?im=Resize=(360,360)"
                  alt="Smart Tablet"
                  className="w-[100px] h-[100px] object-contain transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex flex-col justify-center items-center ">
                <img
                  src="https://www.jiomart.com/images/product/original/494422937/realme-narzo-n65-5g-128-gb-4-gb-ram-amber-gold-mobile-phone-digital-o494422937-p609971944-0-202409161631.jpeg?im=Resize=(360,360)"
                  alt="Smart Phone"
                  className="w-[100px] h-[100px] object-contain transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Phone</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex flex-col justify-center items-center ">
                <img
                  src="https://www.jiomart.com/images/product/original/rvsoszbpfe/limestone-analog-black-dial-black-strap-watch-for-men-ls2985-product-images-rvsoszbpfe-0-202404291054.jpg?im=Resize=(330,410)"
                  alt="Leather Watch"
                  className="w-[100px] h-[100px] object-contain transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Leather Watch</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex flex-col justify-center items-center ">
                <img
                  src="https://www.jiomart.com/images/product/original/rvksvxnxe5/chopra-gems-jewellery-brass-american-diamond-ring-men-women-girls-and-boys-free-size-chp-gems-ring_180-product-images-rvksvxnxe5-0-202308121130.jpg?im=Resize=(330,410)"
                  alt="Rolling Diamond"
                  className="w-[100px] h-[100px] object-contain transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Rolling Diamond</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex flex-col justify-center items-center ">
                <img
                  src="https://www.jiomart.com/images/product/original/rvisbdkl1v/wooden-space-solid-wood-dining-chair-set-of-1-finish-color-blue-product-images-orvisbdkl1v-p604650710-0-202309191458.jpg?im=Resize=(360,360)"
                  alt="Wooden Chair"
                  className="w-[100px] h-[100px] object-contain transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Wooden Chair</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex flex-col justify-center items-center ">
                <img
                  src="https://www.jiomart.com/images/product/original/rvjcaesdx8/toestrand-stay-fit-men-s-walking-running-sports-sneakers-shoes-for-men-s-boys-product-images-rvjcaesdx8-0-202408071530.jpg?im=Resize=(330,410)"
                  alt="Sneaker Shoes"
                  className="w-[100px] h-[100px] object-contain transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Sneaker Shoes</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex flex-col justify-center items-center ">
                <img
                  src="https://www.jiomart.com/images/product/original/rvyvv4kabc/elgo-bags-solid-hand-sling-bag-for-girls-women-with-detachableand-adjustable-shoulder-strap-large-capacity-product-images-rvyvv4kabc-0-202407171204.jpg?im=Resize=(330,410)"
                  alt="Purse"
                  className="w-[100px] h-[100px] object-contain transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Purse</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex flex-col justify-center items-center ">
                <img
                  src="https://m.media-amazon.com/images/I/71KoRdQ6I6L._AC_UY327_FMwebp_QL65_.jpg"
                  alt="Xbox Controller"
                  className="w-[100px] h-[100px] object-contain transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Xbox Controller</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex flex-col justify-center items-center ">
                <img
                  src="https://www.jiomart.com/images/product/original/494493309/apple-imac-60-96-cm-24-inch-all-in-one-desktop-10-core-apple-m4-chip-4-ports-24-gb-ram-512-gb-mcr24hn-a-silver-digital-o494493309-p610613712-0-202410291510.jpeg?im=Resize=(360,360)"
                  alt="Apple iMac"
                  className="w-[100px] h-[100px] object-contain transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Apple iMac</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex flex-col justify-center items-center ">
                <img
                  src="https://www.jiomart.com/images/product/original/494410662/ptron-fusion-go-10w-portable-bluetooth-speaker-with-6hrs-playtime-immersive-sound-auto-tws-function-supports-bt-usb-sd-card-aux-playback-lightweight-black-digital-o494410662-p609450137-0-202406271910.jpeg?im=Resize=(360,360)"
                  alt="Bluetooth Speaker"
                  className="w-[100px] h-[100px] object-contain transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Bluetooth Speaker</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
