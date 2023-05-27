/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "bg-purple-600 text-white px-3 py-2 rounded-md"
          : ""
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
