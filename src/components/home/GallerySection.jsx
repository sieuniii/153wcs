import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TitleComponent from "../common/TitleComponent";
import PhotoGrid from "../common/PhotoGrid";
import Button from "../common/Button";
import styles from "../../pages/home/Homepage.module.css";
import galleryData from "../../assets/data/gallery.json";

function GallerySection() {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [images, setImages] = useState([]);

  // JSON 파일에서 첫 6개의 이미지만 가져오기
  useEffect(() => {
    const fetchImages = async () => {
      // 첫 6개의 이미지만 추출
      const firstSixImages = galleryData.slice(0, 6);
      setImages(firstSixImages);
    };

    fetchImages();
  }, []);

  const handleMoreButtonClick = () => {
    navigate("/page/ready");
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
