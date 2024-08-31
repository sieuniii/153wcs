import React from "react";
import ImageSlider from "../../components/home/ImageSlider";
import IntroSection from "../../components/home/IntroSection";
import InterviewSection from "../../components/home/InterviewSection";
import GallerySection from "../../components/home/GallerySection";
import styles from "./Homepage.module.css";

function HomePage() {
  return (
    <>
      <ImageSlider />
      <IntroSection />
      <InterviewSection />
      <GallerySection />
      <div className={styles.sectionContainer}></div>
    </>
  );
}

export default HomePage;
