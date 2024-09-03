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
          <p>
            153학교는 아이들의 신앙과 믿음의 성장을 도우며 영성을 자라나게
            합니다.
          </p>
          <p>
            신앙적으로 본이 되어주시는 선생님들께서 모든 수업을 말씀을 기초로
            진행하십니다.{" "}
          </p>
          <p>
            그리하여 153 학교를 통해 서로를 사랑하고 배려하며 낮은 자리에서 섬길
            수 있는 예수 그리스도의 성품을 배우며 예수님을 닮아갈 수 있습니다.
          </p>
          <p>
            학교는 늘 학생들에게 최선의 환경을 제공하려고 노력하여 아이들이 153
            학교에서 인성이 자라나고 좋은 성품을 가질 수 있도록 양육하는 걸
            경험했습니다.
          </p>
        </>
      ),
      author: "중학교 1학년 (Sincerity)  김지수",
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
      author: "중학교 1학년 (Sincerity) 김나윤",
    },
    {
      content: (
        <>
          <p>
            153학교에서 매일 이뤄지는 Q.T시간과 예배 시간은 제가 정말 소중하게
            여기는 시간입니다.
          </p>
          <p>말씀 묵상 시간에는 </p>
          <p>
            1. 하나님은 어떤 분이신가? 2. 오늘 우리에게 주신 말씀은 무엇인가? 3.
            적용
          </p>
          <p> 의 주제를 가지고 묵상하고 친구들과 나누는 시간을 가집니다.</p>
          <p>
            이런 시간들로 저의 신앙이 더욱 성숙해지고 성장하는 것을 느낍니다.{" "}
          </p>
          <p>
            그래서 이런 시간을 주시는 주님께 감사 드리고 이 시간을 통해 주님과
            더욱 더 가까워지는 시간을 가지길 소망합니다.
          </p>
        </>
      ),
      author: "중학교 1학년 (Sincerity) 최민준",
    },
    {
      content: (
        <>
          <p>153학교는 하나님을 믿고 창조론을 기초로 가르치는 학교입니다.</p>
          <p>
            다양한 체험학습과 해외 수학 여행을 통해 시야를 넓힐 수 있습니다.
          </p>
          <p>
            졸업 후 어디를 가든 ‘하나님을 믿는 아이는 저런 아이구나, 나도
            믿어야겠다’라고 생각하도록 본이 되고 싶습니다.
          </p>
          <p>
            험한 세상을 살아갈 때 하나님을 의지하는 큰 힘과 믿음을 153학교에서
            키우고 있습니다.
          </p>
        </>
      ),
      author: "초등학교 5학년 (Faith) 정하율",
    },
    {
      content: (
        <>
          <p>153학교에서는 하나님의 말씀을 배울 수 있습니다.</p>
          <p>
            저의 친할머니께서는 인생에서 가장 잘한 것이 153학교를 보낸 일이라고
            말할 정도로 153학교는 최고의 결정이 될 만큼 좋은 학교입니다.
          </p>
          <p>
            앞으로도 학교를 생각하며 하나님의 말씀을 기억하고 다른 학생들도
            믿음으로 살 수 있도록 도와주는 사람이 되고자 합니다.
          </p>
          <p>
            정말 좋고 유익한 학교로 많은 사람들이 경험하면 좋을 것 같습니다.
          </p>
        </>
      ),
      author: "초등학교 5학년 (Faith) 길라임",
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
    }, 10000); // 10초마다 인터뷰 변경

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
