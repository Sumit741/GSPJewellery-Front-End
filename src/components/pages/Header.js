import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.jpg";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import { modalAction } from "../store/showModal";

import "./Navbar.css";
import { authActions } from "../store/LoginAuthentication";
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const showModal = useSelector((state) => state.modal.modalVisible);
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const toogleModal = () => {
    dispatch(modalAction.showModal());
  };
  return (
    <div>
      <div className="top">
        <div className="social-sites">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram-square"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
        </div>
        <div className="top-links">
          {!isAuth ? (
            <>
              <Link to="register" className="tlink">
                <i className="fas fa-cart-plus"></i> REGISTER
              </Link>{" "}
              |{" "}
              <Link to="login" className="tlink">
                <i className="fas fa-user"></i> LOGIN
              </Link>{" "}
              |{" "}
            </>
          ) : (
            <Link
              to="/"
              className="tlink"
              onClick={() => {
                localStorage.removeItem("accessToken");
                dispatch(authActions.setAuthenticationFalse());
              }}
            >
              <i className="fas fa-user"></i> LOGOUT
            </Link>
          )}
        </div>
      </div>

      <div className="mid">
        <div className="mid-left">
          <span>
            {" "}
            <i className="fas fa-phone-alt"></i> INQUIRY | 9846212889
          </span>
        </div>
        <h1>
          GSP<span className="mid-logo">jewellery</span>
        </h1>
        <div className="mid-right">
          <i className="fas fa-search" onClick={toogleModal}></i>
          <span>RATE: 98,500 </span>
          <Link to="/cart" className="mid-links">
            {" "}
            <i className="fas fa-cart-plus"></i> CART- {`${quantity}`}
          </Link>
        </div>
      </div>
      {showModal && <Modal style="color: black;" />}

      <nav className="navbar navbar-expand-lg shadow navigation">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" onClick={() => navigate("/")}>
            <img src={logo} className="logo" />
          </a>
          <a
            className="navbar-toggler toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto ">
              <li className="nav-item">
                <Link to="/" className="nav-link mx-2 links">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link mx-2 links"
                  onClick={() => {
                    navigate("/gold");
                  }}
                >
                  Gold Items
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link mx-2 links"
                  onClick={() => {
                    navigate("/silver");
                  }}
                >
                  Silver Items
                </span>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link mx-2 links">
                  Create Design
                </Link>
              </li>
              <li className="nav-item">
                <Link to="aboutus" className="nav-link mx-2 links">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="contact" className="nav-link mx-2 links">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
