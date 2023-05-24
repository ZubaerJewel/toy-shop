/** @format */

import React, { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContest } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const SocialSignIn = () => {
  const { googleSignIn } = useContext(AuthContest);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast("Successfully Sign in");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="w-full flex justify-center gap-2 mt-2 items-center">
      <button
        onClick={handleGoogleSignIn}
        className="btn hover:bg-transparent hover:text-black  btn-circle btn-outline"
      >
        <FaGoogle className="text-3xl" />
      </button>
      <div className="divider divider-horizontal">OR</div>
      <button
        title="Not yet added"
        className="btn hover:bg-transparent hover:text-black  btn-circle btn-outline"
      >
        <FaFacebook className="text-3xl" />
      </button>
    </div>
  );
};

export default SocialSignIn;
