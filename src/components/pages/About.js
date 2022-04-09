import React from "react";
import styles from "./About.module.css";
import about from "../../images/about.png";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.shopInfo}>
        <div className={styles.info}>
          <h1>GSP jewellery</h1>
          <span>
            GSP jewellery "Galyang Gold and Silver Shop" is a jewellery store
            located at Galyang-03, Syangja. It was establised in 2012 AD and
            since then it has been providing decent jewellery services to the
            customers
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
