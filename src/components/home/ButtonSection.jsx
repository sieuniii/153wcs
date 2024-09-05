import React from "react";
import ButtonGrid from "./ButtonGrid";

import image1 from "../../assets/img/입학안내.jpeg";
import image2 from "../../assets/img/예배5.jpg";
import image3 from "../../assets/img/시설.jpg";
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
