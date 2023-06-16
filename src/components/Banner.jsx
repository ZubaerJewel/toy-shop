/** @format */
import {Link} from "react-router-dom";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import { HiShoppingCart } from "react-icons/hi";

const Banner = () => {
  const bannerImg = [
    "/bannar-1.webp",
    "/bannar-2.webp",
    "/bannar-3.webp",
    "/bannar-4.webp",
    "/bannar-5.webp"
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
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
            <div className="md:h-[calc(100vh-100px)]  bg-purple-500 justify-center w-full block md:flex  ">
              <div className="w-full ">
                <img
                  src={img}
                  alt="banner"
                  className="h-96 md:h-full ml-14  md:w-3/5 bg-cover"
                />


              </div>
              <div className=" w-full flex justify-center bg-purple-500  items-cent text-white text-center">
                <div className="p-10 space-y-16 mt-28 ">
                  <h2 className="text-4xl font-bold   text-p-4 ounded-md">
                    Welcome to 3 Educational-Toys
                  </h2>
                  <p className="font-semibold space-y-6">
                    We provide our best service for your kid. Buy your toys and
                    your discount here.We provide our best service with a best promise.
                  </p>

                 <div>
                  <Link to="/alltoys">
                  <button className="btn bg-purple-900 gap-4 ">
                     Buy Now <HiShoppingCart className="text-2xl" />
                  </button>
                  </Link>
                 </div>
                  
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
