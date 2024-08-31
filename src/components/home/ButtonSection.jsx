import React from "react";

import PhotoButton from "../common/PhotoButton";
import ButtonGrid from "./ButtonGrid";

import image1 from "../../assets/img/수업사진.jpg";
import styles from "../../pages/home/Homepage.module.css";

function ButtonSection() {
  const images = [
    { src: image1, text: "학교 둘러보기", alt: "수업사진" },
    { src: image1, text: "교육 철학", alt: "수업사진" },
    { src: image1, text: "입학 문의", alt: "수업사진" },
  ];

  return (
    <div className={styles.sectionContainer}>
      <ButtonGrid images={images} />
    </div>
  );
}

export default ButtonSection;
