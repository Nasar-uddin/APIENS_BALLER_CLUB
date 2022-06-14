import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div id="footer" className={styles.footer}>
      <div className="footer-content cps-16 cps-lg-40 cpe-16 cpe-lg-40">
        <div className={`${styles.contentCard} text-center`}>
          <h2>I'M ABOUT TO TEAR THE METAVERSE APART — I WANT MY OWN APIEN!</h2>
          <p>
            If you think you are ready to be accepted by the most powerful pride
            the Metaverse has ever known, now is the time to act. Leap into our
            official Discord Channel for exclusive offers and inside
            information. Time is running out to own the finest NFTs the world
            has ever known. Join us as we set out to claw through the
            Metaverse...
          </p>
          <a href="#nolink" className="discord-btn d-inline-block">
            <i className="fa-brands fa-discord me-2"></i>Join Our Discord
          </a>
        </div>
      </div>
      <footer>
        <p>©All rights reserved. 2022</p>
        <div
          className={`${styles.socials} d-flex align-items-center d-none d-sm-block`}
        >
          <a href="twitter.com" className="me-3">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="instagram.com" className="me-3">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
