/** @format */

import React, { useContext, useEffect, useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import ActiveLink from "../ActiveLink";
import { AuthContest } from "../../AuthProvider/AuthProvider";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();
  const { user, logOut } = useContext(AuthContest);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign out Successful",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((error) => console.log(error));
  };

  //sign in button
  const SignInBtn = () => {
    return (
      <Link to="/signin">
        <button className="primary-btn">Sign in</button>
      </Link>
    );
  };

  //sign Out button
  const SignOutBtn = () => {
    return (
      <button onClick={handleLogOut} className="primary-btn">
        Sign out
      </button>
    );
  };

  //user profile info
  const UserProfile = () => {
    return (
      <div
        title={user?.displayName || "Name not added"}
        className="avatar placeholder"
      >
        <div className="w-16 mask mask-hexagon">
          {user?.photoURL ? (
            <img src={user?.photoURL} />
          ) : (
            <div className="text-3xl text-black font-bold rounded-full w-full h-full flex justify-center items-center bg-purple-500">
              {user?.email.slice(0, 1)}
            </div>
          )}
        </div>
        <ToastContainer />
      </div>
    );
  };

  //update title
  useEffect(() => {
    const pathname = location.pathname;
    let title = "Toys Zone";

    // Update the title based on the current pathname
    if (pathname === "/") {
      title = "Toys Zone Home";
    } else if (pathname === "/alltoys") {
      title = "Toys Zone all-toys";
    } else if (pathname === "/mytoys") {
      title = "Toys Zone my-toys";
    } else if (pathname === "/addtoys") {
      title = "Toys Zone add-toys";
    } else if (pathname === "/blog") {
      title = "Toys Zone blog";
    } else if (pathname.includes("/toys/")) {
      title = "Toys Zone toy details";
    }

    document.title = title;
  }, [location]);

  return (
    <>
      <nav className="w-full bg-[rgba(234,63,239,0.09)] md:px-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="flex items-center">
                <img src="/logo.png" className="w-16  rounded-full bg-cover" />
                <p className=" md:block text-2xl text-purple-700 font-bold">
                  Toys-Zone
                </p>
              </div>
              {user && (
                <div className="md:hidden">
                  <UserProfile />
                </div>
              )}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <RxCross1 /> : <RxHamburgerMenu />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-black font-semibold">
                <li>
                  <ActiveLink to="/">Home</ActiveLink>
                </li>
                <li>
                  <ActiveLink to="/alltoys">All Toys</ActiveLink>
                </li>
                {user && (
                  <>
                    <li>
                      <ActiveLink to="/mytoys">My toys</ActiveLink>
                    </li>
                    <li>
                      <ActiveLink to="/addtoys">Add a toy</ActiveLink>
                    </li>
                  </>
                )}
                <li>
                  <ActiveLink to="/blog">Blog</ActiveLink>
                </li>
              </ul>

              <div className="mt-3 space-y-2 md:hidden">
                {user ? <SignOutBtn /> : <SignInBtn />}
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-flex items-center">
            {user ? (
              <>
                <UserProfile />
                <SignOutBtn />
              </>
            ) : (
              <SignInBtn />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
