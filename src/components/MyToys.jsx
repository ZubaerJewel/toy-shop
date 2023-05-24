/** @format */

import React, { useContext, useEffect, useState } from "react";
import ToyTable from "./ToyTable";
import { AuthContest } from "../AuthProvider/AuthProvider";

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [sortAscending, setSortAscending] = useState(true);
  const [sort, setSort] = useState(1);
  const { user } = useContext(AuthContest);

  //sorting
  const handleSortChange = () => {
    const newSortOrder = !sortAscending;
    setSortAscending(newSortOrder);
  };

  useEffect(() => {
    fetch(
      `http://localhost:5000/toys/${user?.email}?num=${sort}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((error) => console.log(error));
  }, [isDelete, sort]);

  return (
    <>
      <div className="flex justify-center mt-4">
        <span onClick={handleSortChange}>
          <button
            className={`mx-2 py-2 px-4 rounded focus:outline-none ${
              sortAscending ? "bg-purple-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSort(1)}
          >
            Low Price
          </button>
        </span>
        <span onClick={handleSortChange}>
          <button
            className={`mx-2 py-2 px-4 rounded focus:outline-none ${
              sortAscending ? "bg-gray-200" : "bg-purple-600 text-white"
            }`}
            onClick={() => setSort(-1)}
          >
            High Price
          </button>
        </span>
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
            {toys &&
              toys?.map((toy) => (
                <ToyTable
                  key={toy._id}
                  toy={toy}
                  editable={true}
                  setIsDelete={setIsDelete}
                  isDelete={isDelete}
                />
              ))}
          </tbody>
        </table>
      </div>
      {toys.length == 0 && (
        <p className="text-center text-4xl text-red-700 font-bold">
          No toys found !
        </p>
      )}
    </>
  );
};

export default MyToys;
