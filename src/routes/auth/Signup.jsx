import Navigation from "../../components/auth/Navigation";
import SignupForm from "../../components/auth/signup/SignUpForm";
import styles from "../styles/auth.module.css";

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
