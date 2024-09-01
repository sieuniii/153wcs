import React, { useState, useEffect } from "react";
import styles from "./ImageSlider.module.css";
import img1 from "../../assets/img/수업사진.jpg";
import img2 from "../../assets/img/학교전경.jpeg";

const images = [img1, img2];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 다음 이미지로 이동
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // 5초마다 자동으로 다음 이미지로 변경
  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`${styles.image} ${
            index === currentIndex ? styles.active : ""
          }`}
        />
      ))}
    </div>
  );
}

export default ImageSlider;
