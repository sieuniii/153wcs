import React from "react";
import CardComponent from "./CardComponent";
import styles from "./AccordionComponent.module.css";

function AccordionComponent() {
  return (
    <div className={styles.accordion}>
      <CardComponent
        step={1}
        title="입학 설명회"
        content="입학 설명회에 대한 내용을 여기에 적습니다."
      />
      <CardComponent
        step={2}
        title="구글폼 상담신청"
        content="2024년도 입학생 방문을 위한 사전질문 바로 가기"
      />
      <CardComponent
        step={3}
        title="상담 진행"
        content="상담이 어떻게 진행되는지에 대한 내용을 여기에 적습니다."
      />
      <CardComponent
        step={4}
        title="진단고사 진행"
        content="진단고사가 어떻게 진행되는지에 대한 내용을 여기에 적습니다."
      />
      <CardComponent
        step={5}
        title="학부모님 및 학생 참여 최종 면접"
        content="최종 면접에 대한 내용을 여기에 적습니다."
      />
      <CardComponent
        step={6}
        title="입학 확정"
        content="입학 확정에 대한 내용을 여기에 적습니다."
      />
    </div>
  );
}

export default AccordionComponent;
