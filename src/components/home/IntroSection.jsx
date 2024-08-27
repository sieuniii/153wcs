import React from "react";
import TitleComponent from "../common/TitleComponent";
import styles from "./IntroSection.module.css";
import Circle from "../../components/common/Circle.jsx";

function IntroSection() {
  return (
    <div className={styles.introContainer}>
      <TitleComponent
        text={
          <>
            <span>성경중심 가치를 지닌</span>
            <br />
            153 월드 크리스천 스쿨
          </>
        }
      />
      <div className={styles.circleContainer}>
        <Circle number="1" text="한 사람" />
        <Circle number="5" text="다섯 가지 교육 목표" />
        <Circle number="3" text="셋이 하나" />
      </div>
    </div>
  );
}

export default IntroSection;
