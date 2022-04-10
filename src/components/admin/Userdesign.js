import React, { useState, useEffect } from "react";
import styles from "./Userdesign.module.css";
import axios from "axios";
import ReactPaginate from "react-paginate";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";
import "aos/dist/aos.css";
import Aos from "aos";
import { useDispatch } from "react-redux";
import { navActions } from "../store/ShowNavbar";
import { FcBusinessman, FcFeedback, FcSms } from "react-icons/fc";

function Userdesign() {
  const [designlist, setDesignList] = useState([]);
  const [link, setLink] = useState("");
  const [show, setShow] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("http://localhost:3001/userdesign").then((response) => {
      console.log(response.data);
      const data = response.data.sort((a, b) => {
        if (a > b) {
          return 1;
        } else {
          return -1;
        }
      });
      setDesignList(data);
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
    dispatch(navActions.setStatusFalse());
  };

  const [userDet, setUserDet] = useState({});
  const displayUserInfo = (userDet) => {
    setUserDet(userDet);
    setShowUserInfo(true);
    dispatch(navActions.setStatusFalse());
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
                <span
                  onClick={() => {
                    displayUserInfo({
                      Username: item.Username,
                      Email: item.Email,
                      Note: item.Note,
                    });
                  }}
                >
                  Creator Information
                </span>
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
            dispatch(navActions.setStatusTrue());
          }}
        >
          <CloseIcon
            className={styles.CloseIcon}
            onClick={() => {
              setShow(false);
              dispatch(navActions.setStatusTrue());
            }}
          />
          <img src={link} data-aos="fade-down" />
        </div>
      )}

      {showUserInfo && (
        <div
          className={styles.uerInfo}
          onClick={() => {
            setShowUserInfo(false);
            dispatch(navActions.setStatusTrue());
          }}
        >
          <CloseIcon
            className={styles.CloseIcon}
            onClick={() => {
              setShowUserInfo(false);
              dispatch(navActions.setStatusTrue());
            }}
          />
          <div className={styles.userInfoCard} data-aos="fade-down">
            <span>
              <FcBusinessman className={styles.icon} />
              {userDet.Username}
            </span>
            <span>
              <FcFeedback className={styles.icon} />
              {userDet.Email}
            </span>
            <span>
              <FcSms className={styles.icon} />
              User's Note: {userDet.Note}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Userdesign;
