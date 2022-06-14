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
              <img src="./images/img-10.jpg" alt="Feature-Bg" />
              <div></div>
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-1">
            <StyledHeading headingText="Features" />
            <h2>WILL YOU BE ACCEPTED AS THE BEST AMONG THE BEST?</h2>
            <p>
              Just like in the wild, the Metaverse is made up of predators. When
              compared to other NFTs, Apiens are at the top of the food chain —
              no questions. The weak will be safe until the beginning of
              February, when the best will be chosen. From then on, the leaders
              will claim their dominance on the Metaverse and no one will be
              safe ever again. What better way to secure your legacy in the
              Metaverse than with an Apien? Only the alphas lunge towards
              majesty and immortality. Take your leap now.
            </p>
            <a href="discord.gg" className="discord-btn d-inline-block">
              <span className="d-flex align-items-center">
                <i className="fa-brands fa-discord me-2"></i> Join Our Discord
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
