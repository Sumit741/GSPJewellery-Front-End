import React, { useRef, useState } from "react";
import styles from "./Checkout.module.css";
import Checkbox from "@mui/material/Checkbox";
import AddCardIcon from "@mui/icons-material/AddCard";

function Checkout() {
  const items = JSON.parse(localStorage.getItem("cart"));
  let amount = 0;
  const totalAmount = items.map((item) => (amount += item.price));
  const fname = useRef();
  const lname = useRef();
  const email = useRef();
  const address = useRef();
  const country = useRef();
  const state = useRef();
  const zipcode = useRef();
  const [checked, setChecked] = useState();

  const checkHandler = () => {
    setChecked(!checked);
  };

  const checkOutHandler = () => {
    // alert("Button Clicked");
  };

  return (
    <div className={styles.container}>
      <div className={styles.formSection}>
        <h4>Billing Address</h4>
        <form>
          <div className={styles.names}>
            <div>
              <label>First Name</label>
              <input type="text" placeholder="Your First Name" ref={fname} />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" placeholder="Your Last Name" ref={lname} />
            </div>
          </div>
          <div className={styles.username}>
            <label>Username</label>
            <input type="email" placeholder="name@gmail.com" ref={email} />
          </div>
          <div className={styles.username}>
            <label>Address</label>
            <input
              type="text"
              placeholder="Tokha-03, Kathmandu, Nepal"
              ref={address}
            />
          </div>
          <div className={styles.address}>
            <div>
              <label>Country</label>
              <input
                type="email"
                value="NEPAL"
                readOnly
                placeholder="name@gmail.com"
                ref={country}
              />
            </div>
            <div>
              <label>State</label>
              <input placeholder="state" ref={state} />
            </div>
            <div>
              <label>Zip Code</label>
              <input placeholder="zip" ref={zipcode} />
            </div>
          </div>
        </form>
        <div className={styles.payment}>
          <h4>Payment Options</h4>
          <div>
            <span>Please Select One Option</span>
          </div>
          <Checkbox className={styles.checkbox} /> <label>Pay with esewa</label>
          <Checkbox className={styles.checkbox} onClick={checkHandler} />{" "}
          <label>Cash On Delivery</label>
        </div>
        {checked && (
          <button onClick={checkOutHandler} className={styles.checkoutbtn}>
            <span>ORDER ITEM</span> <AddCardIcon />
          </button>
        )}
      </div>
      <div className={styles.divider}></div>
      <div className={styles.cartProducts}>
        <h4>Your Products</h4>
        {items.map((item) => (
          <div key={item.productId} className={styles.product}>
            <span>{item.ProductName}</span>
            <span>Rs {item.price}</span>
          </div>
        ))}
        <span className={styles.totalAmount}>
          TOTAL AMOUNT- <span>Rs {totalAmount.pop()}</span>
        </span>
      </div>
    </div>
  );
}

export default Checkout;
