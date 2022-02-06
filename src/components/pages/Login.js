import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../../images/loginpage.jpg";
import "./Login.css";
import "aos/dist/aos.css";
import Aos from "aos";
function Login() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 1000,
    });
  }, []);
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
            <input type="text" placeholder="Enter Your Username" />
            <input type="password" placeholder="Enter Your Password" />
            <button className="login">Login</button>
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
