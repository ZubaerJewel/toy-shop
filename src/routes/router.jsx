/** @format */

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import Main from "../layout/Main";
import PageNotFound from "../components/PageNotFound";
import AllToys from "../components/AllToys";
import MyToys from "../components/MyToys";
import AddToys from "../components/AddToys";
import Blog from "../components/Blog";
import ToyDetails from "../components/ToyDetails";
import UpdateToy from "../components/UpdateToy";
import SignIn from "../components/UserAccount/SignIn";
import SignUp from "../components/UserAccount/SignUp";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/alltoys",
        element: <AllToys />,
      },
      {
        path: "/toys/:id",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/toys/toy/${params.id}`
          ),
      },
      {
        path: "/toys/update/:id",
        element: (
          <PrivateRoute>
            <UpdateToy />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/toys/toy/${params.id}`
          ),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/addtoys",
        element: (
          <PrivateRoute>
            <AddToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
