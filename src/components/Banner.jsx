/** @format */

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import { HiShoppingCart } from "react-icons/hi";

const Banner = () => {
  const bannerImg = [
    "https://i.ibb.co/c2GGv7V/pngwing-com-1.png",
    "https://i.ibb.co/PYQJh5t/pngwing-com-2.png",
    "https://i.ibb.co/R37pVRJ/pngwing-com.png",
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {bannerImg.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="md:h-[calc(100vh-100px)] w-full block md:flex bg-[rgba(94,243,109,0.17)] ">
              <div className="w-full">
                <img
                  src={img}
                  alt="banner"
                  className="h-96 md:h-full md:w-3/5 bg-cover"
                />
              </div>
              <div className=" w-full h-full flex justify-center bg-purple-500 items-cent text-white text-center">
                <div className="p-10 space-y-16 mt-28">
                  <h2 className="text-4xl font-bold   text-p-4 ounded-md">
                    Welcome to Educational-Toys
                  </h2>
                  <p className="font-semibold space-y-6">
                    We provide our best service for your kid. Buy your toys and
                    your discount here.We provide our best service with a best promise.
                  </p>
                  <button className="btn bg-cyan-600 gap-4 ">
                     Buy Now <HiShoppingCart className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
