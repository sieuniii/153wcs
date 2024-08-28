import React, { useState } from "react";
import Circle from "./Circle";
import styles from "./Circle.module.css";

function CircleList() {
  const [activeIndex, setActiveIndex] = useState(null);

  const circles = [
    {
      number: "1",
      title: "한 사람",
      content:
        "한 사람 안에 하나님 나라가 있음. 한 영혼을 천하보다 소중히 여기시는 주님의 마음으로 양육.",
    },
    {
      number: "5",
      title: "다섯 가지 교육 목표",
      content: "두 영혼에게 하나님 말씀을 전달하며 믿음을 키워감.",
    },
    {
      number: "3",
      title: "셋이 하나",
      content: "세 영혼을 위한 기도와 관심을 나눔.",
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
          isHidden={activeIndex !== null && activeIndex !== index} // 현재 선택된 원이 아닌 원은 숨김
          onClick={() => handleCircleClick(index)}
        />
      ))}
    </div>
  );
}

export default CircleList;
