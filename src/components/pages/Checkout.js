import React from "react";
import styles from "./Checkout.module.css";

function Checkout() {
  const items = JSON.parse(localStorage.getItem("cart"));
  let amount = 0;
  const totalAmount = items.map((item) => (amount += item.price));

  return (
    <div className={styles.container}>
      <div className={styles.formSection}>
        <h4>Billing Address</h4>
        <form>
          <div className={styles.names}>
            <div>
              <label>First Name</label>
              <input type="text" placeholder="Your First Name" />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" placeholder="Your Last Name" />
            </div>
          </div>
          <div className={styles.username}>
            <label>Username</label>
            <input type="email" placeholder="name@gmail.com" />
          </div>
          <div className={styles.username}>
            <label>Address</label>
            <input type="text" placeholder="Tokha-03, Kathmandu, Nepal" />
          </div>
          <div className={styles.address}>
            <div>
              <label>Country</label>
              <input
                type="email"
                value="NEPAL"
                readOnly
                placeholder="name@gmail.com"
              />
            </div>
            <div>
              <label>State</label>
              <input type="email" placeholder="state" />
            </div>
            <div>
              <label>Zip Code</label>
              <input type="email" placeholder="zip" />
            </div>
          </div>
        </form>
        <div className={styles.payment}>
          <h4>Payment Options</h4>
        </div>
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
        <span>TOTAL AMOUNT- {totalAmount.pop()}</span>
      </div>
    </div>
  );
}

export default Checkout;
