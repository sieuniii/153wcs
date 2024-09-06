import React from "react";
import BackgroundComponent from "../../components/common/BackgroundComponent";
import TitleComponent from "../../components/common/TitleComponent";
import TeacherCard from "../../components/introduction/TeacherCard";
import styles from "./TeacherPage.module.css";
import image1 from "../../assets/img/학교전경2.jpg";

const teachers = [
  {
    name: "이예슬",
    title: "Ms.Sarah",
    description:
      "P.A.C.E. 및 영어 담당\n - 사라대학교 중고과 학사 (B.A)\n - Union Presbyterian Seminary 목회학 석사 (M.Div)\n - 기독교 교육학 석사 (M.A)",
    imageSrc: "/img/teacher/sarah.jpg", // public 폴더 아래 이미지
  },
  {
    name: "이예슬",
    title: "Ms.Sarah",
    description:
      "P.A.C.E. 및 영어 담당\n - 예시대학교 학사 (B.A)\n - 예시대학교 석사 (M.A)",
    imageSrc: "/img/teacher/harry.jpg", // public 폴더 아래 이미지
  },
  // 다른 교직원 추가 가능
];

function TeacherPage() {
  return (
    <>
      <BackgroundComponent image={image1} />
      <div className={styles.contentSection}>
        <TitleComponent text="교직원 소개 " />
        <div className={styles.teacherGrid}>
          {teachers.map((teacher, index) => (
            <TeacherCard
              key={index}
              name={teacher.name}
              title={teacher.title}
              description={teacher.description}
              imageSrc={teacher.imageSrc}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TeacherPage;
