import React from "react";
import TitleComponent from "../common/TitleComponent.jsx";
import CircleList from "./CircleList.jsx";
import styles from "../../pages/home/Homepage.module.css";
import Circle from "./Circle.jsx";

function IntroSection() {
  return (
    <div className={styles.sectionContainer}>
      <TitleComponent
        text={
          <>
            <span>성경중심 가치를 지닌</span>
            <br />
            153 월드 크리스천 스쿨
          </>
        }
      />
      <CircleList />
    </div>
  );
}

export default IntroSection;
