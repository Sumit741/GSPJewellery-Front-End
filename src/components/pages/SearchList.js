import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import styles from "./SearchList.module.css";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import image from "../../images/catBangles.jpg";
import "aos/dist/aos.css";
import Aos from "aos";
import axios from "axios";
import { searchActions } from "../store/search";
import ReportIcon from "@mui/icons-material/Report";

function SearchList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.search.keyword);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Aos.init(
      {
        offset: 100,
        duration: 1000,
      },
      []
    );
    setSearchParams({ keyword: keyword });
    axios
      .post(`http://localhost:3001/product/search`, { text: keyword })
      .then((response) => {
        setProducts(response.data);
      });
  }, [keyword]);
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 12;
  const productShown = pageNumber * productPerPage;
  const pageCount = Math.ceil(products.length / productPerPage);
  const pageChangeHandler = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className={styles.containerRight}>
      {products.length > 0 ? (
        <>
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
                    <span>Rs 22,500</span> <span>| </span>
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
          />{" "}
        </>
      ) : (
        <div className={styles.errorSection}>
          <div className={styles.errorContainer}>
            <h1>
              Product Not Found <ReportIcon className={styles.errorIcon} />
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchList;
