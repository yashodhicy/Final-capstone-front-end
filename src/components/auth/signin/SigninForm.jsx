import axios from "axios";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { save } from "../../utils/localstorage";
import styles from "../../../routes/styles/auth.module.css"

function SigninForm() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const url = "https://house-rental-8mh7.onrender.com/auth/sign_in";
    axios
      .post(url, data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "include",
        },
        // withCredentials: true
      })
      .then((response) => {
        const { client, uid, expiry } = response.headers;
        const data = {
          client,
          uid,
          "access-token": response.headers["access-token"],
          expiry,
        };
        save("session", data);
        toast.success(
          "You signed in successfully, welcome " + response.data.data.username
        );
        reset();
        navigate("/");
      })
      .catch((err) => {
        if (err.response.status === 401)
          err.response.data.errors.forEach((error) => {
            toast.error(error);
          });
        else {
          toast.error("An error occured while signing in, please try again");
        }
        reset();
      });
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="text-center"
      style={{ width: "100%", maxWidth: 400 }}
    >
      <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          {...register("email", { required: true })}
          required
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          {...register("password", { required: true })}
          required
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <button className={`${styles["sign-btn"]}`} type="submit">
        <i className="fa fa-home fa-2x " aria-hidden="true"></i>
        Sign in
        <i className="fa fa-chevron-circle-right fa-2x" aria-hidden="true"></i>  
      </button>
    </Form>
  );
}

export default SigninForm;
