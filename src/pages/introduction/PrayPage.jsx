import React from "react";
import TitleComponent from "../../components/common/TitleComponent";
import BackgroundComponent from "../../components/common/BackgroundComponent";
import image1 from "../../assets/img/학교소개.jpg";
import styles from "./Praypage.module.css";
import YoutubePreview from "../../components/common/YoutubePreview";

function PrayPage() {
  return (
    <>
      <BackgroundComponent image={image1} />
      <div className={styles.contentSection}>
        {" "}
        <TitleComponent text={"153 기도문"} />
        <YoutubePreview videoId="DpxqxOFSsFk" />
      </div>
    </>
  );
}

export default PrayPage;
