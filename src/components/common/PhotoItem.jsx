import React from "react";

import styles from "./Photo.module.css";

function PhotoItem({ imageSrc, altText }) {
  return (
    <div>
      <img src={imageSrc} alt={altText} className={styles.image} />
    </div>
  );
}

export default PhotoItem;
