import { useState } from "react";
//import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./componentsCss/navbar.css";
import { Button } from "react-bootstrap";
import { clearSession, retrive } from "./utils/localstorage";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteUserData } from "../Redux/user/userReducer";
import { toast } from "react-toastify";

const Navbar = () => {
  // hooks
  const path = useLocation();
  const [tray, settray] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setNavigationBackground = (matchPath) => {
    if (path.pathname === matchPath)
      return { backgroundColor: "var(--green)", color: "white" };
    return {};
  };
  const navigationClass = (matchPath) => {
    return path.pathname === matchPath ? "text-white" : "";
  };

  const signout = () => {
    const url = "https://house-rental-8mh7.onrender.com/auth/sign_out";
    const userSession = retrive("session");
    axios.delete(url, { params: userSession }).then(() => {
      dispatch(deleteUserData());
      clearSession("session");
      navigate("/login");
      toast.success("You successfully signed out, see you again.");
    });
  };

  const onSignout = () => {
    const confirm = window.confirm("Do you really want to leave?");
    if (confirm) signout();
  };
  return (
    <>
      <div className="mobile-nav">
        <span
          role="button"
          onClick={() => settray(!tray)}
          onKeyDown={() => settray(!tray)}
          tabIndex={0}
        >
          <i className="fa fa-solid fa-bars fa-lg p-2" />
        </span>
      </div>
      <div
        id="navbar"
        className={tray ? "block" : "show"}
        role="button"
        onClick={() => settray(!tray)}
        onKeyDown={() => settray(!tray)}
        tabIndex={0}
      >
        <div className="top">
          <h2>HOUSE RENT</h2>
          <ul>
            <li style={setNavigationBackground("/")}>
              <Link className={navigationClass("/")} to="/">
                House
              </Link>
            </li>
            <li style={setNavigationBackground("/reserve")}>
              <Link className={navigationClass("/reserve")} to="reserve">
                Reserve
              </Link>
            </li>
            <li style={setNavigationBackground("/myreserve")}>
              <Link className={navigationClass("/myreserve")} to="myreserve">
                My Reservations
              </Link>
            </li>
            <li style={setNavigationBackground("/add")}>
              <Link className={navigationClass("/add")} to="add">
                Add House
              </Link>
            </li>
            <li>
              <Link to="delete">Delete House</Link>
            </li>
            <div>
              <Button onClick={onSignout} variant="danger">
                sign out
              </Button>
            </div>
          </ul>
        </div>
        <div className="socials">
          <ul>
            <li>
              <i className="fa fa-brands fa-twitter" />
            </li>
            <li>
              <i className="fa fa-brands fa-facebook-f" />
            </li>
            <li>
              <i className="fa fa-brands fa-pinterest-p" />
            </li>
            <li>
              <i className="fa fa-brands fa-google-plus-g" />
            </li>
          </ul>
        </div>
        <div
          className="mobile cancel"
          role="button"
          onClick={() => settray(!tray)}
          onKeyDown={() => settray(!tray)}
          tabIndex={0}
        >
          <i className="fa fa-solid fa-xmark" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
