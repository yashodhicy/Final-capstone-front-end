import { useSelector } from "react-redux";
import Navigation from "../../components/auth/Navigation";
import SignupForm from "../../components/auth/signup/SignUpForm";
import styles from "../styles/auth.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Signup = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.user && !user.errors) {
      navigate("/");
      toast.success(
        "You are already signed in, log out if you want to connect to another account"
      );
    }
  }, [user, navigate]);
  return (
    <div className={`w-100 text-white ${styles.page}`}>
      <Navigation login={true} />
      <div
        className={
          "d-flex justify-content-center align-items-center " +
          styles["form-container"]
        }
      >
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
