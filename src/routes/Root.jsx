/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { retrive } from "../components/utils/localstorage";
import { fetchUser } from "../Redux/user/userReducer";

const Root = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const userSession = retrive("session");
  if (!userSession) navigate("/login");
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispath(fetchUser(userSession));
  }, [dispath, navigate]);

  useEffect(() => {
    if (user.errors) navigate("/login");
    console.log(user);
  }, [user]);

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
