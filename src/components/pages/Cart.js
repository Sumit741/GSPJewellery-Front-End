import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.css";
import CancelIcon from "@mui/icons-material/Cancel";
import image from "../../images/catChain.jpg";
import { cartActions } from "../store/Cart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const checkOutHandler = () => {
    if (localStorage.getItem("accessToken")) {
      navigate("/checkout");
    } else {
      alert("Please login first to proceed");
      navigate("/login");
    }
  };
  const items = JSON.parse(localStorage.getItem("cart"));
  return (
    <>
      {items ? (
        <div className={styles.container}>
          <table className={styles.cartTable}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={image} alt="chain.jpg" />
                    <div>
                      <span>{item.ProductName}</span>
                      <span>Net Weight - {item.NetWeight}</span>
                      <span>{item.Element}</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.quantitycart}>
                      <RemoveIcon
                        className={styles.btnleft}
                        onClick={() => {
                          cartDecreaseHandler(item.productId);
                        }}
                      />
                      <span>{item.quantity}</span>
                      <AddIcon
                        className={styles.btnright}
                        onClick={() => {
                          cartIncreaseHandler(item.productId);
                        }}
                      />
                    </div>
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <DeleteForeverIcon
                      onClick={() => {
                        cartRemoveHandler(item.productId);
                      }}
                      className={styles.deleteIcon}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={checkOutHandler}>
            Proceed To Checkout{" "}
            <ShoppingBasketIcon className={styles.shoppingBasketIcon} />
          </button>
        </div>
      ) : (
        <div className={styles.emptyMessage}>
          <h1>
            Your Cart is empty{" "}
            <RemoveShoppingCartIcon className={styles.icon} />
          </h1>
          <span>
            Back To Shop & <button>Continue Shopping</button>
          </span>
        </div>
      )}
    </>
  );
}

export default Cart;
