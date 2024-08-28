import React from "react";
import TitleComponent from "../common/TitleComponent";
import styles from "../../pages/home/Homepage.module.css";

function GallerySection() {
  return (
    <div className={styles.sectionContainer}>
      <TitleComponent text={<>학교 둘러보기</>} />
    </div>
  );
}

export default GallerySection;
