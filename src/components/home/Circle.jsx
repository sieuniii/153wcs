import React from "react";
import styles from "./Circle.module.css";

function Circle({ number, title, content, isActive, isHidden, onClick }) {
  if (isHidden) {
    return null; // 선택되지 않은 원은 렌더링하지 않음
  }

  return (
    <div
      className={`${styles.circle} ${isActive ? styles.expanded : ""}`}
      onClick={onClick}
    >
      {!isActive ? (
        <>
          <div className={styles.number}>{number}</div>
          <div className={styles.title}>{title}</div>
        </>
      ) : (
        <div>
          <div className={styles.content}>
            <p>{number}</p>
            <p>{title}</p>
          </div>
          <div>
            <p>{content}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Circle;
