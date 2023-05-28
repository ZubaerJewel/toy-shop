/** @format */

import React from "react";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-screen w-screen bg-[url('/error.jpg')] bg-cover bg-center flex justify-center items-center">
      <Link to="/">
        <button className="btn  bg-red-400 px-10 hover:bg-purple-700">
          <HiHome className="text-2xl" />
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
