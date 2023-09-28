import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div id="root">
      <Navbar />
      <div id="pages-content" style={{ width: "100%", backgroundColor: "red" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
