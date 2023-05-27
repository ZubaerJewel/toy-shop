/** @format */

import React from "react";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-360px)] bg-purple-400  ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Home;
