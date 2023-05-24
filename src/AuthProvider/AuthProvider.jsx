/** @format */

import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContest = createContext({});
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [navigate, setNavigate] = useState("/");
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  //sign in user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign up user
  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in with google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // user track
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const userInfo = {
    user,
    signInUser,
    signUpUser,
    logOut,
    googleSignIn,
    loading,
    setNavigate,
    navigate,
  };

  return (
    <AuthContest.Provider value={userInfo}>{children}</AuthContest.Provider>
  );
};

export default AuthProvider;
