import React, { useEffect, useRef, useState } from "react";
import styles from "./Contact.module.css";
import "aos/dist/aos.css";
import Aos from "aos";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import SendIcon from "@mui/icons-material/Send";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextareaAutosize } from "@mui/base";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MdLocationPin } from "react-icons/md";

function Contact() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
    });
  }, []);
  const [viewPort, setViewPort] = useState({
    latitude: 27.942496914,
    longitude: 83.672283,
    zoom: 18,
    width: "800px",
    height: "400px",
  });
  const name = useRef();
  const email = useRef();
  const message = useRef();
  const form = useRef();
  const [status, setStatus] = useState(false);

  const initialValues = {
    from_name: "",
    email_id: "",
    message: "",
  };
  const inputValidation = Yup.object().shape({
    from_name: Yup.string().required("Please Enter Your name"),
    email_id: Yup.string().required("Please Enter Your email"),
    message: Yup.string().required("Please Enter Your message to admin"),
  });

  const sendMessageHandler = (value, onSubmitProps) => {
    setStatus(true);
    emailjs
      .sendForm(
        "service_3rlhzhb",
        "template_q05gspf",
        form.current,
        "HeTxv6APfWiKQ8iiE"
      )
      .then(
        (result) => {
          setStatus(false);
          alert("message sent successfully");
          onSubmitProps.setSubmitting(false);
          onSubmitProps.resetForm();
        },
        (error) => {
          alert("Opps!! Something went wrong");
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.contactInfo} data-aos="fade-right">
          <h1>Contact Details</h1>
          <p>You can contact us using following information</p>
          <span>
            <AttachEmailIcon /> info@jspjewelery.com
          </span>
          <span>
            <ContactPhoneIcon /> 9813035882, 9864886138
          </span>
          <span>
            <WhatsAppIcon /> 9813035882
          </span>
          <span>
            <LocationOnIcon /> Galyang-03, Syangja, Nepal
          </span>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.formSection} data-aos="fade-left">
          <h1>Send Us Messsage</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={inputValidation}
            onSubmit={sendMessageHandler}
          >
            <Form ref={form} className={styles.form}>
              <Field
                type="text"
                placeholder="Your Full Name"
                name="from_name"
              />
              <ErrorMessage name="from_name" component="span" />

              <Field type="email" placeholder="Your Email" name="email_id" />
              <ErrorMessage name="email_id" component="span" />

              <Field as="textarea" placeholder="Your Message" name="message" />
              <ErrorMessage name="message" component="span" />

              <button type="submit">
                Send Message <SendIcon />
              </button>
            </Form>
          </Formik>
          {status && (
            <div className={styles.overlay}>
              <span>SENDING ...</span>
              <div className={styles.bar}></div>
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <div className="rounded" style={{ width: "80%", height: "600px" }}>
          <Map
            {...viewPort}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken="pk.eyJ1IjoicHJhZGVlcDA3IiwiYSI6ImNsMXN2eTY2NDBqNjUza3Bscnl0ODMwZDYifQ.d1jfwnleGiEg4Hrzm3kdEQ"
            onMove={(viewPort) => {
              setViewPort(viewPort);
            }}
          >
            <Marker latitude={27.942496914} longitude={83.672283}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <MdLocationPin style={{ fontSize: "40px", color: "red" }} />
                <h1
                  style={{ fontSize: "15px", color: "red", fontWeight: "bold" }}
                >
                  GSP GOLD
                </h1>
              </div>
            </Marker>
          </Map>
        </div>
      </div>
    </div>
  );
}

export default Contact;
