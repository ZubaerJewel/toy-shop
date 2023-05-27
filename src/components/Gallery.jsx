/** @format */

import React, { useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://education-toy-server.vercel.app/toys/limit/4")
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 200,
      duration: 1000,
      easing: "ease-in-out",
      delay: 100,
      anchorPlacement: "center-bottom",
      mirror: true,
      startEvent: "DOMContentLoaded",
      disable: false,
    });
  }, []);

  //   console.log(toys);
  return (
    <div className="my-32">
      <h2 className="primary-title">Trending on this Weak</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-20 mx-6 md:mx-10">
        {toys &&
          toys?.map((toy) => (
            <div
              key={toy._id}
              className="avatar"
              data-aos="fade-up"
              ata-aos-duration="800"
            >
              <div className="w-full mask mask-hexagon  motion">
                <img src={toy.toyImage} />
                <div className="absolute top-0 overlay-img">
                  <p className="text-purple-700 text-3xl text-center font-bold">
                    {toy.toyName}
                  </p>
                  <button className="btn  gap-4 bg-purple-900 ">
                    Shop Now <HiShoppingCart className="text-2xl " />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      {toys.length == 0 && (
        <progress className="progress text-purple-700"></progress>
      )}
    </div>
  );
};

export default Gallery;
