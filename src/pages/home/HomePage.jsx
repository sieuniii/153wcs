import React from "react";
import ImageSlider from "../../components/home/ImageSlider";
import IntroSection from "../../components/home/IntroSection";
import InterviewSection from "../../components/home/InterviewSection";
import GallerySection from "../../components/home/GallerySection";

function HomePage() {
  return (
    <div>
      <ImageSlider />
      <IntroSection />
      <InterviewSection />
      <GallerySection />
    </div>
  );
}

export default HomePage;
