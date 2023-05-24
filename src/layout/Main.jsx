/** @format */

import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import ShopByCategory from "../components/ShopByCategory";
import PageViewed from "../components/PageViewed";
import SubscribeNews from "../components/SubscribeNews";

const Main = () => {
  return (
    <>
      <Banner />
      <Gallery />
      <ShopByCategory />
      <PageViewed />
      <SubscribeNews />
    </>
  );
};

export default Main;
