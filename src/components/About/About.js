import React from "react";
import StyledHeading from "../StyledHeading/StyledHeading";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <StyledHeading headingText="About" />
            <h2>THE SUPREME LEADER OF THE METAVERSE KINGDOM</h2>
            <p>
              Apiens Baller Club NFTs will be the world's most refined and
              exclusive collection of provably rare digital assets, stored for
              eternity on the blockchain
            </p>
            <p>
              Only 8888 Apiens Baller Club will be minted, preserving their
              majesty and influence for a select few who wish to be revered in
              the Metaverse forever. Every Apiens Baller will be designed by
              world-class artists with savage instincts for detail, quality, and
              adaptability.
            </p>
          </div>
          <div className="col-lg-6">
            <div className={styles.aboutImage}>
              <img src="./images/about.png" alt="about" className="w-100" />
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
