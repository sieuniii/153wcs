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
        content={`153 월드 크리스천 스쿨 방문 전 신입생과 부모님의 성의 있는 답변 부탁드립니다.
학교 방문 및 교감선생님과의 면담 일정은 추후 연락드릴 예정입니다.
감사합니다.`}
        link="https://docs.google.com/forms/d/e/1FAIpQLSf2UIJMpVtQLTKucqQ5u57xnzvHGh8Sdw_lZ8D95mueyOtLHQ/viewform"
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
        title="최종 면접"
        content="학무보님 및 학생의 최종면접이 진행됩니다. 최종 면접에 대한 내용을 여기에 적습니다."
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
