import React from "react";
import TitleComponent from "../common/TitleComponent";
import PhotoGrid from "../common/PhotoGrid";
import Button from "../common/Button";
import styles from "../../pages/home/Homepage.module.css";
import image1 from "../../assets/img/수업사진.jpg";
import image2 from "../../assets/img/예배1.jpeg";
import image3 from "../../assets/img/예배2.jpg";
import image4 from "../../assets/img/예배3.jpg";
import image5 from "../../assets/img/사회1.jpeg";
import image6 from "../../assets/img/예배6.jpg";

function GallerySection() {
  const images = [
    { src: image1, alt: "수업사진" },
    { src: image2, alt: "수업사진" },
    { src: image3, alt: "수업사진" },
    { src: image4, alt: "수업사진" },
    { src: image5, alt: "수업사진" },
    { src: image6, alt: "수업사진" },
  ];

  const handleMoreButtonClick = () => {
    console.log("더보기 버튼 클릭됨");
    // 더보기 기능 구현
  };

  return (
    <div className={styles.galleryContainer}>
      <TitleComponent text={<>갤러리</>} />
      <PhotoGrid images={images} />
      <Button onClick={handleMoreButtonClick} text="더보기   + " />
    </div>
  );
}

export default GallerySection;
