import React from "react";
import styles from "./Circle.module.css";

function Circle({ number, text }) {
  return (
    <div className={styles.circle}>
      <div className={styles.number}>{number}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
}

export default Circle;
