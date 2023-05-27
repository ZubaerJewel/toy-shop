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
    "https://thumbs.dreamstime.com/b/alarm-clock-puzzles-dominoes-paints-glasses-educational-toys-purple-background-top-view-back-to-school-concept-early-215808874.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/2/SI/BI/VW/157562239/toys-encourage-kids-recognize-letters-numbers-3256226-hmf-v1-5ece9b3064524d17a34bb121ef79e650-500x500.jpg",
    "https://thumbs.dreamstime.com/b/alarm-clock-puzzles-dominoes-paints-glasses-educational-toys-purple-background-top-view-back-to-school-concept-early-215808874.jpg",
 
    "https://thumbs.dreamstime.com/b/kids-toys-frame-purple-background-flat-lay-top-view-empty-center-140850170.jpg"
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
                    Welcome to Educational-Toys
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
