import React, { useEffect, useRef, useState } from "react";
import {
  Link,
  Outlet,
  useLinkClickHandler,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./GoldItem.module.css";
import axios from "axios";
import { productActions } from "../store/Products";
import { ref } from "yup";

function GoldItem() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category } = useParams();
  const [productList, setProductList] = useState([]);
  const FOR = useRef();

  useEffect(() => {
    axios.get("http://localhost:3001/product").then((response) => {
      const listOfProducts = response.data.filter(
        (item) => item.ElementType === "gold"
      );
      setProductList(listOfProducts);
      dispatch(
        productActions.setListOfGoldProducts({ products: [...listOfProducts] })
      );
    });
    navigate(`goldcategory/all`);
  }, []);
  console.log(productList);
  const linkClickHandler = (category) => {
    FOR.current.value = "select";
    if (category === "all") {
      dispatch(
        productActions.setListOfGoldProducts({ products: [...productList] })
      );
    } else {
      const listOfProducts = productList.filter(
        (item) => item.ProductCategory === category
      );
      dispatch(
        productActions.setListOfGoldProducts({ products: [...listOfProducts] })
      );
    }
  };

  const selectChangeHandler = () => {
    if (category === "all") {
      if (FOR.current.value === "select") {
        dispatch(
          productActions.setListOfGoldProducts({ products: [...productList] })
        );
      } else {
        const listOfProducts = productList.filter(
          (item) => item.For === FOR.current.value
        );
        dispatch(
          productActions.setListOfGoldProducts({
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
          productActions.setListOfGoldProducts({
            products: [...listOfProducts],
          })
        );
      } else {
        const listOfProducts = productList.filter(
          (item) =>
            item.ProductCategory === category && item.For === FOR.current.value
        );
        dispatch(
          productActions.setListOfGoldProducts({
            products: [...listOfProducts],
          })
        );
      }
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
              to="goldcategory/all"
              onClick={() => {
                linkClickHandler("all");
              }}
            >
              All Products
            </Link>
            <Link
              to="goldcategory/chains"
              onClick={() => {
                linkClickHandler("chains");
              }}
            >
              Chains
            </Link>
            <Link
              to="goldcategory/bracelet"
              onClick={() => {
                linkClickHandler("bracelet");
              }}
            >
              Bracelets
            </Link>
            <Link
              to="goldcategory/rings"
              onClick={() => {
                linkClickHandler("rings");
              }}
            >
              Rings
            </Link>
            <Link
              to="goldcategory/necklace"
              onClick={() => {
                linkClickHandler("necklace");
              }}
            >
              Necklaces
            </Link>
            <Link
              to="goldcategory/bangles"
              onClick={() => {
                linkClickHandler("bangles");
              }}
            >
              Bangles
            </Link>
            <Link
              to="goldcategory/earrings"
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
