import React from "react";
import PhotoButton from "../common/PhotoButton";
import styles from "./ButtonSection.module.css";

function ButtonGrid({ images }) {
  return (
    <div className={styles.buttonGrid}>
      {images.map((image, index) => (
        <PhotoButton
          key={index}
          imageSrc={image.src}
          text={image.text}
          altText={image.alt}
        />
      ))}
    </div>
  );
}

export default ButtonGrid;
