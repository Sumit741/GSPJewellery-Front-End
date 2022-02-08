import "./App.css";
import Header from "./components/pages/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Cart from "./components/pages/Cart";
import AdminLogin from "./components/admin/AdminLogin";
import { useEffect, useState } from "react";
import Register from "./components/pages/Register";
import { useDispatch } from "react-redux";
import { authActions } from "./components/store/LoginAuthentication";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      dispatch(authActions.setAuthenticationTrue());
    } else {
      dispatch(authActions.setAuthenticationFalse());
    }
  });
  return (
    <div className="App" onClick={() => console.log("clicked")}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
