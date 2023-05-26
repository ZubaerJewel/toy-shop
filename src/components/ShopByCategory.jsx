/** @format */

import React, { useEffect, useState } from "react";
import { MdOutlineSmartToy, MdSmartToy } from "react-icons/md";
import ToyCard from "./ToyCard";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("Math");

  useEffect(() => {
    fetch(`https://education-toy-server.vercel.app/toys/category/${category}`)
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((error) => console.log(error));
  }, [category]);

  //   console.log(toys);

  return (
    <div className="my-32">
      <h1 className="primary-title">Chose Your Best Educational Toys</h1>
      <div className="flex justify-center items-center rounded-lg gap-4 px-6 my-10">
        <button onClick={() => setCategory("Math")} className="tab-btn">
          <MdSmartToy className="md:text-2xl" /> Math Toys
        </button>
        <button onClick={() => setCategory("Chemistry")} className="tab-btn">
          <MdOutlineSmartToy className="md:text-2xl" /> Chemistry toys
        </button>
        <button onClick={() => setCategory("Physics")} className="tab-btn">
          <MdSmartToy className="md:text-2xl" /> Physics Toys
        </button>
        <button onClick={() => setCategory("Biology")} className="tab-btn">
          <MdSmartToy className="md:text-2xl" /> Biology Toys
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-6 md:mx-10 mt-20">
        {toys && toys?.map((toy) => <ToyCard key={toy._id} toy={toy} />)}
      </div>
      {toys.length == 0 && <progress className="progress"></progress>}
    </div>
  );
};

export default ShopByCategory;
