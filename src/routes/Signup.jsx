import React from "react";
import { Button } from "react-bootstrap";
import SignupForm from "../components/SignUpForm";
import styles from "./styles/signup.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div
      className={
        "d-flex justify-content-between align-items-center w-100  " +
        styles.navigation
      }
    >
      <h5>Logo</h5>
      <Button variant="primary"><Link to="/login" className="text-white">Login</Link></Button>
    </div>
  );
};

const Signup = () => {
  return (
    <div className={`w-100 text-white ${styles.page}`}>
      <Navigation />
      <div className={"d-flex justify-content-center align-items-center " + styles['form-container']}>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
