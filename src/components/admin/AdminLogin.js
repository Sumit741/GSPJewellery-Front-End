import React, { useState } from "react";
import styles from "./Adminlogin.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = () => {
    if (username && password) {
      axios
        .post("http://localhost:3001/admin/login", {
          Username: username,
          Password: password,
        })
        .then((response) => {
          if (response.data.error) {
            alert(response.data.error);
          } else {
            navigate("/admindashboard");
            localStorage.setItem("adminAccessToken", response.data.token);
            alert("YOU ARE LOGGED IN ADMIN");
          }
        });
    } else {
      alert("Please enter both username and password");
    }
  };

  return (
    <div className={styles.adminLogin}>
      <div className={styles.adminloginForm}>
        <div className={styles.image}></div>
        <div className={styles.form}>
          <h1>Welcome to admin login</h1>
          <input
            type="text"
            value={username}
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={loginHandler}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
