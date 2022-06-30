import React from "react";
import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <section id="intro" className={styles.intro}>
      {/* <div className={styles.introText}>
        <h1>
          The <span>APIENS BALLER CLUB</span>
        </h1>
      </div>
      <div className={styles.introBG}>
        <img src="./images/banner.png" alt="Apiens banner" />
      </div>
      <div
        className={`${styles.downArrow} animate__animated animate__bounce animate__infinite`}
      >
        <i className="fa-solid fa-2x fa-angles-down d-block"></i>
      </div> */}
      <div className="container-xl pt-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-5 mb-md-0">
            <img src="./images/intro.gif" alt="" className="w-100" />
          </div>
          <div className="col-md-6">
            <div className={styles.introText}>
              <h1>
                The <span>APIENS BALLER CLUB</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
