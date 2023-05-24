/** @format */

import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  FaStarHalfAlt,
  FaStar,
  FaShoppingCart,
  FaShoppingBag,
} from "react-icons/fa";
import Swal from "sweetalert2";

const ToyDetails = () => {
  const [disabled, setDisabled] = useState(false);
  const toy = useLoaderData();
  const {
    _id,
    sellerName,
    sellerEmail,
    toyImage,
    price,
    quantity,
    rating,
    details,
    toyName,
    subCategory,
  } = toy;

  const handleAddToCart = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Successfully added",
      showConfirmButton: false,
      timer: 1600,
    });
    setDisabled(true);
  };
  // console.log(toy);
  return (
    <div className="card w-96 mx-auto my-10 shadow-2xl shadow-purple-600">
      <figure className="h-64">
        <img src={toyImage} />
      </figure>
      <div className="card-body text-center">
        <div className="indicator mx-auto">
          <span className="indicator-item -top-1 -right-5 badge badge-secondary">
            {subCategory}
          </span>
          <p className="text-3xl text-purple-700 tracking-wider font-bold">
            {toyName}
          </p>
        </div>
        {sellerName && (
          <>
            <p className="font-semibold">Seller : {sellerName}</p>
            <p className="font-semibold">Email : {sellerEmail}</p>
          </>
        )}
        <p className="text-xl font-semibold text-gray-700">{details}</p>
        <p className="text-2xl text-purple-600 font-bold">${price}</p>
        <p className="text-xl flex justify-center items-center gap-2 text-purple-600 font-bold">
          <FaShoppingBag />
          {quantity}/ Available
        </p>
        <div className="flex items-center justify-center gap-2 text-yellow-500">
          <span className="text-xl font-bold">{rating}</span>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          {rating > 4 ? <FaStar /> : <FaStarHalfAlt />}
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        disabled={disabled}
        className="btn btn-success gap-2 w-full disabled:bg-gray-700 disabled:text-white"
      >
        Add To Cart <FaShoppingCart />
      </button>
    </div>
  );
};

export default ToyDetails;
