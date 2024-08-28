import React from "react";
import TitleComponent from "../common/TitleComponent";
import styles from "../../pages/home/Homepage.module.css";

function InterviewSection() {
  return (
    <div className={styles.sectionContainer}>
      <TitleComponent text={<>왜 153 WCS 일까요?</>} />
    </div>
  );
}

export default InterviewSection;
