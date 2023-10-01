import Navigation from "../../components/auth/Navigation";
import SigninForm from "../../components/auth/signin/SigninForm";
import styles from "../styles/auth.module.css";

const Signin = () => {
  return (
    <div className={`w-100 text-white ${styles.page}`}>
      <Navigation />
      <div className={"d-flex justify-content-center align-items-center " + styles['form-container']}>
        <SigninForm />
      </div>
    </div>
  );
};

export default Signin;
