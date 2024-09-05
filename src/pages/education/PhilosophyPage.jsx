import React from "react";
import BackgroundComponent from "../../components/common/BackgroundComponent";
import TitleComponent from "../../components/common/TitleComponent";
import CircleComponent from "../../components/education/CircleComponent";
import image1 from "../../assets/img/예배5.jpg";
import styles from "./Philosophy.module.css";

function PhilosophyPage() {
  return (
    <>
      <BackgroundComponent image={image1} />
      <div className={styles.contentSection}>
        <TitleComponent text="교육 철학" />
        <div className={styles.circleContainer}>
          <CircleComponent
            title="153 WCS"
            description=" 5가지 교육 목표"
            position="center"
          />
          <CircleComponent
            title="Faith"
            description="믿음의 아이"
            position="top-center"
          />
          <CircleComponent
            title="Respectful"
            description="존중하는 아이"
            position="top-right"
          />
          <CircleComponent
            title="Creative"
            description="창의적인 아이"
            position="bottom-right"
          />
          <CircleComponent
            title="Serving"
            description="섬기는 아이"
            position="bottom-left"
          />
          <CircleComponent
            title="Passionate"
            description="열정적인 아이"
            position="top-left"
          />
        </div>
        <div className={styles.descriptionSection}>
          <p className={styles.subTitle}>
            성경중심 가치를 지닌 153 월드크리스천 스쿨!
          </p>{" "}
          <p className={styles.content}>
            153World Christian School은 성경중심으로 아이들을 교육하는 것이
            목표입니다. 우리의 목표는 입시교육의 대안으로 자리 잡는 학교가 아닌
            하나님께 받은 달란트를 강조하고 찾아가는 과정을 소중하게 여기는
            학교가 될 것입니다. 학생들을 단순히 숫자로만 보는 것이 아닌 갈릴리
            호수의 153종의 물고기와 같이 각각의 개성을 갖고 있는 학생들을
            존중하는 학교가 되길 소망합니다. 153WCS은 마치 호수 같은 학교로 큰
            물고기, 작은 물고기, 빠른 물고기, 늦은 물고기 다 상관 없이 학생들이
            마음껏 헤엄치고 배우고 성장할 수 있는 학교, 다양한 학생들을 품을 수
            있는 영적인 생태계가 있는 학교입니다. 153WCS의 모든 교육은 말씀을
            기초하여 다음과 같은 강조점을 중심으로 구성되어 있습니다.
          </p>
        </div>
      </div>
    </>
  );
}

export default PhilosophyPage;
