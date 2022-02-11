import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./products.module.css";
function Products() {
  return (
    <div className={styles.div1}>
      This is product page
      <Link to="cat1">Gold</Link>
      <Outlet />
    </div>
  );
}

export default Products;
