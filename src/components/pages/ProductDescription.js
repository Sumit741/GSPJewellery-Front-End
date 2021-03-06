import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductDescription.module.css";
import image from "../../images/catRing.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "aos/dist/aos.css";
import Aos from "aos";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/Cart";

function ProductDescription() {
  //getting if for the url parameter
  const { id } = useParams();
  const Quantity = useRef();
  const [product, setProduct] = useState({});
  // const [rate, setRate] = useState({});
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.cart.cartProducts);
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
  //useeffect for loading the product for the one time when the page loads
  useEffect(() => {
    axios
      .get(`http://localhost:3001/product/byProductId/${id}`)
      .then((response) => {
        if (response.error) {
          console.log(response.error.data);
        } else {
          setProduct(response.data);
          // console.log(response.data);
        }
      });

    //initializing aos for animation
    Aos.init({
      offset: 100,
      duration: 1000,
    });

    Quantity.current.value = 1;
  }, []);

  //function to add products to cart
  const cartButtonHandler = () => {
    dispatch(
      cartActions.addToCart({
        productId: product.id,
        ProductName: product.ProductName,
        NetWeight: product.NetWeight,
        Element: product.ElementType,
        Category: product.ProductCategory,
        price: priceCalculator(
          product.WeightWithLoss,
          product.Charge,
          product.ElementType
        ),
        quantity: parseInt(Quantity.current.value),
      })
    );
  };

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
            <span>Weight(in Lal): {product.NetWeight}</span>
            <span>
              Price:{" "}
              <span className={styles.price}>
                Rs{" "}
                {priceCalculator(
                  product.WeightWithLoss,
                  product.Charge,
                  product.ElementType
                )}
              </span>
            </span>
            <div>
              <span className={styles.Quantity}>
                Quantity:{" "}
                <select
                  id="select"
                  ref={Quantity}
                  name="Quantity"
                  className={styles.itemsnumber}
                >
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
            <button className={styles.cartButton} onClick={cartButtonHandler}>
              Add To Cart <ShoppingCartIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
