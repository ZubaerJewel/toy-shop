/** @format */

import React, { useState } from "react";
import Swal from "sweetalert2";

const SubscribeNews = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email !== " ") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You Successfully Subscribed Us",
        showConfirmButton: false,
        timer: 1500,
      });
      e.target.reset();
    }
  };
  return (
    // <div className="w-full h-full bg-[url('/news-leter.jpg')] bg-center bg-cover">
    <div className="w-full h-full  bg-center bg-cover">
      <div className="flex items-center justify-center w-full h-full bg-[rgb(0,0,0,0.5)]">
        {/* <div className="bg-white rounded-lg w-full md:w-1/2  shadow-lg p-8"> */}
          <h2 className="text-2xl text-center font-bold mb-4">
            Get Our Latest News.
            
          </h2>
          <p>we privide best new product update  for our customer.</p>
          <form
            onSubmit={handleSubscribe}
            className="flex items-center justify-center"
          >
            <input
              className="bg-gray-100 rounded-l-lg py-2 px-4 mr-2 focus:outline-none"
              type="email"
              name="email"
              placeholder="Your email address"
              required
            />
            <button
              className="bg-purple-500 hover:bg-purple-600 text-black rounded-r-lg py-2 px-4 focus:outline-none"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        
      </div>
    </div>
  );
};

export default SubscribeNews;
