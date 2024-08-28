import React from "react";
import styles from "./Circle.module.css";

function Circle({ number, title, content, isActive, isShrunk, onClick }) {
  return (
    <div
      className={`${styles.circle} ${isActive ? styles.expanded : ""} ${
        isShrunk ? styles.shrink : ""
      }`}
      onClick={onClick}
    >
      {!isActive ? (
        <>
          <div className={styles.number}>{number}</div>
          <div className={styles.title}>{title}</div>
        </>
      ) : (
        <>
          <div className={styles.expandedHeader}>
            <div className={styles.expandedNumber}>{number}</div>
            <div className={styles.expandedTitle}>{title}</div>
          </div>
          <div className={styles.expandedContent}>{content}</div>
        </>
      )}
    </div>
  );
}

export default Circle;
