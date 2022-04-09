import React, { useEffect, useRef, useState } from "react";
import {
  Link,
  Outlet,
  useLinkClickHandler,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./GoldItem.module.css";
import axios from "axios";
import { productActions } from "../store/Products";
import { ref } from "yup";
import GoldProductList1 from "./GoldProductList1";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function GoldProduct1() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const FOR = useRef();
  const CARAT = useRef();
  const [searchParams, setSearchParams] = useSearchParams();
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
    console.log("helloWorld");
    setSearchParams({ category: "all" });
    axios
      .get(
        "http://localhost:3001/product/filteritems?category=all&element=gold"
      )
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  const linkClickHandler = (value) => {
    setSearchParams({ category: value });
    FOR.current.value = "select";
    CARAT.current.value = "select";
    axios
      .get(
        `http://localhost:3001/product/filteritems?category=${value}&element=gold`
      )
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      });
  };
  // const selectChangeHandler = () => {
  //   if (FOR.current.value === "select") {
  //     setSearchParams({
  //       category: searchParams.get("category"),
  //     });
  //     axios
  //       .get(
  //         `http://localhost:3001/product/filteritems?category=${searchParams.get(
  //           "category"
  //         )}&element=gold`
  //       )
  //       .then((response) => {
  //         setProducts(response.data);
  //         console.log(response.data);
  //       });
  //     console.log(FOR.current.value);
  //   } else {
  //     setSearchParams({
  //       category: searchParams.get("category"),
  //       filter: FOR.current.value,
  //     });
  //     axios
  //       .get(
  //         `http://localhost:3001/product/filteritems?category=${searchParams.get(
  //           "category"
  //         )}&filter=${FOR.current.value}&element=gold`
  //       )
  //       .then((response) => {
  //         setProducts(response.data);
  //         console.log(response.data);
  //       });
  //   }
  // };
  const selectChangeHandler = () => {
    if (FOR.current.value === "select" && CARAT.current.value === "select") {
      setSearchParams({
        category: searchParams.get("category"),
      });
      axios
        .get(
          `http://localhost:3001/product/ft?category=${searchParams.get(
            "category"
          )}&element=gold`
        )
        .then((response) => {
          setProducts(response.data);
          console.log(response.data);
        });
    } else if (
      FOR.current.value === "select" &&
      CARAT.current.value !== "select"
    ) {
      setSearchParams({
        category: searchParams.get("category"),
        carat: searchParams.get("carat"),
      });
      axios
        .get(
          `http://localhost:3001/product/ft?category=${searchParams.get(
            "category"
          )}&carat=${searchParams.get("carat")}&element=gold`
        )
        .then((response) => {
          setProducts(response.data);
          console.log(response.data);
        });
      console.log(FOR.current.value);
    } else if (
      FOR.current.value !== "select" &&
      CARAT.current.value === "select"
    ) {
      setSearchParams({
        category: searchParams.get("category"),
        filter: FOR.current.value,
      });
      axios
        .get(
          `http://localhost:3001/product/ft?category=${searchParams.get(
            "category"
          )}&filter=${FOR.current.value}&element=gold`
        )
        .then((response) => {
          setProducts(response.data);
          console.log(response.data);
        });
    } else {
      setSearchParams({
        category: searchParams.get("category"),
        carat: searchParams.get("carat"),
        filter: FOR.current.value,
      });
      axios
        .get(
          `http://localhost:3001/product/ft?category=${searchParams.get(
            "category"
          )}&carat=${searchParams.get("carat")}&filter=${
            FOR.current.value
          }&element=gold`
        )
        .then((response) => {
          setProducts(response.data);
          console.log(response.data);
        });
    }
  };

  const caratHandler = () => {
    if (FOR.current.value === "select" && CARAT.current.value === "select") {
      setSearchParams({
        category: searchParams.get("category"),
      });
      axios
        .get(
          `http://localhost:3001/product/ft?category=${searchParams.get(
            "category"
          )}&element=gold`
        )
        .then((response) => {
          setProducts(response.data);
          console.log(response.data);
        });
    } else if (
      FOR.current.value !== "select" &&
      CARAT.current.value === "select"
    ) {
      setSearchParams({
        category: searchParams.get("category"),
        filter: searchParams.get("filter"),
      });
      axios
        .get(
          `http://localhost:3001/product/ft?category=${searchParams.get(
            "category"
          )}&filter=${searchParams.get("filter")}&element=gold`
        )
        .then((response) => {
          setProducts(response.data);
          console.log(response.data);
        });
      console.log(FOR.current.value);
    } else if (
      FOR.current.value === "select" &&
      CARAT.current.value !== "select"
    ) {
      setSearchParams({
        category: searchParams.get("category"),
        carat: CARAT.current.value,
      });
      console.log("f!");
      axios
        .get(
          `http://localhost:3001/product/ft?category=${searchParams.get(
            "category"
          )}&carat=${CARAT.current.value}&element=gold`
        )
        .then((response) => {
          setProducts(response.data);
          console.log(response.data);
        });
    } else {
      setSearchParams({
        category: searchParams.get("category"),
        filter: searchParams.get("filter"),
        carat: CARAT.current.value,
      });
      axios
        .get(
          `http://localhost:3001/product/ft?category=${searchParams.get(
            "category"
          )}&filter=${searchParams.get("filter")}&carat=${
            CARAT.current.value
          }&element=gold`
        )
        .then((response) => {
          setProducts(response.data);
          console.log(response.data);
        });
    }
  };
  const forwardIconClickHandler = () => {
    var element = document.querySelector(".containerLeftCopy");
    element.classList.add("toggler");
  };
  const backIconClickHandler = () => {
    var element = document.querySelector(".containerLeftCopy");
    element.classList.remove("toggler");
  };
  return (
    <div className={styles.container}>
      <div className={`${styles.containerLeft} containerLeftCopy`}>
        <ArrowBackIcon
          className={styles.backIcon}
          onClick={backIconClickHandler}
        />
        <h3>For</h3>
        <select name="For" ref={FOR} onChange={selectChangeHandler}>
          <option value="select">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="child">child</option>
        </select>
        <h3 style={{ marginLeft: "20px" }}>Carat</h3>
        <select name="Carat" ref={CARAT} onChange={caratHandler}>
          <option value="select">Select</option>
          <option value="24KT">24KT</option>
          <option value="22KT">22KT</option>
        </select>
        <div className={styles.category}>
          <h2>Category</h2>
          <div className={styles.categoryLinks}>
            <a
              onClick={() => {
                linkClickHandler("all");
              }}
            >
              All Products
            </a>
            <a
              onClick={() => {
                linkClickHandler("chains");
              }}
            >
              Chains
            </a>
            <a
              onClick={() => {
                linkClickHandler("bracelet");
              }}
            >
              Bracelets
            </a>
            <a
              onClick={() => {
                linkClickHandler("rings");
              }}
            >
              Rings
            </a>
            <a
              onClick={() => {
                linkClickHandler("necklace");
              }}
            >
              Necklaces
            </a>
            <a
              onClick={() => {
                linkClickHandler("bangles");
              }}
            >
              Bangles
            </a>
            <a
              onClick={() => {
                linkClickHandler("earrings");
              }}
            >
              Earrings
            </a>
          </div>
        </div>
      </div>
      <ArrowForwardIcon
        className={styles.forwardIcon}
        onClick={forwardIconClickHandler}
      />
      <div className={styles.outlet}>
        <GoldProductList1 products={products} />
      </div>
    </div>
  );
}

export default GoldProduct1;
