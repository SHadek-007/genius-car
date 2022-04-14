import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message}
        </p>
      </div>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const navigateToRegister = () => {
    navigate("/register");
  };

  const resetPassword = async () =>{
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
        alert('Sent email');
  };

  return (
    <div className="container border border-primary p-3 w-50 mx-auto mt-4 rounded-3">
      <h2 className="text-center text-primary mt-3">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter your email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Enter your Password"
          />
        </Form.Group>
        <Button className="w-50 mx-auto d-block my-3 fs-5" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p className="mt-2">
        New to Genius Car?{" "}
        <Link to={"/register"} className="text-primary text-decoration-none" onClick={navigateToRegister}>Please Register</Link></p>
      <p>Forget Password? <Link to="/login" className='text-primary text-decoration-none' onClick={resetPassword}>Reset Password</Link> </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
