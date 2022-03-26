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
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./components/store/LoginAuthentication";
import Orders from "./components/admin/Orders";
import MainPage from "./components/admin/MainPage";
import { Navigation } from "swiper";
import AddProduct from "./components/admin/AddProduct";
import ProductPage from "./components/pages/ProductPage";
import ProductDescription from "./components/pages/ProductDescription";
import Productlist from "./components/admin/Productlist";
import EditPage from "./components/admin/EditPage";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import GoldProduct1 from "./components/pages/GoldProduct1";
import SilverProduct1 from "./components/pages/SilverProduct1";
import { cartActions } from "./components/store/Cart";
import Checkout from "./components/pages/Checkout";
import GoldProductList1 from "./components/pages/GoldProductList1";
import SearchList from "./components/pages/SearchList";
import Customers from "./components/admin/Customers";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      dispatch(authActions.setAuthenticationTrue());
    } else {
      dispatch(authActions.setAuthenticationFalse());
    }

    dispatch(cartActions.setTotalQuantityInitially());
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admindashboard" element={<AdminDashboard />}>
            <Route path="dashboard" element={<MainPage />} />
            <Route path="products" element={<Productlist />}>
              <Route path="edit/:id" element={<EditPage />} />
            </Route>
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
          </Route>
          {/* <Route path="gold" element={<GoldItem />}>
            <Route
              path="goldcategory/:category"
              element={<GoldProductList />}
            />
          </Route> */}
          <Route path="/gold" element={<GoldProduct1 />} />
          <Route path="/silver" element={<SilverProduct1 />} />
          <Route path="/search" element={<SearchList />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* <Route path="silver" element={<SilverItem />}>
            <Route
              path="silvercategory/:category"
              element={<SilverProductList />}
            />
          </Route> */}

          <Route path="/category/:category" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDescription />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="*" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
