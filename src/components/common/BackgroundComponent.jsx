import React from "react";
import styles from "./BackgroundComponent.module.css";

function BackgroundComponent({ image }) {
  return (
    <div className={styles.content}>
      <img src={image} alt="background" className={styles.backgroundImage} />
    </div>
  );
}

export default BackgroundComponent;
