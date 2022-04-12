import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div
      style={{
        width: "100%",
        paddingBottom: "20px",
        backgroundColor: "rgb(44, 43, 43)",
      }}
    >
      <div className={styles.footerContainer}>
        <div className={styles.logo} data-aos="fade-right">
          <h1>
            GSP<span>jewellery</span>
          </h1>
          <span style={{ fontWeight: "300", fontSize: "15px" }}>
            GSP Jewellery is a jewellery store located at Galyang-03, Syangja.
            We aim to fulfill the satisfaction of ours customers by providing
            decent services.
          </span>
        </div>
        <div className={styles.footerRight} data-aos="fade-left">
          <div>
            <h5>USEFUL LINKS</h5>
            <NavLink to="/">GSPjewellery</NavLink>
            <NavLink to="/">About Us</NavLink>
            <NavLink to="/">Create Designs</NavLink>
          </div>
          <div>
            <h5>CONTACT</h5>
            <span>Galyang-03, Syangja, Nepal</span>
            <span>infogspjewellery@gmail.com</span>
            <span>+977-9846212889</span>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.bottom} data-aos="fade-up">
        <span>&copy; 2022 GSPjewellery. All Rights Reserved</span>
        <div className={styles.mediaLinks}>
          <FaFacebookF className={styles.icons} />{" "}
          <FaInstagram className={styles.icons} />{" "}
          <FaTwitter className={styles.icons} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
