import React from "react";

import PhotoButton from "../common/PhotoButton";
import ButtonGrid from "./ButtonGrid";

import image1 from "../../assets/img/예배1.jpeg";
import image2 from "../../assets/img/예배5.jpg";
import image3 from "../../assets/img/학교전경2.jpg";
import styles from "../../pages/home/Homepage.module.css";

function ButtonSection() {
  const images = [
    {
      src: image3,
      text: "학교 둘러보기",
      alt: "수업사진",
      navigate: "/page/principal",
    },
    {
      src: image2,
      text: "교육 철학",
      alt: "예배5",
      navigate: "/page/education",
    },
    {
      src: image1,
      text: "입학 문의",
      alt: "수업사진",
      navigate: "/page/entrance",
    },
  ];

  return (
    <div className={styles.sectionContainer}>
      <ButtonGrid images={images} />
    </div>
  );
}

export default ButtonSection;
