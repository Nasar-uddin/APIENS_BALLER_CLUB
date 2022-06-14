import React from "react";
import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <section id="intro" className={styles.intro}>
      <div className={styles.introText}>
        <h1>
          The <span>APIENS BALLER CLUB</span>
        </h1>
        <p>
          The Apiens Baller Club NFT will produce a collection of 5000 pieces
          with each piece of their DNA shared and protected via the Ethereum
          Blockchain.
        </p>
        <a href="#nolink" className="cbtn-lg d-inline-block">
          Buy on Opensea
        </a>
      </div>
      <div className={styles.introBG}>
        <img src="./images/banner.png" alt="Apiens banner" />
      </div>
      <div
        className={`${styles.downArrow} animate__animated animate__bounce animate__infinite`}
      >
        <i className="fa-solid fa-2x fa-angles-down d-block"></i>
      </div>
    </section>
  );
};

export default Intro;
