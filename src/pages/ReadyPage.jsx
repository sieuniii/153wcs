import React from "react";
import BackgroundComponent from "../components/common/BackgroundComponent";
import styles from "./Ready.module.css";
import image1 from "../assets/img/메인페이지4.jpg";
function ReadyPage() {
  return (
    <>
      <BackgroundComponent image={image1} />
      <div className={styles.ready}>
        <p>이 페이지는 현재 준비 중 입니다!</p>
        <p> 곧 만나뵈어요! 😊</p>
      </div>
    </>
  );
}

export default ReadyPage;
