import React, { useEffect, useRef } from "react";
import styles from "./Contact.module.css";
import "aos/dist/aos.css";
import Aos from "aos";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import SendIcon from "@mui/icons-material/Send";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Contact() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
    });
  }, []);
  const name = useRef();
  const email = useRef();
  const message = useRef();

  const sendMessageHandler = () => {
    console.log(name.current.value, email.current.value, message.current.value);
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
          <form>
            <input
              type="text"
              placeholder="Your Full Name"
              pattern="[A-Za-z]"
              ref={name}
            />
            <input type="email" placeholder="Your Email" ref={email} />
            <textarea type="textbox" placeholder="Your Message" ref={message} />
            <button onClick={sendMessageHandler}>
              Send Message <SendIcon />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
