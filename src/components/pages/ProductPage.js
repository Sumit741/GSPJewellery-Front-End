import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { productActions } from "../store/Products";
import styles from "./ProductPage.module.css";
import image from "../../images/catChain.jpg";
import "aos/dist/aos.css";
import Aos from "aos";
import ReactPaginate from "react-paginate";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ProductPage() {
  const navigate = useNavigate();
  const { category } = useParams();
  const dispatch = useDispatch();
  const listOfProducts = useSelector((state) => state.product.listOfProducts);

  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 12;
  const productShown = pageNumber * productPerPage;
  const pageCount = Math.ceil(listOfProducts.length / productPerPage);
  const pageChangeHandler = ({ selected }) => {
    setPageNumber(selected);
  };
  const backIconClickHandler = () => {
    var element = document.querySelector(".containerLeftCopy");
    element.classList.remove("toggler");
  };
  const forwardIconClickHandler = () => {
    var element = document.querySelector(".containerLeftCopy");
    element.classList.add("toggler");
  };
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
    axios
      .get(`http://localhost:3001/product/byCategory/${category}`)
      .then((response) => {
        if (response.data.error) {
          dispatch(productActions.setToInitialState());
        } else {
          dispatch(
            productActions.setListOfProducts({ listOfProducts: response.data })
          );
        }
      });

    Aos.init(
      {
        offset: 100,
        duration: 1000,
      },
      []
    );
  }, []);

  const FOR = useRef();
  const ELEMENT = useRef();
  const CARAT = useRef();

  const rate = useSelector((state) => state.rate.rateDetails);
  const priceCalculator = (weight, charge, element) => {
    const goldRate = parseInt(rate.rate?.fineGold);
    const silverRate = parseInt(rate.rate?.silver);

    if (element === "gold") {
      const finalPrice = (goldRate / 100) * weight + charge;
      return finalPrice;
    }

    if (element === "silver") {
      const finalPrice = (silverRate / 100) * weight + charge;
      return finalPrice;
    }
  };

  const [status, setStatus] = useState(false);
  const elementChangeHander = () => {
    ELEMENT.current.value === "gold" ? setStatus(true) : setStatus(false);
  };

  const forChangeHander = () => {};

  const caratChangeHandler = () => {};
  return (
    <div className={styles.container}>
      <div className={`${styles.containerLeft} containerLeftCopy`}>
        <h2>For</h2>
        <select ref={FOR} onChange={forChangeHander}>
          <option value="select">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="both">Both</option>
          <option value="child">Child</option>
        </select>
        <h2>Element</h2>
        <select ref={ELEMENT} onChange={elementChangeHander}>
          <option value="select">Select</option>
          <option value="gold">Gold</option>
          <option value="silver">silver</option>
        </select>
        {status && (
          <>
            <h2>Carat</h2>
            <select ref={CARAT} onChange={caratChangeHandler}>
              <option value="select">Select</option>
              <option value="24KT">24KT</option>
              <option value="22KT">22KT</option>
            </select>
          </>
        )}

        <ArrowBackIcon
          className={styles.backIcon}
          onClick={backIconClickHandler}
        />
      </div>
      <ArrowForwardIcon
        className={styles.forwardIcon}
        onClick={forwardIconClickHandler}
      />
      <div className={styles.containerRight}>
        <div className={styles.products}>
          {listOfProducts
            .slice(productShown, productShown + productPerPage)
            .map((product) => (
              <div
                key={product.id}
                className={styles.individualProduct}
                data-aos="fade-down"
                onClick={() => {
                  navigate(`/product/${product.id}`);
                }}
              >
                <img src={image} />
                <h4>{product.ProductName}</h4>
                <div className={styles.generalInfo}>
                  <div className={styles.description}>
                    <span>
                      Rs{" "}
                      {priceCalculator(
                        product.WeightWithLoss,
                        product.Charge,
                        product.ElementType
                      )}{" "}
                    </span>{" "}
                    <span>| </span>
                    <span>Weight: {product.NetWeight} lal</span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <ReactPaginate
          previousLabel={"<<"}
          containerClassName={styles.pagination}
          nextLabel={">>"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          pageClassName={styles.container}
          pageLinkClassName={styles.links}
          previousClassName={styles.container}
          previousLinkClassName={styles.links}
          nextClassName={styles.container}
          nextLinkClassName={styles.links}
          breakClassName={""}
          breakLinkClassName={styles.links}
          activeClassName={styles.activeClass}
          onPageChange={pageChangeHandler}
        />
      </div>
    </div>
  );
}

export default ProductPage;
