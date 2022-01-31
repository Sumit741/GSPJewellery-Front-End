import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  return (
    <div className="login-section">
      <div className="login-form">
        <form className="form">
          <h1>Login</h1>
          <label>Username</label>
          <input type="text" className="username-input" />
          <label>Password</label>
          <input type="password" className="password-input" />
          <button>Login</button>
          <p>or</p>
          <Link to="/register" className="link">
            Create an account
          </Link>
        </form>
      </div>
      <div className="message">
        <p>
          Login to grab the discount offers and use our system to buy and order
          the products from our store. Hurry Up!
        </p>
      </div>
    </div>
  );
}

export default Login;
