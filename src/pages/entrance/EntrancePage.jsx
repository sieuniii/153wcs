import React from "react";
import BackgroundComponent from "../../components/common/BackgroundComponent";
import TitleComponent from "../../components/common/TitleComponent";
import AccordionComponent from "../../components/entrance/AccordionComponent";

import styles from "./EntrancePage.module.css";

import image1 from "../../assets/img/학교전경2.jpg";

function EntrancePage() {
  return (
    <>
      <BackgroundComponent image={image1} />
      <div className={styles.contentSection}>
        <TitleComponent text="입학 절차 안내" />
        <p>
          아래의 절차로 153 WCS에 입학하실 수 있습니다. <br /> 학부모님들의 많은
          관심 부탁드립니다.
        </p>
        <AccordionComponent />
        <TitleComponent text="입학 문의" />
        <p>
          입학 관련 더 자세한 문의 사항은 <br /> 아래 연락처로 연락주시면
          친절하게 답해드리겠습니다.
        </p>
        <div className={styles.entranceInfo}>
          <p>Tel. 032-341-0153</p>
          <p>Email. 153.wc.school@gmail.com</p>
          <p>KakaoID. 153_wsc</p>
        </div>
      </div>
    </>
  );
}

export default EntrancePage;
