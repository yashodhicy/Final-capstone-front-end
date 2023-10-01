import { useSelector } from "react-redux";
import Navigation from "../../components/auth/Navigation";
import SigninForm from "../../components/auth/signin/SigninForm";
import styles from "../styles/auth.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Signin = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    useEffect(() => {
      if (user) {
        toast.success(
          "You are already connected, if you want to change your account, please disconnect before."
        );
        console.log("you are connected");
        navigate('/')
      }
    }, [user]);
  return (
    <div className={`w-100 text-white ${styles.page}`}>
      <Navigation login={false} />
      <div className={"d-flex justify-content-center align-items-center " + styles['form-container']}>
        <SigninForm />
      </div>
    </div>
  );
};

export default Signin;
