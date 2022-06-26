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
                <div className="col-sm-5 align-self-center">
                  <h3 className="mb-0">
                    <span>E</span>NRIQUE MATEO-SAGASTA
                  </h3>
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
