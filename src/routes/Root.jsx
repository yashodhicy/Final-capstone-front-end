/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { retrive } from "../components/utils/localstorage";
import { fetchUser } from "../Redux/user/userReducer";
import { toast } from "react-toastify";

const Root = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const userSession = retrive("session");
  if (!userSession) navigate("/login");
  const user = useSelector((state) => state.user);
  const houses = useSelector((state) => state.Houses);
  const reservations = useSelector((state) => state.reservations);
  useEffect(() => {
    dispath(fetchUser(userSession));
  }, [houses, reservations]);

  useEffect(() => {

    if (user.errors) {
      if (user.errors.code !== "ERR_NETWORK") {
        toast.error("Your session is expired, please login with your user credentials!");
        navigate("/login");
      } else {
        toast.error("Please connect to internet and try again!");
      }
    }
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
