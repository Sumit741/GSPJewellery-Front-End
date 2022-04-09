import React, { useState, useEffect } from "react";
import styles from "./Userdesign.module.css";
import axios from "axios";
import ReactPaginate from "react-paginate";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";
import "aos/dist/aos.css";
import Aos from "aos";

function Userdesign() {
  const [designlist, setDesignList] = useState([]);
  const [link, setLink] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:3001/userdesign").then((response) => {
      console.log(response.data);
      setDesignList(response.data);
    });
    Aos.init({
      offset: 100,
      duration: 500,
    });
  }, []);
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerpage = 6;
  const productsShown = pageNumber * productsPerpage;
  const pageCount = Math.ceil(designlist.length / productsPerpage);
  const pageChangeHandler = ({ selected }) => {
    setPageNumber(selected);
  };

  const previewHandler = (link) => {
    setLink(link);
    setShow(true);
  };
  return (
    <div className={styles.container}>
      <div className={styles.containerTop}>
        {designlist
          .slice(productsShown, productsPerpage + productsShown)
          .map((item, index) => (
            <div key={index} className={styles.imagecontainer}>
              <img src={item.Link} />
              <div className={styles.overlay}>
                <VisibilityIcon
                  className={styles.previewIcon}
                  onClick={() => {
                    previewHandler(item.Link);
                  }}
                />
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
      {show && (
        <div
          className={styles.previewImage}
          onClick={() => {
            setShow(false);
          }}
        >
          <CloseIcon
            className={styles.CloseIcon}
            onClick={() => {
              setShow(false);
            }}
          />
          <img src={link} data-aos="fade-down" />
        </div>
      )}
    </div>
  );
}

export default Userdesign;
