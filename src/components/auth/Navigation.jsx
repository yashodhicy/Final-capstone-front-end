/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../componentsCss/auth.module.css";

const Navigation = ({ login }) => {
  return (
    <div
      className={
        "d-flex justify-content-between align-items-center w-100  " +
        styles.navigation
      }
    >
      <h5>Logo</h5>
      <Button variant="primary">
        <Link to={login ? "/login" : "signup"} className="text-white">
          {login ? "Login" : "Sign up"}
        </Link>
      </Button>
    </div>
  );
};

export default Navigation;
