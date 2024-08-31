import React, { useState, useEffect } from "react";
import TitleComponent from "../common/TitleComponent";
import styles from "../../pages/home/Homepage.module.css";
import interviewStyles from "./InterviewSection.module.css";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";

function InterviewSection() {
  const interviews = [
    {
      content: (
        <>
          <p>153학교는 버스를 기다리는 정거장입니다.</p>
          <p>
            ‘입시’에 목적을 두는 것이 아닌 ‘배움’에 목적을 두고 가르침을 받을 수
            있는 학교이기 때문입니다.
          </p>
          <p>
            PACE프로그램을 통해서 영어 실력 및 자기주도 학습 실력이 향상되었고
          </p>
          <p>
            {" "}
            이 학교를 다니면서 인격, 지식, 영성 등 전인격적으로 성장하게
            되었습니다.
          </p>
        </>
      ),
      author: "중학교 3학년 김이맥 학생",
    },
    {
      content: (
        <>
          <p>
            153학교는 아이들의 신앙과 믿음의 성장을 도우며 영성을 자라나게
            합니다.
          </p>
          <p>
            신앙적으로 본이 되어주시는 선생님들께서 모든 수업을 말씀을 기초로
            진행하십니다.
          </p>
          <p>
            그리하여 153 학교를 통해 서로를 사랑하고 배려하며 낮은 자리에서 섬길
            수 있는 예수 그리스도의 성품을 배우며 예수님을 닮아갈 수 있습니다.
          </p>
          <p>
            153학교에서 초등 과정을 보낸 후 깊은 영적 성장을 경험했고 저의
            신앙의 성장과 믿음을 키우는 데 정말 많은 도움이 되었습니다.
          </p>
          <p>
            또한, 학교에서 사용하는 PACE 교재를 통해 학생들이 스스로 목표를
            세우고
          </p>
          <p>
            학생들 서로 경쟁하는 것이 아닌 스스로 하는 학습을 중점으로 두어
            올바른 학습관을 형성할 수 있습니다.
          </p>
          <p>
            학교의 기초가 되는 자기주도학습 덕에 좋은 학습 습관을 만들 수 있었고
            학교 수업 뿐만 아니라 개인 공부 및 숙제를 하는 데에도 도움이
            되었습니다.
          </p>
          <p>
            {" "}
            학교는 늘 학생들에게 최선의 환경을 제공하려고 노력하여 아이들이 153
            학교에서 인성이 자라나고 좋은 성품을 가질 수 있도록 양육하는 걸
            경험했습니다.
          </p>
        </>
      ),
      author: "중학교 1학년 김지수",
    },
    {
      content: (
        <>
          <p>
            153학교에서 하나님의 법 안에서 세상과 구별된 삶을 살아가는 법을
            배우며
          </p>
          <p>
            기독교 세계관을 배우고 매일 예배 시간을 통해 하나님과 더 가까워지고
            신앙과 믿음을 키울 수 있습니다.
          </p>
          <p>
            영어를 잘 하시는 선생님들 덕에 영어를 쉽고 재밌게 배울 수 있고 영어
            Speaking 실력을 향상 시킬 수 있습니다.
          </p>
          <p>
            또한, 자기주도학습을 통해 내가 스스로 목표를 세우고 공부할 수 있는
            능력을 키울 수 있습니다.
          </p>
          <p>
            153학교에서 공부하면서 영어에 흥미를 느꼈고 통역 및 번역을 공부해서
          </p>
          <p>
            아직 알려지지 못한 우리나라의 작품들을 알리고 하나님의 복음을
            전파하는 삶을 살고 싶다는 마음을 품게 되었습니다.
          </p>
        </>
      ),
      author: "초등학교 6학년 박수민 학생",
    },
  ];

  const [currentInterview, setCurrentInterview] = useState(0);

  const [fadeIn, setFadeIn] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentInterview((prevIndex) =>
          prevIndex === interviews.length - 1 ? 0 : prevIndex + 1
        );
        setFadeIn(true);
      }, 500); // 페이드 아웃 후 인터뷰 변경
    }, 5000); // 5초마다 인터뷰 변경

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 타이머 정리
  }, [interviews.length]);

  return (
    <div className={styles.sectionContainer}>
      <TitleComponent text={<>왜 153 WCS 일까요?</>} />
      <div
        className={`${interviewStyles.interviewContainer} ${
          fadeIn ? interviewStyles.fadeIn : interviewStyles.fadeOut
        }`}
      >
        <span className={interviewStyles.quoteLeft}>
          <BiSolidQuoteAltLeft />
        </span>

        <div className={interviewStyles.interviewContent}>
          {interviews[currentInterview].content}-{" "}
          {interviews[currentInterview].author}
        </div>
        <span className={interviewStyles.quoteRight}>
          <BiSolidQuoteAltRight />
        </span>
      </div>
    </div>
  );
}

export default InterviewSection;
