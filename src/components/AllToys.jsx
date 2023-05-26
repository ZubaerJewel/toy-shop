/** @format */

import React, { useEffect, useState } from "react";
import ToyTable from "./ToyTable";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [showMore, setShowMore] = useState(0);

  useEffect(() => {
    fetch(
      `https://education-toy-server.vercel.app/toys?startAt=${showMore}&limit=${20}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((error) => console.log(error));
  }, [showMore]);

  const handleSearch = (text) => {
    fetch(`https://education-toy-server.vercel.app/toys/name?toyName=${text}`)
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="flex justify-center my-4">
        <div className="form-control w-1/2">
          <div className="input-group">
            <input
              onChange={(e) => handleSearch(e.target.value)}
              type="text"
              placeholder="Search…"
              className="input input-bordered w-full"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto w-full my-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Toy Name</th>
              <th>Seller</th>
              <th>Sub category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toys && toys?.map((toy) => <ToyTable key={toy._id} toy={toy} />)}
          </tbody>
        </table>
      </div>
      {toys.length == 0 && (
        <p className="text-center text-4xl text-red-700 font-bold">
          No toys found !
        </p>
      )}
      <div className="flex justify-center my-4">
        {toys?.length > 20 && (
          <button
            onClick={() => setShowMore(showMore + 1)}
            className="primary-btn"
          >
            Show More
          </button>
        )}
      </div>
    </>
  );
};

export default AllToys;
