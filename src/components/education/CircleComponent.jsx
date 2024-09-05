import React, { useRef, useEffect } from "react";
import styles from "./CircleComponent.module.css";

function CircleComponent({ title, description, position }) {
  const circleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      {
        threshold: 0.3, // 원의 30%가 보일 때 애니메이션 시작
      }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, []);

  return (
    <div ref={circleRef} className={`${styles.circle} ${styles[position]}`}>
      <div className={styles.circleTitle}>{title}</div>
      <div className={styles.circleDescription}>{description}</div>
    </div>
  );
}

export default CircleComponent;
