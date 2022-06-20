import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div id="footer" className={styles.footer}>
      <div className="footer-content cps-16 cps-lg-40 cpe-16 cpe-lg-40">
        <div className={`${styles.contentCard} text-center`}>
          <h2>
            I'M ABOUT TO TEAR THE METAVERSE APART — I WANT MY OWN APIENS BALLER!
          </h2>
        </div>
      </div>
      <footer>
        <div className={styles.footerContent}>
          <p>©All rights reserved. 2022</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
