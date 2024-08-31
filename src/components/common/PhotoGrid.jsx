import React from "react";
import PhotoItem from "./PhotoItem";
import styles from "./Photo.module.css";

function PhotoGrid({ images }) {
  return (
    <div className={styles.photoGrid}>
      {images.map((image, index) => (
        <PhotoItem key={index} imageSrc={image.src} altText={image.alt} />
      ))}
    </div>
  );
}

export default PhotoGrid;
