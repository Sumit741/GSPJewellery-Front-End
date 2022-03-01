import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.css";
import CancelIcon from "@mui/icons-material/Cancel";
import image from "../../images/catChain.jpg";
import { cartActions } from "../store/Cart";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  useState(() => {
    localStorage.setItem("cartItem", { cartItems });
  }, [cartItems]);

  //function for adding  the cart items
  const cartIncreaseHandler = (id) => {
    dispatch(cartActions.cartIncreaseHandler({ productId: id }));
    console.log(id);
  };

  //function for subtracting the cart items
  const cartDecreaseHandler = (id) => {
    dispatch(cartActions.cartDecreaseHandler({ productId: id }));
    console.log(id);
  };

  //function to remove selected item from cart
  const cartRemoveHandler = (id) => {
    dispatch(cartActions.removeItemFromCart({ productId: id }));
  };
  return (
    <>
      {cartItems.length > 0 ? (
        <div className={styles.container}>
          {cartItems.map((item, index) => (
            <div className={styles.cartContainer} key={index}>
              <img src={image} alt="chain.jpg" />
              <span>{item.productName}</span>
              <span>{item.price}</span>
              <span className={styles.quantity}>
                Quantity:{" "}
                <span
                  className={styles.btn}
                  onClick={() => {
                    cartDecreaseHandler(item.productId);
                  }}
                >
                  -
                </span>
                {item.quantity}
                <span
                  className={styles.btn}
                  onClick={() => {
                    cartIncreaseHandler(item.productId);
                  }}
                >
                  +
                </span>
              </span>
              <CancelIcon
                className={styles.remove}
                onClick={() => {
                  cartRemoveHandler(item.productId);
                }}
              />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1>nothing</h1>
        </div>
      )}
    </>
  );
}

export default Cart;
