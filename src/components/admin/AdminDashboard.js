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
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>
          <DashboardIcon className={styles.dashboardIcon} />
          Dashboard
        </h3>
        <h3 className={styles.adminName}>
          Admin@123
          <AccountCircleIcon className={styles.user1} />
        </h3>
      </div>

      <div className={styles.content}>
        <div className={styles.links}>
          <div className={styles.user}>
            <AccountCircleIcon className={styles.userIcon} />
            <h3>Admin@123</h3>
          </div>
          <Link to="home">
            <HomeIcon />
            <span>Home</span>
          </Link>
          <Link to="products">
            <CategoryIcon />
            <span>Products</span>
          </Link>
          <Link to="orders">
            <ShoppingCartIcon />
            <span>Orders</span>
          </Link>
          <Link to="customers">
            <FaceRetouchingNaturalIcon />
            <span>Customers</span>
          </Link>
          <Link to="statistics">
            <BarChartIcon />
            <span>Statisics</span>
          </Link>
          <Link to="message">
            <MapsUgcIcon />
            <span>Messages</span>
          </Link>
        </div>
        <div className={styles.Outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
