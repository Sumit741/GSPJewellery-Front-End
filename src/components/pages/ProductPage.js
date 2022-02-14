import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productActions } from "../store/Products";
import styles from "./ProductPage.module.css";
import image from "../../images/catChain.jpg";
import "aos/dist/aos.css";
import Aos from "aos";

function ProductPage() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const listOfProducts = useSelector((state) => state.product.listOfProducts);

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
        <div className={styles.individualProduct} data-aos="fade-up">
          <img src={image} />
          <h4>Gold Necklace</h4>
          <span>Rs 22,500</span>
        </div>
        <div className={styles.individualProduct} data-aos="fade-up">
          <img src={image} />
          <h4>Gold Necklace</h4>
          <span>Rs 22,500</span>
        </div>
        <div className={styles.individualProduct} data-aos="fade-up">
          <img src={image} />
          <h4>Gold Necklace</h4>
          <span>Rs 22,500</span>
        </div>
        <div className={styles.individualProduct} data-aos="fade-up">
          <img src={image} />
          <h4>Gold Necklace</h4>
          <span>Rs 22,520</span>
        </div>
        <div className={styles.individualProduct} data-aos="fade-up">
          <img src={image} />
          <h4>Gold Necklace</h4>
          <span>Rs 22,500</span>
        </div>
        <div className={styles.individualProduct} data-aos="fade-up">
          <img src={image} />
          <h4>Gold Necklace</h4>
          <span>Rs 22,500</span>
        </div>
        <div className={styles.individualProduct} data-aos="fade-up">
          <img src={image} />
          <h4>Gold Necklace</h4>
          <span>Rs 22,500</span>
        </div>
        <div className={styles.individualProduct} data-aos="fade-up">
          <img src={image} />
          <h4>Gold Necklace</h4>
          <span>Rs 22,500</span>
        </div>
        <div className={styles.individualProduct} data-aos="fade-up">
          <img src={image} />
          <h4>Gold Necklace</h4>
          <span>Rs 22,500</span>
        </div>
        <div className={styles.individualProduct} data-aos="fade-up">
          <img src={image} />
          <h4>Gold Necklace</h4>
          <span>Rs 22,500</span>
        </div>
      </div>
      {/* {listOfProducts.map((item) => (
        <div key={item.id} className={styles.containerRight}>
          <h1>{item.ElementType}</h1>
          <h1>{item.Category}</h1>
          <h1>{item.For}</h1>
          <h1>{item.NetWeight}</h1>
        </div>
      ))} */}
    </div>
  );
}

export default ProductPage;
