import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { Link } from "react-router-dom";
import Chart from "./Chart";
import axios from "axios";
import OrderChart from "./OrderChart";

function MainPage() {
  const [productCount, setProductCount] = useState([]);
  const [ordersCount, setOrdersCount] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalCustomers, setTotalCustomers] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:3001/product").then((response) => {
      setTotalProducts(response.data.length);
    });

    axios.get("http://localhost:3001/user").then((response) => {
      setTotalCustomers(response.data.length);
    });

    axios.get("http://localhost:3001/orders").then((response) => {
      setTotalOrders(response.data.length);
    });

    axios.get("http://localhost:3001/product/count").then((response) => {
      const data = response.data.map((item) => {
        return { name: item.ProductCategory, ...item };
      });
      setProductCount(data);
    });

    axios.get("http://localhost:3001/product/orderscount").then((response) => {
      const data = response.data.filter((item) => item.Order !== null);
      setOrdersCount(data);
    });
  }, []);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div>
            <span style={{ display: "flex" }}>
              TOTAL ORDERS <ArrowUpwardIcon style={{ fontSize: "13px" }} />
            </span>
            <p>{totalOrders}</p>
          </div>
          <BorderColorIcon className={styles.icon} />
        </div>
        <div className={styles.card}>
          <div>
            <span style={{ display: "flex" }}>
              TOTAL PRODUCTS <ArrowUpwardIcon style={{ fontSize: "13px" }} />
            </span>
            <p>{totalProducts}</p>
          </div>
          <ProductionQuantityLimitsIcon className={styles.icon} />
        </div>
        <div className={styles.card}>
          <div>
            <span style={{ display: "flex" }}>
              TOTAL CUSTOMERS <ArrowUpwardIcon style={{ fontSize: "13px" }} />
            </span>
            <p>{totalCustomers}</p>
          </div>
          <PersonAddAlt1Icon className={styles.icon} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <div className={styles.chartSection}>
          <span className={styles.span}>Products</span>
          <Chart productCount={productCount} />
        </div>
        <div className={styles.chartSection}>
          <span className={styles.span}>Orders</span>
          <OrderChart ordersCount={ordersCount} />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
