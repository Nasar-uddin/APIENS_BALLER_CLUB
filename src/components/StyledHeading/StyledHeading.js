import React from "react";
import styles from "./StyledHeading.module.scss";

const StyledHeading = ({ headingText }) => {
  return (
    <div className={`${styles.styledHeading}`}>
      <h5 className={styles.titleText}>{headingText}</h5>
      <div className={styles.lineOne}></div>
      <div className={styles.lineTwo}></div>
    </div>
  );
};

export default StyledHeading;
