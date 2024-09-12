import React from "react";
import BackgroundComponent from "../../components/common/BackgroundComponent";
import TitleComponent from "../../components/common/TitleComponent";
import image1 from "../../assets/img/학교소개.jpg";
import YoutubePreview from "../../components/common/YoutubePreview";
import styles from "./PrayPage.module.css";

function PrayPage() {
  return (
    <>
      <BackgroundComponent image={image1} />
      <div className={styles.contentSection}>
        <TitleComponent text={"153 기도문"} />
        <YoutubePreview />
      </div>
    </>
  );
}

export default PrayPage;
