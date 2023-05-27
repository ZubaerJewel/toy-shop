/** @format */

import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialSignIn from "./SocialSignIn";
import { AuthContest } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const { signInUser, setNavigate } = useContext(AuthContest);

  const handleSignIn = (event) => {
    event.preventDefault();
    setError("");
    if (password.length < 6) {
      setError("Password must be six character long");
      return;
    }
    signInUser(email, password)
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign in Successful",
          showConfirmButton: false,
          timer: 1200,
        });

        navigate(from);

        //reset form
        setEmail("");
        setPassword("");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <>
      <h1 className="text-5xl font-bold text-purple-700 py-10 text-center">
        Please Sign in
      </h1>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="md:w-1/2">
            <img src="/signIn.jpg" alt="signin" />
          </div>
          <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl md:w-1/2">
            <form onSubmit={handleSignIn}>
              <div className="card-body w-full shadow-2xl shadow-purple-600 rounded-md bg-purple-400">
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
                  <button className="btn btn-primary">Sign in</button>
                </div>
                <SocialSignIn />
                <p className="mt-2 text-xl font-semibold">
                  New To Educational Toys !{" "}
                  <Link
                    onClick={() => setNavigate(from)}
                    to="/signup"
                    className="btn-link"
                  >
                    Register here
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
