import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { productActions } from "../store/Products";
import styles from "./ProductPage.module.css";
import image from "../../images/catChain.jpg";
import "aos/dist/aos.css";
import Aos from "aos";
import ReactPaginate from "react-paginate";

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
  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <h2>Search Options</h2>
        <input type="number" />
      </div>
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
                  <span>Rs 22,500</span>
                  <span>{product.Carat}</span>
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
