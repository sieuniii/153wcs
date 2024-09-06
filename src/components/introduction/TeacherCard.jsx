import React from "react";
import styles from "./TeacherCard.module.css";

function TeacherCard({ name, title, description, part, imageSrc }) {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={name} className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.name}>
          {name} / {title}
        </h3>
        <p>{part}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default TeacherCard;
