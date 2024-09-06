import React from "react";
import styles from "./TeacherCard.module.css";
import defaultLogo from "../../assets/img/153로고.png"; // 153로고 경로

function TeacherCard({ name, english, description, part, imageSrc, bible }) {
  const displayImage = imageSrc ? imageSrc : defaultLogo; // 이미지가 없으면 기본 로고 사용

  return (
    <div className={styles.card}>
      <div
        className={`${styles.imageContainer} ${
          !imageSrc ? styles.defaultBackground : ""
        }`}
      >
        <img src={displayImage} alt={name} className={styles.image} />
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.english}>{english}</p>
        <p className={styles.part}>{part}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.bible}>{bible}</p>
      </div>
    </div>
  );
}

export default TeacherCard;
