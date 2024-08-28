import React from "react";
import TitleComponent from "../common/TitleComponent";
import styles from "./IntroSection.module.css";

function InterviewSection() {
  return (
    <div className={styles.introContainer}>
      <TitleComponent text={<>왜 153 WCS 일까요?</>} />
    </div>
  );
}

export default InterviewSection;
