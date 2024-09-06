import React, { useState, useEffect } from "react";
import PhotoGrid from "../../components/common/PhotoGrid";
import TitleComponent from "../../components/common/TitleComponent";
import BackgroundComponent from "../../components/common/BackgroundComponent";
import image1 from "../../assets/img/예배1.jpeg";
import galleryData from "../../assets/data/gallery.json";
import styles from "./GalleryPage.module.css";

function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbersToShow, setPageNumbersToShow] = useState(10); // 모바일 여부에 따라 10 또는 5로 변경
  const [imagesPerPage, setImagesPerPage] = useState(9);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(galleryData.length / imagesPerPage);

  const [pageRange, setPageRange] = useState({
    start: 1,
    end: Math.min(pageNumbersToShow, totalPages), // 페이지 총 개수에 맞춰 초기 설정
  });

  // 모바일 여부 확인하는 함수
  const updatePageNumbersToShow = () => {
    if (window.innerWidth <= 768) {
      setPageNumbersToShow(5); // 모바일에서는 5단위로 페이지 번호 보여줌
      setImagesPerPage(8);
    } else {
      setPageNumbersToShow(10); // 웹에서는 10단위로 페이지 번호 보여줌
      setImagesPerPage(9);
    }
  };

  // 컴포넌트가 처음 렌더링 될 때, 그리고 윈도우 크기 변경될 때마다 호출
  useEffect(() => {
    updatePageNumbersToShow();
    window.addEventListener("resize", updatePageNumbersToShow);

    return () => {
      window.removeEventListener("resize", updatePageNumbersToShow);
    };
  }, []);

  // 페이지 수가 변경될 때마다 `pageRange` 업데이트
  useEffect(() => {
    setPageRange({
      start: 1,
      end: Math.min(pageNumbersToShow, totalPages),
    });
  }, [pageNumbersToShow, totalPages]);

  // 페이지에 따라 보여줄 이미지를 계산
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = galleryData.slice(indexOfFirstImage, indexOfLastImage);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 페이지 번호 범위 변경 핸들러
  const handleNextPageRange = () => {
    if (pageRange.end < totalPages) {
      setPageRange((prev) => ({
        start: prev.start + pageNumbersToShow,
        end: Math.min(prev.end + pageNumbersToShow, totalPages),
      }));
    }
  };

  const handlePrevPageRange = () => {
    if (pageRange.start > 1) {
      setPageRange((prev) => ({
        start: Math.max(prev.start - pageNumbersToShow, 1),
        end: prev.start - 1,
      }));
    }
  };

  // 현재 보여줄 페이지 번호들
  const visiblePageNumbers = [];
  for (let i = pageRange.start; i <= pageRange.end; i++) {
    visiblePageNumbers.push(i);
  }

  return (
    <>
      <BackgroundComponent image={image1} />
      <div className={styles.contentSection}>
        <TitleComponent text={"갤러리"} />
        <PhotoGrid images={currentImages} />
        <div className={styles.pagination}>
          {/* 이전 페이지 번호 범위로 이동 */}
          {pageRange.start > 1 && (
            <button onClick={handlePrevPageRange}>이전</button>
          )}

          {/* 페이지 번호 버튼 */}
          {visiblePageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={currentPage === number ? styles.activePage : ""}
            >
              {number}
            </button>
          ))}

          {/* 다음 페이지 번호 범위로 이동 */}
          {pageRange.end < totalPages && (
            <button onClick={handleNextPageRange}>다음</button>
          )}
        </div>
      </div>
    </>
  );
}

export default GalleryPage;
