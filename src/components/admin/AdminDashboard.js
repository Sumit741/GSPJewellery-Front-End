import React, { useEffect, useState } from "react";
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
  const [showdropdown, setShowDropDown] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1>JSP jewellery</h1>
        <div className={styles.headerRight}>
          <span>Admin</span>
          <AccountCircleIcon />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <div className={styles.lists}>
            <li>
              <Link to="dashboard" className={styles.links}>
                <DashboardIcon className={styles.icon} /> Dashboard
              </Link>
            </li>
            <li>
              <a onClick={() => setShowDropDown(!showdropdown)}>
                <CategoryIcon className={styles.icon} /> Products
              </a>
            </li>
            {showdropdown && (
              <div className={styles.dropdown}>
                <Link to="products" className={styles.dropdownlink}>
                  <CategoryIcon className={styles.icon} /> View Products
                </Link>
                <Link to="addproduct" className={styles.dropdownlink}>
                  <CategoryIcon className={styles.icon} /> Add Products
                </Link>
              </div>
            )}
            <li>
              <Link to="dashboard">
                <ShoppingCartIcon className={styles.icon} /> Orders
              </Link>
            </li>
            <li>
              <Link to="dashboard">
                <FaceRetouchingNaturalIcon className={styles.icon} /> Customers
              </Link>
            </li>
            <li>
              <Link to="dashboard">
                <BarChartIcon className={styles.icon} /> Statistics
              </Link>
            </li>
            <li>
              <Link to="dashboard">
                <MapsUgcIcon className={styles.icon} /> Messages
              </Link>
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
