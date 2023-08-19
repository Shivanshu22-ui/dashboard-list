import { Alert,  Modal } from "react-bootstrap";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import googleLogo from "../../utilities/icons/google-icon.svg";
import appleLogo from "../../utilities/icons/apple.svg";

export default function Login() {
  const emailRef = useRef();
  const emailRef1 = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { login, signup ,resetPassword} = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState();
  const [register, setRegister] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleSubmit(e) {
    e.preventDefault();
    if (register) {
      console.log(passwordConfirmRef.current.value, passwordRef.current.value);
      if (passwordConfirmRef.current.value !== passwordRef.current.value) {
        return setError("Passwords do not match");
      }
      await signup(emailRef.current.value, passwordRef.current.value)
        .then((result) => {
          setError("");
          navigate("/", { replace: true });
        })
        .catch((err) => {
          console.log(err);
          setError("Failed to sign up");
        });
    } else {
      await login(emailRef.current.value, passwordRef.current.value)
        .then((result) => {
          navigate("/", { replace: true });
          setError("");
        })
        .catch((err) => {
          console.log(err);
          setError("Failed to Login");
        });
    }
  }

  async function forgetPassword(e) {
    e.preventDefault();
    await resetPassword(emailRef1.current.value)
      .then((result) => {
        setError("");
        setSuccess('Check your email and reset your password');
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to reset password");
      });
  }

  return (
    <div className="container-fluid">
      <div className="row" style={{ height: "100vh" }}>
        <div
          className="col-4 bg-black text-white d-flex justify-content-center align-items-center text-center"
          style={{ fontSize: "64px", fontWeight: 600 }}
        >
          Board.
        </div>
        <div
          className="col d-flex justify-content-center align-items-center"
          style={{ background: "#F5F5F5" }}
        >
          <div>
            <h3 className="" style={{ fontWeight: 700, fontSize: "36px" }}>
              {register ? "Sign Up" : "Sign In"}
            </h3>
            <p style={{ fontSize: "16px" }}>
              {" "}
              {register ? "Sign Up" : "Sign in"} to your account
            </p>
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="d-flex">
              <div
                className="p-1 px-3"
                style={{
                  cursor: "pointer",
                  background: "#FFF",
                  borderRadius: "8px",
                  fontSize: "12px",
                  color: "#858585",
                }}
              >
                <img src={googleLogo} alt="" height={12} className="mx-2" />
                Sign in with google
              </div>
              <div
                className="p-1 px-3"
                style={{
                  cursor: "pointer",
                  background: "#FFF",
                  borderRadius: "8px",
                  fontSize: "12px",
                  color: "#858585",
                  marginLeft: "10px",
                }}
              >
                <img src={appleLogo} alt="" height={12} className="mx-2" />
                Sign in with apple
              </div>
            </div>
            <div
              style={{
                background: "#FFF",
                borderRadius: "8px",
                fontSize: "16px",
              }}
              className="my-4 p-4"
            >
              <div>
                <p className="my-2">Email address</p>
                <input
                  ref={emailRef}
                  required
                  type="text"
                  className="w-100 p-1 px-3"
                  style={{
                    borderRadius: "8px",
                    outline: "none",
                    border: "none",
                    background: "#F5F5F5",
                    color: "black",
                  }}
                  placeholder="johndeo@gmail.com"
                />
              </div>
              <div>
                <p className="my-2">Password</p>
                <input
                  ref={passwordRef}
                  required
                  type="password"
                  className="w-100 p-1 px-3"
                  style={{
                    borderRadius: "8px",
                    outline: "none",
                    border: "none",
                    background: "#F5F5F5",
                    color: "black",
                  }}
                  placeholder="Password"
                />
              </div>
              {register ? (
                <div>
                  <p className="my-2">Confirm Password</p>
                  <input
                    ref={passwordConfirmRef}
                    required
                    type="password"
                    className="w-100 p-1 px-3"
                    style={{
                      borderRadius: "8px",
                      outline: "none",
                      border: "none",
                      background: "#F5F5F5",
                      color: "black",
                    }}
                    placeholder="Password"
                  />
                </div>
              ) : null}
              <div className="my-3" style={{ fontSize: "16px" }}>
                <Link onClick={handleShow} style={{ textDecoration: "none" }}>
                  {!register ? "Forgot Password ?" : ""}
                </Link>
              </div>
              <button
                className="w-100 py-1"
                style={{
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                  background: "black",
                  color: "#FFF",
                  fontWeight: 600,
                }}
                onClick={handleSubmit}
              >
                {" "}
                {!register ? "Sign In" : "Sign Up"}{" "}
              </button>
            </div>
            <div className="text-center">
              {register
                ? "Already have an account !"
                : `Don't have an account ?`}
              <Link
                onClick={() => setRegister(!register)}
                style={{ textDecoration: "none" }}
              >
                &nbsp; {register ? "Login" : "Register here"}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password ? </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p className="my-2">Email address</p>
            <input
              ref={emailRef1}
              required
              type="text"
              className="w-100 p-1 px-3"
              style={{
                borderRadius: "8px",
                outline: "none",
                border: "none",
                background: "#F5F5F5",
                color: "black",
              }}
              placeholder="johndeo@gmail.com"
            />
          </div>
          <button
                className="w-100 py-1 my-4"
                style={{
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                  background: "black",
                  color: "#FFF",
                  fontWeight: 600,
                }}
                onClick={forgetPassword}
              >
                Change Password
              </button>
              {success && <Alert variant="success">{success}</Alert>}
              
        </Modal.Body>
      </Modal>
    </div>
  );
}
