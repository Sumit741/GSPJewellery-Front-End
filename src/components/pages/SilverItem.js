import React, { useEffect, useRef, useState } from "react";
import {
  Link,
  Outlet,
  useLinkClickHandler,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SilverItem.module.css";
import axios from "axios";
import { productActions } from "../store/Products";

function GoldItem() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category } = useParams();
  const [productList, setProductList] = useState([]);
  const FOR = useRef();
  let width = window.innerWidth;

  useEffect(() => {
    var element = document.querySelector(".containerLeftCopy");

    window.onresize = () => {
      if (window.innerWidth > 1320) {
        element.classList.remove("toggler");
      }
    };
  }, [width]);

  useEffect(() => {
    axios.get("http://localhost:3001/product").then((response) => {
      const listOfProducts = response.data.filter(
        (item) => item.ElementType === "silver"
      );
      setProductList(listOfProducts);
      dispatch(
        productActions.setListOfSilverProducts({
          products: [...listOfProducts],
        })
      );
    });
    navigate(`silvercategory/all`);
  }, []);
  const selectChangeHandler = () => {
    if (category === "all") {
      if (FOR.current.value === "select") {
        dispatch(
          productActions.setListOfSilverProducts({ products: [...productList] })
        );
      } else {
        const listOfProducts = productList.filter(
          (item) => item.For === FOR.current.value
        );
        dispatch(
          productActions.setListOfSilverProducts({
            products: [...listOfProducts],
          })
        );
      }
    } else {
      if (FOR.current.value === "select") {
        const listOfProducts = productList.filter(
          (item) => item.ProductCategory === category
        );
        dispatch(
          productActions.setListOfSilverProducts({
            products: [...listOfProducts],
          })
        );
      } else {
        const listOfProducts = productList.filter(
          (item) =>
            item.ProductCategory === category && item.For === FOR.current.value
        );
        dispatch(
          productActions.setListOfSilverProducts({
            products: [...listOfProducts],
          })
        );
      }
    }
  };

  const linkClickHandler = (category) => {
    FOR.current.value = "select";
    if (category === "all") {
      dispatch(
        productActions.setListOfSilverProducts({ products: [...productList] })
      );
    } else {
      const listOfProducts = productList.filter(
        (item) => item.ProductCategory === category
      );
      dispatch(
        productActions.setListOfSilverProducts({
          products: [...listOfProducts],
        })
      );
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <h3>For</h3>
        <select name="For" ref={FOR} onChange={selectChangeHandler}>
          <option value="select">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="child">child</option>
        </select>
        <div className={styles.category}>
          <h2>Category</h2>
          <div className={styles.categoryLinks}>
            <Link
              to="silvercategory/all"
              onClick={() => {
                linkClickHandler("all");
              }}
            >
              All Products
            </Link>
            <Link
              to="silvercategory/chains"
              onClick={() => {
                linkClickHandler("chains");
              }}
            >
              Chains
            </Link>
            <Link
              to="silvercategory/bracelet"
              onClick={() => {
                linkClickHandler("bracelet");
              }}
            >
              Bracelets
            </Link>
            <Link
              to="silvercategory/rings"
              onClick={() => {
                linkClickHandler("rings");
              }}
            >
              Rings
            </Link>
            <Link
              to="silvercategory/necklace"
              onClick={() => {
                linkClickHandler("necklace");
              }}
            >
              Necklaces
            </Link>
            <Link
              to="silvercategory/bangles"
              onClick={() => {
                linkClickHandler("bangles");
              }}
            >
              Bangles
            </Link>
            <Link
              to="silvercategory/earrings"
              onClick={() => {
                linkClickHandler("earrings");
              }}
            >
              Earrings
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
}

export default GoldItem;
