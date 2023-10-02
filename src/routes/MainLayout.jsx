import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { retrive } from "../components/utils/localstorage";
import { fetchUser } from "../Redux/user/userReducer";
import { toast } from "react-toastify";
import { getHouses } from "../Redux/HouseSlice";

const MainLayout = () => {
  const dispatch = useDispatch();
  const userSession = retrive("session");
  const navigate = useNavigate();
  const path = useLocation()
  useEffect(() => {
    dispatch(fetchUser(userSession));
  }, [dispatch]);

  // get user
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user.errors && path.pathname != "/login" && path.pathname != "/signup" ) {
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
