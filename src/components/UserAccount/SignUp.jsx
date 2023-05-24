/** @format */

import React, { useContext, useState } from "react";
import { AuthContest } from "../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import SocialSignIn from "./SocialSignIn";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

const SignIn = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigateTo = useNavigate();

  const { signUpUser, navigate } = useContext(AuthContest);

  const handleSignUp = (event) => {
    event.preventDefault();
    setError("");

    //validation
    if (password.length < 6) {
      setError("Password must be six character long");
      return;
    }

    signUpUser(email, password)
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign up Successful",
          showConfirmButton: false,
          timer: 1500,
        });

        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            toast("User Profile Updated");
          })
          .catch((error) => setError(error.message));

        navigateTo(navigate);

        //reset input field
        setName("");
        setPhoto("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => setError(error.message));
  };
  return (
    <>
      <h1 className="text-5xl font-bold text-purple-700 py-10 text-center">
        Please Register
      </h1>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="md:w-1/2">
            <img src="/signUp.jpg" alt="signin" />
          </div>
          <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl md:w-1/2">
            <form onSubmit={handleSignUp}>
              <div className="card-body shadow-2xl shadow-purple-600 rounded-md bg-purple-400">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="your name"
                    className="p-4 border rounded-md outline-none"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo url</span>
                  </label>
                  <input
                    type="url"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    placeholder="photo url"
                    className="p-4 border rounded-md outline-none"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="email"
                    className="p-4 border rounded-md outline-none"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="password"
                    className="p-4 border rounded-md outline-none"
                  />
                  <label className="label">
                    <p className="label-text-alt text-red-700 font-semibold link link-hover">
                      {error && error}
                    </p>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign up</button>
                </div>
                <SocialSignIn />
                <p className="mt-2 text-xl font-semibold">
                  Already have an account !{" "}
                  <Link to="/signin" className="btn-link">
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
