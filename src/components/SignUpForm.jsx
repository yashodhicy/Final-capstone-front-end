import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if(watch("password") !== watch("password_confirmation")) return toast.warn("Password missmatch")
    const url = "https://house-rental-8mh7.onrender.com/auth";
    axios
      .post(url, data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "include",
        },
        // withCredentials: true
      })
      .then(() => {
        console.log("success");
        toast.success(
          "You signed up successfully, please login with the same credentials to connect t your account"
        );
        reset();
        navigate("/login");
      })
      .catch((err) => {
        console.log("error");
        console.log(err);
        toast.error(
          "An error occured while creating the account, please try again"
        );
        // reset();
      });
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="text-center"
      style={{ width: "100%", maxWidth: 400 }}
    >
      <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          {...register("username", { required: true })}
          required
          type="text"
          placeholder="Enter you user name"
        />
      </Form.Group>
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
      <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
        <Form.Label>Confirmation</Form.Label>
        <Form.Control
          {...register("password_confirmation", { required: true })}
          required
          type="password"
          placeholder="Confirm your password"
        />
      </Form.Group>
      <Button className="" variant="primary" type="submit">
        Sign up
      </Button>
    </Form>
  );
}

export default SignupForm;
