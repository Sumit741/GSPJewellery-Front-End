import "./App.css";
import Header from "./components/pages/Header";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useNavigate,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Cart from "./components/pages/Cart";
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import { useEffect, useState } from "react";
import Register from "./components/pages/Register";
import { useDispatch } from "react-redux";
import { authActions } from "./components/store/LoginAuthentication";
import Products from "./components/admin/Products";
import Orders from "./components/admin/Orders";
import Gold from "./components/admin/Gold";
import MainPage from "./components/admin/MainPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      dispatch(authActions.setAuthenticationTrue());
    } else {
      dispatch(authActions.setAuthenticationFalse());
    }
  });
  return (
    <div className="App" onClick={() => console.log("clicked")}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admindashboard" element={<AdminDashboard />}>
            <Route path="home" element={<MainPage />} />
            <Route path="products" element={<Products />}>
              <Route path="cat1" element={<Gold />} />
            </Route>
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
