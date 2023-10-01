import { useSelector } from "react-redux";
import Navigation from "../../components/auth/Navigation";
import SignupForm from "../../components/auth/signup/SignUpForm";
import styles from "../styles/auth.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      toast.success(
        "You are already connected, if you want to change your account, please disconnect before."
      );
      navigate('/')
    }
  }, [user]);
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
