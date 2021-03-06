import React, { useEffect, useRef, useState } from "react";
import styles from "./Checkout.module.css";
import Checkbox from "@mui/material/Checkbox";
import AddCardIcon from "@mui/icons-material/AddCard";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import Aos from "aos";
import axios from "axios";
import emailjs from "@emailjs/browser";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../store/Cart";
import QR from "../../images/QR.jpg";
import Fonepay from "../../images/fonepaylogo.png";

function Checkout() {
  const navigate = useNavigate();
  const items = JSON.parse(localStorage.getItem("cart"));
  const dispatch = useDispatch();
  let amount = 0;
  const totalAmount = items.map((item) => (amount += item.price));
  const fname = useRef();
  const fname1 = useRef();
  const username = useRef();
  const email = useRef();
  const email1 = useRef();
  const address = useRef();
  const country = useRef();
  const state = useRef();
  const zipcode = useRef();
  const [checked, setChecked] = useState();
  const [userDet, setUserDet] = useState({});
  const mailorderaddress = useRef();
  const form = useRef();
  const form2 = useRef();
  const [status, setStatus] = useState(false);
  const contact = useRef();

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
        console.log(response.data);
        mailorderaddress.current.value = response.data.Address;
        fname.current.value = response.data.Fullname;
        fname1.current.value = response.data.Fullname;
        username.current.value = response.data.Username;
        email.current.value = response.data.Email;
        email1.current.value = response.data.Email;
        address.current.value = response.data.Address;
      });
  }, []);

  const checkHandler = () => {
    setChecked(!checked);
  };

  const checkOutHandler = (e) => {
    e.preventDefault();
    mailorderaddress.current.value = `${address.current.value}, ${state.current.value}, ${zipcode.current.value}`;

    if (
      fname.current.value !== "" &&
      username.current.value !== "" &&
      email.current.value !== "" &&
      address.current.value !== "" &&
      state.current.value !== "" &&
      zipcode.current.value !== "" &&
      contact.current.value !== "" &&
      paymentOption !== ""
    ) {
      emailjs
        .sendForm(
          "service_3rlhzhb",
          "template_0tzrpoc",
          form.current,
          "HeTxv6APfWiKQ8iiE"
        )
        .then(
          (result) => {
            // alert("message sent");
          },
          (error) => {
            // alert("not sent");
          }
        );

      emailjs
        .sendForm(
          "service_jt0po3p",
          "template_rqqp92r",
          form2.current,
          "cHcfYMpja2R0rkuve"
        )
        .then(
          (result) => {
            // alert("message sent");
          },
          (error) => {
            // alert("not sent");
          }
        );
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
            Contact: contact.current.value,
            unitPrice: item.price / item.quantity,
            Quantity: item.quantity,
            TotalPrice: item.price,
            PaymentOption: paymentOption,
            PaymentStatus: paymentOption === "COD" ? "pending" : "paid",
            OrderStatus: "pending",
            ProductId: item.productId,
          })
          .then((response) => {
            console.log(response.data);
            setStatus(true);
            const emptyArr = [];
            localStorage.setItem("cart", JSON.stringify(emptyArr));
            dispatch(cartActions.setTotalQuantityInitially());
          });
      });
    } else {
      e.preventDefault();
      alert("Please check if there's any empty field");
    }
  };

  const hideOverlay = () => {
    setStatus(false);
    navigate("/");
  };

  var element1 = document.querySelector(".option1");
  var element2 = document.querySelector(".option2");
  var element3 = document.querySelector(".option3");
  const [paymentOption, setPaymentOption] = useState("");

  const element1BackgroundChange = () => {
    element1.classList.add("payment");
    element2.classList.remove("payment");
    element3.classList.remove("payment");
    setPaymentOption("COD");
    setChecked(true);
  };
  const element2BackgroundChange = () => {
    element1.classList.remove("payment");
    element2.classList.add("payment");
    element3.classList.remove("payment");
    setPaymentOption("Fonepay");
    setChecked(true);
    setShowQR(true);
  };
  const element3BackgroundChange = () => {
    element1.classList.remove("payment");
    element2.classList.remove("payment");
    element3.classList.add("payment");
    setPaymentOption("Esewa");
    setChecked(true);
  };
  const [showQR, setShowQR] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.formSection} data-aos="fade-down">
          <h4>Billing Address</h4>
          <form ref={form} onSubmit={checkOutHandler}>
            <div className={styles.names}>
              <div>
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  ref={fname}
                  name="to_name"
                />
              </div>
            </div>
            <div className={styles.username}>
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter Your Username"
                ref={username}
                name="to_name2"
              />
            </div>
            <div className={styles.username}>
              <label>Email</label>
              <input
                type="email"
                placeholder="name@gmail.com"
                ref={email}
                name="user_email"
              />
            </div>
            <div className={styles.username}>
              <label>Contact</label>
              <input
                type="text"
                placeholder="Contact Number"
                ref={contact}
                name="contact"
              />
            </div>
            <div className={styles.username}>
              <label>Address</label>
              <input
                type="text"
                placeholder="Tokha-03, Kathmandu, Nepal"
                ref={address}
                name="to_nam3"
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
                  name="to_nam4"
                />
              </div>
              <div>
                <label>State</label>
                <input placeholder="state" ref={state} name="to_name5" />
              </div>
              <div>
                <label>Zip Code</label>
                <input placeholder="zip" ref={zipcode} name="to_name4" />
              </div>
            </div>
            <div className={styles.payment}>
              <h4>Payment Options</h4>
              <div>
                <span>Please Select One Option</span>
              </div>
              <div className={styles.paymentOptions}>
                <div className="option1" onClick={element1BackgroundChange}>
                  Cash On Delivery
                </div>
                <div className="option2" onClick={element2BackgroundChange}>
                  Pay with Fonepay
                </div>
                <div className="option3" onClick={element3BackgroundChange}>
                  Pay with Esewa
                </div>
              </div>
              {/* <div>
                <Checkbox className={styles.checkbox} />{" "}
                <label>Pay with esewa</label>
              </div>
              <Checkbox className={styles.checkbox} />{" "}
              <label>Pay with esewa</label>
              <Checkbox
                className={styles.checkbox}
                onClick={checkHandler}
              />{" "}
              <label>Cash On Delivery</label> */}
            </div>
            {checked && (
              <button type="submit" className={styles.checkoutbtn}>
                <span>ORDER ITEM</span> <AddCardIcon />
              </button>
            )}
          </form>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.cartProducts} data-aos="fade-down">
          <h4>Your Products</h4>
          {items.map((item) => (
            <div key={item.productId} className={styles.product}>
              <span>
                {item.ProductName}
                <CloseIcon className={styles.cancelIcon} />
                {item.quantity}
              </span>
              <span>Rs {item.price}</span>
            </div>
          ))}
          <span className={styles.totalAmount}>
            TOTAL AMOUNT- <span>Rs {totalAmount.pop()}</span>
          </span>
          <form ref={form2}>
            <input ref={fname1} readOnly name="from_name" />
            <input ref={mailorderaddress} name="address" />
            <input ref={email1} readOnly name="email" />
            {items !== null
              ? items.map((item, index) => (
                  <div key={index}>
                    <input
                      value={`${item.ProductName}(${item.Element})`}
                      readOnly
                      name="product_name"
                    />
                    <input value={item.quantity} readOnly name="quantity" />
                    <input value={item.price} readOnly name="price" />
                  </div>
                ))
              : null}
          </form>
        </div>
      </div>
      {status && (
        <div className={styles.model} onClick={hideOverlay}>
          <div>
            <CloseIcon className={styles.iconClose} onClick={hideOverlay} />
            <h2>Order Sent Successfully!!</h2>
            <span>Thank You for choosing GSP jewellery</span>
          </div>
        </div>
      )}
      {showQR && (
        <div
          className={styles.QRsection}
          onClick={() => {
            setShowQR(false);
          }}
        >
          <CloseIcon
            className={styles.i}
            onClick={() => {
              setShowQR(false);
            }}
          />
          <div data-aos="fadedown">
            <span>We Accept</span>
            <img src={Fonepay} />
            <img src={QR} />
          </div>
        </div>
      )}
    </>
  );
}

export default Checkout;
