import React from "react";
import styles from "./Photo.module.css";

function PhotoItem({ imageSrc, altText }) {
  return <img src={imageSrc} alt={altText} className={styles.image} />;
}

export default PhotoItem;
