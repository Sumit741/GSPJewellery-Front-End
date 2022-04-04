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
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { FcBusinessman } from "react-icons/fc";
import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import { FcFeedback } from "react-icons/fc";
import CloseIcon from "@mui/icons-material/Close";
import Rating from "@mui/material/Rating";

function ProductDescription() {
  //getting if for the url parameter
  const { id } = useParams();
  const Quantity = useRef();
  const [product, setProduct] = useState({});
  const [rate, setRate] = useState({});
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.cart.cartProducts);

  const rateCalculation = (weightWithLoss, charge) => {
    const rate = (95000 / 100) * weightWithLoss + charge;
    return rate;
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
          console.log(response.data);
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
        price: 20000,
        quantity: parseInt(Quantity.current.value),
      })
    );
  };
  const [status, setStatus] = useState(false);
  const [value, setValue] = useState(0);
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
                Rs {rateCalculation(product.WeightWithLoss, 2000)}
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
      <h2 className={styles.feedbacktitle}>Customer Feedbacks</h2>

      <div className={styles.feedbackSection}>
        <div>
          <div className={styles.feedback}>
            <BsFillChatLeftQuoteFill className={styles.quote} />
            <FcBusinessman className={styles.icon} />
            <h3>Hari Pandey</h3>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              className={styles.rating}
            />
            <span>
              lorem dfnsnjkskjkjfkdhdfh lorem dfnsnjkskjkjfkdhdfh lorem
              dfnsnjkskjkjfkdhdfh lorem dfnsnjkskjkjfkdhdfh lorem
              dfnsnjkskjkjfkdhdfh lorem dfnsnjkskjkjfkdhdfh loremasfssaf
              dfnsnjkskjkjfkdhdfh lorem dfnsnjkskjkjfkdhdfh loremasfssaf
              dfnsnjkskjkjfkdhdfh lorem dfnsnjkskjkjfkdhdfh loremasfssaf
            </span>
          </div>
          <div className={styles.feedback}>
            <BsFillChatLeftQuoteFill className={styles.quote} />
            <FcBusinessman className={styles.icon} />
            <h3>Hari Pandey</h3>
            <span>
              lorem dfnsnjkskjkjfkdhdfh lorem dfnsnjkskjkjfkdhdfh lorem
              dfnsnjkskjkjfkdhdfh lorem dfnsnjkskjkjfkdhdfh lorem
              dfnsnjkskjkjfkdhdfh lorem dfnsnjkskjkjfkdhdfh loremasfssaf
              dfnsnjkskjkjfkdhdfh lorem dfnsnjkskjkjfkdhdfh loremasfssaf
              dfnsnjkskjkjfkdhdfh lorem dfnsnjkskjkjfkdhdfh loremasfssaf
            </span>
          </div>
          <div className={styles.feedback}>
            <BsFillChatLeftQuoteFill className={styles.quote} />
            <FcBusinessman className={styles.icon} />
            <h3>Hari Pandey</h3>
            <span>
              lorem dfnsnjkskjkjfkdhdfh lorem dfnsnjkskjkjfkdhdfh lorem
              dfnsnjkskjkjfkdhdfh lorem dfnsnjkskjkjfkdhdfh lorem
              dfnsnjkskjkjfkdhdfh lorem dfnsnjkskjkjfkdhdfh loremasfssaf
              dfnsnjkskjkjfkdhdfh lorem dfnsnjkskjkjfkdhdfh loremasfssaf
              dfnsnjkskjkjfkdhdfh lorem dfnsnjkskjkjfkdhdfh loremasfssaf
            </span>
          </div>
        </div>
      </div>
      <button
        className={styles.btnFeedback}
        onClick={() => {
          setStatus(true);
        }}
      >
        GIVE FEEDBACK <FcFeedback className={styles.i} />
      </button>
      {status && (
        <div className={styles.feedbackform}>
          <form data-aos="fade-down">
            <CloseIcon
              className={styles.closeIcon}
              onClick={() => {
                setStatus(false);
              }}
            />
            <span>FEEDBACK</span>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea type="text" resize="none" placeholder="Feedback" />
            <button>Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ProductDescription;
