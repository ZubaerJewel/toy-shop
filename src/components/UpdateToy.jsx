/** @format */

import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const { id } = useParams();
  const toy = useLoaderData();
  const navigate = useNavigate();
  //   console.log(toy);

  //handle update
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const toyName = from.name.value;
    const price = from.price.value;
    const quantity = from.quantity.value;
    const details = from.details.value;
    const toyInfo = { toyName, price, quantity, details };

    //validation
    if (isNaN(price) || isNaN(quantity)) {
      toast("Please add any number");
      return;
    }

    fetch(`http://localhost:5000/toys/toy/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(toyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Update Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/mytoys");
      })
      .catch((error) => console.log(error));

    // Reset form fields
    from.reset();
  };

  return (
    <>
      <div className="p-4 w-full md:w-1/2 my-10 rounded-md shadow-2xl  mx-auto bg-[#cd33c848]">
        <h2 className="text-2xl font-bold mb-4 text-purple-600">
          Update Toy Information
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-1">
              Toy Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              defaultValue={toy?.toyName}
              className="w-full p-2 input"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block font-semibold mb-1">
              Price:
            </label>
            <input
              type="text"
              id="price"
              name="price"
              defaultValue={toy?.price}
              required
              className="w-full p-2 input"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block font-semibold mb-1">
              Available Quantity:
            </label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              defaultValue={toy?.quantity}
              min={0}
              required
              className="w-full p-2 input"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="details" className="block font-semibold mb-1">
              Detail Description:
            </label>
            <textarea
              id="details"
              name="details"
              defaultValue={toy?.details}
              required
              className="w-full p-2 input"
            ></textarea>
          </div>
          <button type="submit" className="primary-btn w-full">
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateToy;
