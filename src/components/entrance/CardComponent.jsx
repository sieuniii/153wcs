import React, { useState } from "react";
import styles from "./CardComponent.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function CardComponent({ step, title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${styles.card} ${isOpen ? styles.open : ""}`} // Add a class when the card is open
    >
      <div className={styles.cardHeader} onClick={toggleAccordion}>
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
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default CardComponent;
