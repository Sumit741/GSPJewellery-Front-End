import React from "react";
import styles from "./home.module.css";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import BorderColorIcon from "@mui/icons-material/BorderColor";

function MainPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div>
          <span>TOTAL ORDERS</span>
          <p>50</p>
        </div>
        <BorderColorIcon className={styles.icon} />
      </div>
      <div className={styles.card}>
        <div>
          <span>TOTAL PRODUCTS</span>
          <p>50</p>
        </div>
        <ProductionQuantityLimitsIcon className={styles.icon} />
      </div>
      <div className={styles.card}>
        <div>
          <span>TOTAL CUSTOMERS</span>
          <p>50</p>
        </div>
        <PersonAddAlt1Icon className={styles.icon} />
      </div>
    </div>
  );
}

export default MainPage;
