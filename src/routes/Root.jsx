import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div id="root">
      <Navbar />
      <div id="pages-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
