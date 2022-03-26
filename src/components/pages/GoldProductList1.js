import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import styles from "./GoldProductList.module.css";
import { useNavigate, useParams } from "react-router-dom";
import image from "../../images/catBangles.jpg";
import "aos/dist/aos.css";
import Aos from "aos";

function GoldProductList1({ products }) {
  useEffect(() => {
    Aos.init(
      {
        offset: 100,
        duration: 1000,
      },
      []
    );
  }, []);
  const navigate = useNavigate();
  //   const products = useSelector((state) => state.product.listofGoldProducts);
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 12;
  const productShown = pageNumber * productPerPage;
  const pageCount = Math.ceil(products.length / productPerPage);
  const pageChangeHandler = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className={styles.containerRight}>
      <div className={styles.products}>
        {products
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
              <div className={styles.description}>
                <span>Rs 22,500</span> <span> | </span>
                <span>Weight: {product.NetWeight} lal</span>
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
  );
}

export default GoldProductList1;
