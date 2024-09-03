import React, { useState } from "react";
import styles from "./CardComponent.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

function CardComponent({ step, title, content, link }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.card} ${isOpen ? styles.open : ""}`}>
      <div
        className={`${styles.cardHeader} ${
          isOpen ? styles.cardHeaderOpen : ""
        }`}
        onClick={toggleAccordion}
      >
        <div className={styles.stepTitle}>
          <span className={styles.step}>STEP {step}</span>
          <span className={styles.title}>{title}</span>
        </div>
        <div className={styles.icon}>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>
      {isOpen && (
        <div className={styles.cardContent}>
          {link && (
            <p>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <FaLink /> 2024년도 입학생 방문을 위한 사전질문 바로 가기
              </a>
            </p>
          )}
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default CardComponent;
