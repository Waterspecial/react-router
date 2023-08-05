import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import StyledNavbar from "../components/StyledNavbar";

const Sharedlayout = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
};

export default Sharedlayout;
