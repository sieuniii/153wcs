import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 사용
import styles from "./PhotoButton.module.css";

function PhotoButton({ imageSrc, text, navigate, altText }) {
  const navigateTo = useNavigate(); // useNavigate 사용

  const handleClick = () => {
    navigateTo(navigate); // navigate 주소로 이동
  };

  return (
    <div className={styles.buttonContainer} onClick={handleClick}>
      <img src={imageSrc} className={styles.buttonImage} alt={altText} />
      <div className={styles.text}>{text}</div>
    </div>
  );
}

export default PhotoButton;
