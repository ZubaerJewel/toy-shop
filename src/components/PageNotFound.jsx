/** @format */

import React from "react";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-screen w-screen bg-[url('/error.jpg')] bg-cover bg-center flex justify-center items-center">
      <Link to="/">
        <button className="btn gap-8 bg-red-600 mt-32 px-10 hover:bg-purple-800">
          <HiHome className="text-2xl" />
          Back to home
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
