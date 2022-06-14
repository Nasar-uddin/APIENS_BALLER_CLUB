import React from "react";
import StyledHeading from "../StyledHeading/StyledHeading";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-6">
            <StyledHeading headingText="About" />
            <h2>THE SUPREME LEADER OF THE METAVERSE KINGDOM</h2>
            <p>
              Legendary for their agility, intelligence, and ferocity, the
              Apiens Baller Club have been prized since the time of the
              Pyramids.
            </p>
            <p>
              In 2022, the Apiens Baller Club have evolved into their final,
              most dominant form, and are ready to be uncaged — destined to rule
              the Metaverse.
            </p>
            <p>
              But be warned though — these Apiens Baller Club are exceptionally
              rare. To even catch a glimpse of them in the Metaverse is a
              privilege. To actually own an original Apien is to walk amongst
              virtual gods.
            </p>
            <p>
              Apiens Baller Club NFTs will be the world's most refined and
              exclusive collection of provably rare digital assets, stored for
              eternity on the blockchain.
            </p>
            <p>
              Only 5000 Apiens Baller Club will be minted, preserving their
              majesty and influence for a select few who wish to be revered in
              the Metaverse forever. Every Apien will be designed by world-class
              artists with savage instincts for detail, quality, and
              adaptability.
            </p>
            <p>
              In a game of cat and mouse, the Apien always wins. Now is the
              time. Jump on your chance to own your very own Apien.
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
