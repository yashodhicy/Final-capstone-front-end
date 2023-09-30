import { useState } from "react";
//import { useDispatch } from 'react-redux';
import { Link, useLocation } from "react-router-dom";
import "./componentsCss/navbar.css";

const Navbar = () => {
  const path = useLocation();
  const setNavigationBackground = (matchPath) => {
    if (path.pathname === matchPath) return { backgroundColor: "yellowgreen", color: "white" };
    return {};
  };
  const navigationClass = (matchPath) => {
    return path.pathname === matchPath?"text-white": ""
  }
  const [tray, settray] = useState(true);
  return (
    <>
      <div className="mobile bars">
        <span
          role="button"
          onClick={() => settray(false)}
          onKeyDown={() => settray(false)}
          tabIndex={0}
        >
          <i className="fa-solid fa-bars" />
        </span>
      </div>
      <div
        id="navbar"
        className={tray ? "block" : "show"}
        role="button"
        onClick={() => settray(true)}
        onKeyDown={() => settray(false)}
        tabIndex={0}
      >
        <div className="top">
          <h2>HOUSE RENT</h2>
          <ul>
            <li style={setNavigationBackground("/")}>
              <Link className={navigationClass('/')} to="/">House</Link>
            </li>
            <li style={setNavigationBackground("/reserve")}>
              <Link className={navigationClass('/reserve')} to="reserve">Reserve</Link>
            </li>
            <li style={setNavigationBackground("/myreserve")}>
              <Link className={navigationClass('/myreserve')} to="myreserve">My Reservations</Link>
            </li>
            <li style={setNavigationBackground("/add")}>
              <Link className={navigationClass('/add')} to="add">Add House</Link>
            </li>
            <li>
              <Link to="delete">Delete House</Link>
            </li>
            <li>
              <Link to="login">sign out</Link>
            </li>
          </ul>
        </div>
        <div className="socials">
          <ul>
            <li>
              <i className="fa-brands fa-twitter" />
            </li>
            <li>
              <i className="fa-brands fa-facebook-f" />
            </li>
            <li>
              <i className="fa-brands fa-pinterest-p" />
            </li>
            <li>
              <i className="fa-brands fa-google-plus-g" />
            </li>
          </ul>
        </div>
        <div
          className="mobile cancel"
          role="button"
          onClick={() => settray(true)}
          onKeyDown={() => settray(true)}
          tabIndex={0}
        >
          <i className="fa-solid fa-xmark" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
