import React from "react";
import styles from "./PhotoButton.module.css";

function PhotoButton({ imageSrc, text, onClick, altText }) {
  return (
    <div className={styles.buttonContainer} onClick={onClick}>
      <img src={imageSrc} className={styles.buttonImage} alt={altText} />
      <div className={styles.text}>{text}</div>
    </div>
  );
}

export default PhotoButton;
