import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./products.module.css";
function Products() {
  const [show, setShow] = useState(true);
  const clickHandler = () => {
    setShow(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.helper}>
        <div className={styles.card}>
          <Link to="view">View Products</Link>
        </div>
        <div className={styles.card}>
          <Link to="add" onClick={clickHandler}>
            Add Products
          </Link>
        </div>
        <div className={styles.card}>
          <Link to="view">Manage Products</Link>
        </div>
      </div>

      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
}

export default Products;
