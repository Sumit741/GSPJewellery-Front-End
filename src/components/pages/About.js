import React from "react";
import styles from "./About.module.css";
import about from "../../images/about-us.png";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.shopInfo} data-aos="fade-right">
        <div className={styles.info}>
          <h1>GSP jewellery</h1>
          <span>
            GSP jewellery "Galyang Gold and Silver Shop" is a jewellery store
            located at Galyang-03, Syangja. It was establised in 2012 AD and
            since then it has been providing decent jewellery services to the
            customers. GSP jewellery been operating its business physically
            since its inception. Analyzing the current scenario of the online
            business, it has decided to run its business both physically and
            virtually in order to make its service more accessible to many
            customers and extend its business to a larger area.
          </span>
        </div>
        <div className={styles.image}>
          <img src={about} />
        </div>
      </div>
    </div>
  );
}

export default About;
