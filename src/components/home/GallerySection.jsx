import React from "react";
import TitleComponent from "../common/TitleComponent";
import PhotoGrid from "../common/PhotoGrid";
import Button from "../common/Button";
import styles from "../../pages/home/Homepage.module.css";
import image1 from "../../assets/img/수업사진.jpg";
import image2 from "../../assets/img/학교전경.jpeg";

function GallerySection() {
  const images = [
    { src: image1, alt: "수업사진" },
    { src: image2, alt: "수업사진" },
    { src: image2, alt: "수업사진" },
    { src: image2, alt: "수업사진" },
    { src: image2, alt: "수업사진" },
    { src: image2, alt: "수업사진" },
  ];

  const handleMoreButtonClick = () => {
    console.log("더보기 버튼 클릭됨");
    // 더보기 기능 구현
  };

  return (
    <div className={styles.sectionContainer}>
      <TitleComponent text={<>학교 둘러보기</>} />
      <PhotoGrid images={images} />
      <Button onClick={handleMoreButtonClick} text="더보기   + " />
    </div>
  );
}

export default GallerySection;
