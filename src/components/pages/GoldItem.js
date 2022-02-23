import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./GoldItem.module.css";

function GoldItem() {
  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <h3>For</h3>
        <select>
          <option value="select">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <div className={styles.category}>
          <h2>Category</h2>
          <div className={styles.categoryLinks}>
            <Link to="/" className={styles.link}>
              All Products
            </Link>
            <Link to="/" className={styles.link}>
              Chains
            </Link>
            <Link to="/" className={styles.link}>
              Bracelets
            </Link>
            <Link to="/" className={styles.link}>
              Rings
            </Link>
            <Link to="/" className={styles.link}>
              Necklaces
            </Link>
            <Link to="/" className={styles.link}>
              Bangles
            </Link>
            <Link to="/" className={styles.link}>
              Baby Jewelry
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
}

export default GoldItem;
