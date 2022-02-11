import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../../images/loginpage.jpg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

import "./Login.css";
import axios from "axios";
import "aos/dist/aos.css";
import Aos from "aos";
import { authActions } from "../store/LoginAuthentication";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 1000,
    });
  }, []);
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const loginHandler = () => {
    if (Username && Password) {
      axios
        .post("http://localhost:3001/user/login", {
          Username: Username,
          Password: Password,
        })
        .then((response) => {
          if (!response.data.error) {
            localStorage.setItem("accessToken", response.data.token);
            alert(response.data.message);
            dispatch(authActions.setAuthenticationTrue());
            navigate("/");
            setUsername("");
            setPassword("");
          } else {
            alert(response.data.error);
          }
        });
    } else {
      alert("Enter Username  and Password");
    }
  };
  return (
    <div className="login-section">
      <div className="login-form" data-aos="zoom-in">
        <div className="form">
          <h1>Login to Your Account</h1>
          <span>
            Login to your account to purchase the items from our store.
            Discount!!
          </span>
          <div className="form-input">
            <input
              type="text"
              value={Username}
              placeholder="Enter Your Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              value={Password}
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login" onClick={loginHandler}>
              Login
            </button>
            <div className="text">
              <span>
                Haven't created an account? <Link to="/register">Register</Link>
              </span>
            </div>
          </div>
        </div>
        <div className="picture"></div>
      </div>
    </div>
  );
}

export default Login;
