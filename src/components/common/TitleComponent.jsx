import React, { useEffect, useRef, useState } from "react";
import styles from "./TitleComponent.module.css";

function TitleComponent({ text }) {
  const titleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // 애니메이션 활성화
        } else {
          setIsVisible(false); // 화면에서 벗어나면 다시 비활성화
        }
      },
      { threshold: 0.5 } // 50%가 화면에 들어왔을 때 트리거
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <div
      ref={titleRef}
      className={`${styles.title} ${isVisible ? styles.animate : ""}`}
    >
      {text}
      <div className={styles.underline}></div>
    </div>
  );
}

export default TitleComponent;
