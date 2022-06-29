import React from "react";
import styles from "./Features.module.scss";
import StyledHeading from "../StyledHeading/StyledHeading";

const Features = () => {
  return (
    <section id="features" className={styles.features}>
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-0">
            <div className={styles.featureImage}>
              <img src="./images/img-10.png" alt="Feature-Bg" />
              <div></div>
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-1 align-self-center">
            <StyledHeading headingText="Features" />
            <div>
              <h2>PLAY AND EARN</h2>
              <p>
                NFT holders will earn tradeable NFTs and fungible tokens simply
                from playing the game.
              </p>
            </div>
            <div>
              <h2>COMMUNITY OWNED</h2>
              <p>
                Apiens Baller Club holders will own and control the future of
                the Apiens Baller Metaverse governed through the community DAO.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
