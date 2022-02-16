import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductDescription.module.css";
import image from "../../images/catRing.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "aos/dist/aos.css";
import Aos from "aos";

function ProductDescription() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [rate, setRate] = useState({});

  const rateCalculation = (weightWithLoss, charge) => {
    const rate = (95000 / 100) * weightWithLoss + charge;
    return rate;
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3001/product/byProductId/${id}`)
      .then((response) => {
        if (response.error) {
          console.log(response.error.data);
        } else {
          setProduct(response.data);
        }
      });
    Aos.init({
      offset: 100,
      duration: 1000,
    });
  }, []);
  console.log(product);
  return (
    <div className={styles.productSection}>
      <div className={styles.container}>
        <div className={styles.image} data-aos="fade-right">
          <img src={image} />
        </div>
        <div className={styles.description} data-aos="fade-left">
          <h1 className={styles.shoptitle}>GALYANG GOLD AND SILVER SHOP</h1>

          <h2>{product.ProductName}</h2>
          <div className={styles.productDetails}>
            <h3>Product Description</h3>
            <span>Purity: {product.Carat ? product.Carat : "100%pure"}</span>
            <span>Weight(in Tola): {product.NetWeight}</span>
            <span>
              Price:{" "}
              <span className={styles.price}>
                Rs {rateCalculation(product.WeightWithLoss, 2000)}
              </span>
            </span>
            <div>
              <span className={styles.Quantity}>
                Quantity:{" "}
                <select
                  id="select"
                  //   ref={For}
                  name="Quantity"
                  className={styles.carat}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </span>
            </div>
            <button className={styles.cartButton}>
              Add To Cart <ShoppingCartIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;