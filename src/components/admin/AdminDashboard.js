import React, { useEffect, useState } from "react";
import { Link, Navigate, Outlet, useNavigate, NavLink } from "react-router-dom";
import styles from "./AdminDashboard.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import BarChartIcon from "@mui/icons-material/BarChart";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/LoginAuthentication";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function AdminDashboard() {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("adminAccessToken")) {
      setIsAuth(true);
    } else {
      navigate("/admin");
    }
  }, []);
  console.log(isAuth);
  const [showdropdown, setShowDropDown] = useState(false);
  const [status, setStatus] = useState(false);
  const show = useSelector((state) => state.modal.showEditPage);
  const logoutHandler = () => {
    alert("clicked");
    localStorage.removeItem("adminAccessToken");
    navigate("/admin");
    setIsAuth(false);
  };

  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.header}>
          <div className={styles.headerRight}>
            <AccountCircleIcon
              className={styles.icon}
              onClick={() => {
                setStatus(!status);
              }}
            />
            <span
              onClick={() => {
                setStatus(!status);
              }}
            >
              Admin
              <ArrowDropDownIcon />
            </span>
          </div>
          {status && (
            <div className={styles.menu}>
              <span onClick={logoutHandler}>Logout</span>
            </div>
          )}
        </div>
        <div className={styles.container}>
          <div className={styles.containerLeft}>
            <h1>
              <ViewWeekIcon className={styles.dicon} />
              GSP Dashboard
            </h1>
            <div className={styles.lists}>
              <li>
                <NavLink
                  to="dashboard"
                  className={styles.links}
                  style={({ isActive }) => ({
                    borderRight: isActive ? "3px solid #4c84ff" : "none",
                  })}
                >
                  <DashboardIcon className={styles.icon} /> DASHBOARD
                </NavLink>
              </li>

              <li>
                <a onClick={() => setShowDropDown(!showdropdown)}>
                  <CategoryIcon className={styles.icon} /> PRODUCTS{" "}
                  <ArrowDropDownIcon />
                </a>
              </li>
              {showdropdown && (
                <div className={styles.dropdown}>
                  <NavLink
                    to="products"
                    className={styles.dropdownlink}
                    style={({ isActive }) => ({
                      borderRight: isActive ? "3px solid #4c84ff" : "none",
                    })}
                  >
                    <CategoryIcon className={styles.icon} /> View Products
                  </NavLink>
                  <NavLink
                    style={({ isActive }) => ({
                      borderRight: isActive ? "3px solid #4c84ff" : "none",
                    })}
                    to="addproduct"
                    className={styles.dropdownlink}
                  >
                    <CategoryIcon className={styles.icon} /> Add Products
                  </NavLink>
                </div>
              )}
              <li>
                <NavLink
                  to="orders"
                  style={({ isActive }) => ({
                    borderRight: isActive ? "3px solid #4c84ff" : "none",
                  })}
                >
                  <ShoppingCartIcon className={styles.icon} /> ORDERS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="customers"
                  style={({ isActive }) => ({
                    borderRight: isActive ? "3px solid #4c84ff" : "none",
                  })}
                >
                  <FaceRetouchingNaturalIcon className={styles.icon} />{" "}
                  CUSTOMERS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="statistics"
                  style={({ isActive }) => ({
                    borderRight: isActive ? "3px solid #4c84ff" : "none",
                  })}
                >
                  <BarChartIcon className={styles.icon} /> STATISTICS
                </NavLink>
              </li>
            </div>
          </div>
          <div className={styles.Outlet}>
            <Outlet />
          </div>
        </div>
        {show && <div className={styles.Cover}></div>}
      </div>
    </>
  );
}

export default AdminDashboard;
