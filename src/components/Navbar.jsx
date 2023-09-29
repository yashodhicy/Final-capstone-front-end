import { useState } from "react";
//import { useDispatch } from 'react-redux';
import { Link, useLocation } from "react-router-dom";
import "./componentsCss/navbar.css";

const Navbar = () => {
  const path = useLocation();
  const setNavigationBackground = (matchPath) => {
    if (path.pathname === matchPath) return "yellowgreen";
    return "unset";
  };
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
            <li
              style={{
                backgroundColor: setNavigationBackground('/'),
              }}
            >
              <Link to="/">House</Link>
            </li>
            <li style={{
                backgroundColor: setNavigationBackground('/reserve'),
              }}>
              <Link to="reserve">Reserve</Link>
            </li>
            <li style={{
                backgroundColor: setNavigationBackground('/myreserve'),
              }}>
              <Link to="myreserve">My Reservations</Link>
            </li>
            <li style={{
                backgroundColor: setNavigationBackground('/add'),
              }}>
              <Link to="add">Add House</Link>
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
