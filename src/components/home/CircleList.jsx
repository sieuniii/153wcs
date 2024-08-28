import React, { useState } from "react";
import Circle from "./Circle";
import styles from "./Circle.module.css";

function CircleList() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showCircles, setShowCircles] = useState(true); // 원들이 보이는지 여부를 관리하는 상태

  const circles = [
    {
      number: "1",
      title: "한 사람",
      content: (
        <>
          <p>
            <strong className={styles.customFont}>한 사람</strong> 안에 하나님
            나라가 있음
          </p>
          <p>
            <strong className={styles.customFont}>한 영혼</strong> 을 천하보다
            소중히 여기시는 주님의 마음으로 양육
          </p>
          <p>
            <strong className={styles.customFont}>한 사람</strong> 에게 하는
            것이 주께 하는 것이라는 말씀을 따라 한 아이에게 최선을 다함
          </p>
        </>
      ),
    },
    {
      number: "5",
      title: "다섯 가지 교육 목표",
      content:
        "Fiathful 믿음 있는 아이 \n\n Creative 창의적인 아이 \n\n Respectful 종중하는 아이 \n\n Passionate 열정적인 아이 \n\n Serving 섬기는 아이",
    },
    {
      number: "3",
      title: "셋이 하나",
      content:
        "삼위 일체 하나님의 모습을 닮아 다양속의 일치를 이룸 \n\n 학생 부모 교사가 하나되어 전인적인 교육 목표를 이룸 \n\n 사람 학교 세상: 한 사람을 변화 시켜 학교와 세상을 변화시키는",
    },
  ];

  const handleCircleClick = (index) => {
    // 이미 클릭된 원을 다시 클릭한 경우, 모든 원이 보이도록 설정
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className={styles.circleContainer}>
      {circles.map((circle, index) => (
        <Circle
          key={index}
          number={circle.number}
          title={circle.title}
          content={circle.content}
          isActive={activeIndex === index}
          isShrunk={activeIndex !== null && activeIndex !== index} // 선택되지 않은 원은 축소
          onClick={() => handleCircleClick(index)}
        />
      ))}
    </div>
  );
}

export default CircleList;
