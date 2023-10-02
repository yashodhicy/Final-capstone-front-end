import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { retrive } from "../components/utils/localstorage";
import { fetchUser } from "../Redux/user/userReducer";
import { toast } from "react-toastify";
import { getHouses } from "../Redux/HouseSlice";

const MainLayout = () => {
  const dispatch = useDispatch();
  const userSession = retrive("session");
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchUser(userSession));
  }, []);

  // get user
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user.errors) {
      toast.error("Your session is expired, login before any further action");
      navigate("/login");
    }
    if (user.user) {
      dispatch(getHouses());
    }
  }, [user, dispatch, navigate]);
  return <Outlet />;
};

export default MainLayout;
