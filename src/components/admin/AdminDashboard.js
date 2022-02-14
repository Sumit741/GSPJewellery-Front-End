import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styles from "./AdminDashboard.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import BarChartIcon from "@mui/icons-material/BarChart";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import DashboardIcon from "@mui/icons-material/Dashboard";
function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1>JSP jewellery</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <div className={styles.lists}>
            <li>
              <DashboardIcon className={styles.icon} />
              <Link to="dashboard" className={styles.links}>
                Dashboard
              </Link>
            </li>
            <li>
              <CategoryIcon className={styles.icon} />
              <Link to="products">Products</Link>
            </li>
            <li>
              <ShoppingCartIcon className={styles.icon} />
              <Link to="dashboard">Orders</Link>
            </li>
            <li>
              <FaceRetouchingNaturalIcon className={styles.icon} />
              <Link to="dashboard">Customers</Link>
            </li>
            <li>
              <BarChartIcon className={styles.icon} />
              <Link to="dashboard">Statistics</Link>
            </li>
            <li>
              <MapsUgcIcon className={styles.icon} />
              <Link to="dashboard">Messages</Link>
            </li>
          </div>
        </div>
        <div className={styles.Outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
