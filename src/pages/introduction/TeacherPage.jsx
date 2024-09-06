import React, { useState } from "react";
import BackgroundComponent from "../../components/common/BackgroundComponent";
import TitleComponent from "../../components/common/TitleComponent";
import TeacherCard from "../../components/introduction/TeacherCard";
import styles from "./TeacherPage.module.css";
import image1 from "../../assets/img/학교소개.jpg";
import teachersData from "../../assets/data/teacher.json";
import useMediaQuery from "../../hooks/useMediaQuery.jsx"; // 미디어 쿼리 훅

function TeacherPage() {
  // 모바일인지 여부 체크
  const isMobile = useMediaQuery("(max-width: 768px)");

  // 교장, 교감 선생님 따로 설정
  const principal = teachersData.find(
    (teacher) => teacher.part === "교장선생님"
  );
  const vicePrincipal = teachersData.find(
    (teacher) => teacher.part === "교감선생님"
  );

  // 교장, 교감 제외한 나머지 교직원
  const otherTeachers = teachersData.filter(
    (teacher) => teacher.part !== "교장선생님" && teacher.part !== "교감선생님"
  );

  // 페이지 네이션 상태: 현재 페이지와 페이지 당 교직원 수
  const [currentPage, setCurrentPage] = useState(1);
  const teachersPerPage = 10; // 모바일에서는 한 줄에 한 명

  // 페이지 네이션에 포함할 모든 교직원 (교장, 교감 포함)
  const allTeachers = [principal, vicePrincipal, ...otherTeachers];

  // 현재 페이지에 해당하는 교직원들을 계산
  const indexOfLastTeacher = currentPage * teachersPerPage;
  const indexOfFirstTeacher = indexOfLastTeacher - teachersPerPage;

  const currentTeachers = isMobile
    ? allTeachers.slice(indexOfFirstTeacher, indexOfLastTeacher) // 모바일에서만 페이지네이션 적용
    : otherTeachers; // 웹에서는 모든 교직원 표시

  // 페이지 변경 핸들러
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);

    // 페이지가 변경될 때 스크롤을 제일 위로 이동
    window.scrollTo({
      top: 0, // 스크롤 위치 (0, 0)으로 설정
      behavior: "smooth", // 부드러운 스크롤 애니메이션 적용
    });
  };

  // 페이지 번호 계산
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allTeachers.length / teachersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <BackgroundComponent image={image1} />
      <div className={styles.contentSection}>
        <TitleComponent text="교직원 소개 " />

        {/* 웹에서만 교장, 교감 선생님 보여주기 */}
        {!isMobile && (
          <>
            {/* 교장 선생님 */}
            {principal && (
              <div className={styles.principalCard}>
                <TeacherCard
                  name={principal.name}
                  part={principal.part}
                  english={principal.english}
                  description={principal.description}
                  bible={principal.bible}
                  imageSrc={principal.imageSrc}
                />
              </div>
            )}

            {/* 교감 선생님 */}
            {vicePrincipal && (
              <div className={styles.vicePrincipalCard}>
                <TeacherCard
                  name={vicePrincipal.name}
                  part={vicePrincipal.part}
                  english={vicePrincipal.english}
                  description={vicePrincipal.description}
                  bible={vicePrincipal.bible}
                  imageSrc={vicePrincipal.imageSrc}
                />
              </div>
            )}
          </>
        )}

        {/* 나머지 교직원들 */}
        <div
          className={isMobile ? styles.teacherGridMobile : styles.teacherGrid}
        >
          {currentTeachers.map((teacher, index) => (
            <TeacherCard
              key={index}
              name={teacher.name}
              part={teacher.part}
              english={teacher.english}
              description={teacher.description}
              bible={teacher.bible}
              imageSrc={teacher.imageSrc}
            />
          ))}
        </div>

        {/* 모바일에서만 페이지 네이션 */}
        {isMobile && (
          <div className={styles.pagination}>
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={currentPage === number ? styles.activePage : ""}
              >
                {number}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default TeacherPage;
