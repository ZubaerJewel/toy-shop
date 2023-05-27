/** @format */

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaPen, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContest } from "../AuthProvider/AuthProvider";

const ToyTable = ({ toy, editable, isDelete, setIsDelete }) => {
  const { user } = useContext(AuthContest);
  //handle delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes !",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://education-toy-server.vercel.app/toys/toy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setIsDelete(!isDelete);
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  //log in alert
  const loginAlert = () => {
    if (!user) {
      return Swal.fire(
        "You have to sign in first to view details",
        "",
        "question"
      );
    }
  };

  const {
    _id,
    sellerName,
    sellerEmail,
    toyImage,
    price,
    quantity,
    toyName,
    subCategory,
  } = toy;
  return (
    <>
      <tr>
        <th>{toyName}</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={toyImage} />
              </div>
            </div>
            <div>
              <div className="font-bold">{sellerName}</div>
              <div className="text-sm opacity-50">{sellerEmail}</div>
            </div>
          </div>
        </td>
        <td>{subCategory}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <th>
          {editable ? (
            <div className="flex gap-2">
              <Link to={`/toys/update/${_id}`}>
                <button className="btn-xs btn bg-transparent hover:bg-transparent border-none text-purple-600">
                  {/* <FaPen /> */}
                  Update
                </button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn-xs btn bg-transparent hover:bg-transparent border-none text-error"
              >
                Delete
              </button>
            </div>
          ) : (
            <Link to={`/toys/${_id}`}>
              <button onClick={loginAlert} className=" primary-btn btn-xs">
                details
              </button>
            </Link>
          )}
        </th>
      </tr>
    </>
  );
};

export default ToyTable;
