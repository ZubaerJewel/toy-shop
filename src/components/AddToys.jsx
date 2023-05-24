/** @format */

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContest } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const AddToys = () => {
  const [category, setCategory] = useState("");
  const { user } = useContext(AuthContest);

  const handleAddToy = (e) => {
    e.preventDefault();
    const from = e.target;
    const toyImage = from.photo.value;
    const toyName = from.toyName.value;
    const sellerName = from.sellerName.value;
    const sellerEmail = from.sellerEmail.value;
    const price = from.price.value;
    const rating = from.rating.value;
    const quantity = from.quantity.value;
    const details = from.details.value;

    //validation
    if (isNaN(price) || isNaN(quantity) || isNaN(rating)) {
      toast("Please add any numbers");
      return;
    } else if (rating > 5) {
      toast("Rating must be less than 5");
      return;
    }

    const toyInfo = {
      sellerName,
      sellerEmail,
      toyImage,
      price,
      quantity,
      rating,
      details,
      toyName,
      subCategory: category,
    };
    // console.log(toyInfo);
    //create toy in db
    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(toyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Toy added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          from.reset();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form onSubmit={handleAddToy} className="space-y-4 mx-6 md:mx-10 my-10">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span>Toy url</span>
              <input
                type="url"
                name="photo"
                placeholder="Toy url"
                className="p-4 outline-none bg-[#cd33c848] border-none"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span>Toy name</span>
              <input
                type="text"
                name="toyName"
                required
                placeholder="Toy name"
                className="p-4 outline-none bg-[#cd33c848] border-none"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span>Seller name</span>
              <input
                type="text"
                name="sellerName"
                defaultValue={user?.displayName}
                placeholder="Seller name"
                className="p-4 outline-none bg-[#cd33c848] border-none"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span>Seller email</span>
              <input
                type="email"
                name="sellerEmail"
                defaultValue={user?.email}
                readOnly
                placeholder="Seller email"
                className="p-4 outline-none bg-[#cd33c848] border-none"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="form-control w-full h-full rounded-md  bg-[#cd33c848]">
            <label className="input-group input-group-vertical">
              <span>Category</span>
              <select
                defaultValue={"Select category"}
                onBlur={(e) => setCategory(e.target.value)}
                className="select w-full max-w-xs outline-none border-none bg-transparent"
              >
                <option disabled>Select category</option>
                <option>Math</option>
                <option>Engineering</option>
                <option>Science</option>
              </select>
            </label>
          </div>
          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span>Price</span>
              <input
                type="text"
                name="price"
                required
                placeholder="Price"
                className="p-4 outline-none bg-[#cd33c848] border-none"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span>Rating</span>
              <input
                type="text"
                min={0}
                max={5}
                name="rating"
                placeholder="Rating"
                className="p-4 outline-none bg-[#cd33c848] border-none"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span>Quantity</span>
              <input
                type="text"
                min={0}
                name="quantity"
                required
                placeholder="Quantity"
                className="p-4 outline-none bg-[#cd33c848] border-none"
              />
            </label>
          </div>
        </div>

        <div className="form-control w-full">
          <label htmlFor="details" className="input-group input-group-vertical">
            <span>Details</span>
            <textarea
              className="border-none outline-none bg-[#cd33c848] p-4"
              name="details"
              id="details"
              cols="6"
              rows="5"
            ></textarea>
          </label>
        </div>

        <div className="flex flex-col md:flex-row justify-center">
          <input type="submit" value="Add toy" className="primary-btn w-1/2" />
        </div>
      </form>
    </>
  );
};

export default AddToys;
