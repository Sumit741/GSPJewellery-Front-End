import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import { modalAction } from "../store/showModal";

import "./Navbar.css";
function Header() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.modalVisible);
  const toogleModal = () => {
    dispatch(modalAction.showModal());
  };
  return (
    <div>
      <div className="top">
        <div className="social-sites">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-instagram-square"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-youtube"></i>
        </div>
        <div className="top-links">
          <Link to="register" className="tlink">
            <i class="fas fa-cart-plus"></i> REGISTER
          </Link>{" "}
          |{" "}
          <Link to="login" className="tlink">
            <i class="fas fa-user"></i> LOGIN
          </Link>{" "}
          |{" "}
          <Link to="login" className="tlink">
            <i class="fas fa-user"></i> LOGOUT
          </Link>
        </div>
      </div>

      <div className="mid">
        <div className="mid-left">
          <span>
            {" "}
            <i class="fas fa-phone-alt"></i> INQUIRY | 9846212889
          </span>
        </div>
        <h1>
          GSP<span className="mid-logo">jewelry</span>
        </h1>
        <div className="mid-right">
          <i class="fas fa-search" onClick={toogleModal}></i>
          <span>RATE: 98,500 </span>
          <Link to="login" className="mid-links">
            {" "}
            <i class="fas fa-cart-plus"></i> CART-(0)
          </Link>
        </div>
      </div>
      {showModal && <Modal style="color: black;" />}

      <nav class="navbar navbar-expand-lg shadow navigation">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} className="logo" />
          </a>
          <button
            class="navbar-toggler toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto ">
              <li class="nav-item">
                <Link to="/" className="nav-link mx-2 links">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" className="nav-link mx-2 links">
                  Gold Items
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" className="nav-link mx-2 links">
                  Silver Items
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" className="nav-link mx-2 links">
                  Product Catalogue
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" className="nav-link mx-2 links">
                  About Us
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" className="nav-link mx-2 links">
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
