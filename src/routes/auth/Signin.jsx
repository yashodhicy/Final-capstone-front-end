import { useSelector } from "react-redux";
import Navigation from "../../components/auth/Navigation";
import SigninForm from "../../components/auth/signin/SigninForm";
import styles from "../styles/auth.module.css";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signin = () => {
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
      <Navigation login={false} />
      <div
        className={
          "d-flex justify-content-center align-items-center " +
          styles["form-container"]
        }
      >
        <SigninForm />
      </div>
    </div>
  );
};

export default Signin;
