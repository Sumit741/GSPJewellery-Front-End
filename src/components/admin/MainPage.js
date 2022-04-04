import React from "react";
import styles from "./home.module.css";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div>
          <span style={{ display: "flex" }}>
            TOTAL ORDERS <ArrowUpwardIcon style={{ fontSize: "13px" }} />
          </span>
          <p>50</p>
        </div>
        <BorderColorIcon className={styles.icon} />
      </div>
      <div className={styles.card}>
        <div>
          <span style={{ display: "flex" }}>
            TOTAL PRODUCTS <ArrowUpwardIcon style={{ fontSize: "13px" }} />
          </span>
          <p>50</p>
        </div>
        <ProductionQuantityLimitsIcon className={styles.icon} />
      </div>
      <div className={styles.card}>
        <div>
          <span style={{ display: "flex" }}>
            TOTAL CUSTOMERS <ArrowUpwardIcon style={{ fontSize: "13px" }} />
          </span>
          <p>50</p>
        </div>
        <PersonAddAlt1Icon className={styles.icon} />
      </div>
    </div>
  );
}

export default MainPage;
