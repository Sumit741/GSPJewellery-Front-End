import React, { useEffect, useRef, useState } from "react";
import styles from "./Checkout.module.css";
import Checkbox from "@mui/material/Checkbox";
import AddCardIcon from "@mui/icons-material/AddCard";
import "aos/dist/aos.css";
import Aos from "aos";
import axios from "axios";

function Checkout() {
  const items = JSON.parse(localStorage.getItem("cart"));
  let amount = 0;
  const totalAmount = items.map((item) => (amount += item.price));
  const fname = useRef();
  const username = useRef();
  const email = useRef();
  const address = useRef();
  const country = useRef();
  const state = useRef();
  const zipcode = useRef();
  const [checked, setChecked] = useState();
  const [userDet, setUserDet] = useState({});

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 1000,
    });
    axios
      .get("http://localhost:3001/user/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setUserDet(response.data);
        fname.current.value = response.data.Fullname;
        username.current.value = response.data.Username;
        email.current.value = response.data.Email;
        address.current.value = response.data.Address;
      });
  }, []);

  const checkHandler = () => {
    setChecked(!checked);
  };

  const checkOutHandler = () => {
    console.log(items);
    items.map((item) => {
      axios
        .post("http://localhost:3001/orders", {
          UserId: userDet.id,
          Customername: fname.current.value,
          OrderAddress:
            address.current.value +
            "," +
            state.current.value +
            "," +
            zipcode.current.value,
          unitPrice: item.price / item.quantity,
          Quantity: item.quantity,
          TotalPrice: item.price,
          PaymentOption: checked ? "cash on delivery" : "esewa",
          PaymentStatus: checked ? "unpaid" : "paid",
          OrderStatus: "pending",
          ProductId: item.productId,
        })
        .then((response) => {
          console.log(response.data);
        });
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formSection} data-aos="fade-down">
        <h4>Billing Address</h4>
        <form>
          <div className={styles.names}>
            <div>
              <label>Full Name</label>
              <input type="text" placeholder="Your Full Name" ref={fname} />
            </div>
          </div>
          <div className={styles.username}>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter Your Username"
              ref={username}
            />
          </div>
          <div className={styles.username}>
            <label>Email</label>
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
      <div className={styles.cartProducts} data-aos="fade-down">
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
