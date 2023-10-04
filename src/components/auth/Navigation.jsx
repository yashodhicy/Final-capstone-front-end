/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "../componentsCss/auth.module.css";
import style from "../../routes/styles/auth.module.css"

const Navigation = ({ login }) => {
  return (
    <div
      className={
        "d-flex justify-content-between align-items-center w-100  " +
        styles.navigation
      }
    >
      <h5>Logo</h5>
      <button className={`${style["sign-btn"]}`}>
        <Link to={login ? "/login" : "/signup"} className="text-white">
          {login ? "Login" : "Sign up"}
        </Link>
      </button>
    </div>
  );
};

export default Navigation;
