import React from "react";
import StyledHeading from "../StyledHeading/StyledHeading";
import styles from "./Artists.module.scss";

const Artists = () => {
  return (
    <section id="artists" className={styles.artists}>
      <div className="d-flex flex-column m-auto" style={{ maxWidth: "928px" }}>
        <div className="heading cmb-44">
          <StyledHeading headingText="Artists" />
          <h2>MEET THE ARTISTS</h2>
        </div>
        <div className="allArtists d-flex flex-column">
          <div className={`${styles.artist} mb-4`}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-5">
                  <div className={`${styles.artistImg} mb-3`}>
                    <img
                      src="./images/artist.png"
                      alt="Artist"
                      className="w-100"
                    />
                  </div>
                </div>
                <div className="col-sm-5">
                  <h3 className="mb-3">
                    <span>H</span>enrique Fagasta
                  </h3>
                  <p>Enrique has been trusted to work on culture-shifting projects like Star Wars, X-Men, and Men in Black, to name a few. His artistry will bring a quality to the Apiens Baller Club that will allow you to attract awe and envy throughout the Metaverse.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.artist} mb-4`}>
            <div className="container-fluid">
              <div className="row justify-content-end">
                <div className="col-sm-5">
                  <div className={`${styles.artistImg} mb-3`}>
                    <img
                      src="./images/artist-2.png"
                      alt="Artist"
                      className="w-100"
                    />
                  </div>
                </div>
                <div className="col-sm-5">
                  <h3 className="mb-3">
                    <span>R</span>omefa Sarar
                  </h3>
                  <p>Avengers. Thor. The Fast & Furious. Aquaman. If you've ever seen these forces of nature, you've seen Ricardo's work. Ricardo is responsible for some of the most culturally significant work of the 21st century — and now he is turning his considerable attention to producing Apiens Baller Club.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artists;
