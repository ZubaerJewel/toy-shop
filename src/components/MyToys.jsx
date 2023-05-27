/** @format */

import React, { useContext, useEffect, useState } from "react";
import ToyTable from "./ToyTable";
import { AuthContest } from "../AuthProvider/AuthProvider";
import PageNotFound from "./PageNotFound";
import { useNavigate } from 'react-router-dom';

const MyToys = () => {
  const navigate = useNavigate();
  const [toys, setToys] = useState([]);
  const [eror, setEror] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [sortAscending, setSortAscending] = useState(true);
  const [sort, setSort] = useState(1);
  const { user } = useContext(AuthContest);

  //sorting
  const handleSortChange = () => {
    const newSortOrder = !sortAscending;
    setSortAscending(newSortOrder);
  };

  // const handleError = () => {
  //   navigate('*');
  // };

  useEffect(() => {
    // fetch(
    //   `https://education-toy-server.vercel.app/toys/${user?.email}?num=${sort}`
    // )
    //   .then((res) => res.json())
    //   .then((data) => setToys(data))
    //   .catch((err) => console.log(err),
    //   setError(true)
    //   );
   

    const fetchData = async () => {
      try {
        // Simulating data fetching
        const response = await fetch(`https://education-toy-server.vercel.app/toys/${user?.email}?num=${sort}`);
        if (!response.ok) {
          throw new Error('Data fetch failed');
        }
        const data = await response.json();
        setToys(data);
      } catch (error) { console.log(error);
        setEror(true);
      }
    };

    fetchData();
  }, [isDelete, sort]);

  if(eror)
  {
    navigate('*');
  }

  // const fetchData = () => {
  //   // Simulating a data fetching process
  //   setTimeout(() => {
  //     // const isSuccess = false; // Set this based on the success of the data fetch
      
  //     if (toys===0) {
  //       navigate('*');
  //     }
  //   }, 3000);
  // };


  return (
    <>
    {toys ? (  <> <div className="flex justify-center mt-4">
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
            {
            toys &&
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
      </>
  )

: (
  // Render loading state or fallback UI
  <div>Loading...</div>
)}
      </>
  
  )  
{/*     
      {

      
      toys.length == 0 && (
        <p className="text-center text-4xl text-red-700 font-bold">
          
          
        </p>
      )} */}
    
  
};

export default MyToys;
