import React from "react";
import BackgroundComponent from "../../components/common/BackgroundComponent";
import TitleComponent from "../../components/common/TitleComponent";
import styles from "./PrincipalPage.module.css";
import image1 from "../../assets/img/학교소개.jpg";
import image from "../../assets/img/교장선생님.jpeg";

function PrincipalPage() {
  const text = `153의 이야기를 시작해 볼까요?
시몬 베드로가 올라가서 그물을 육지에 끌어올리니 가득찬 물고기가 153마리라 이같이 많으나 그물이 찢어지지 아니하였더라 (요 21:11)

학교에 대한 이름과 비전을 놓고 기도하던 중 하나님께서 요한복음 21장에 있는 어부 베드로의 이야기를 주셨습니다. 갈릴리 호수에서 베드로는 밤새 고기를 잡으려 하였지만 아무것도 잡지 못하였습니다. 그때 고기 잡는 것을 정리하고 들어갈 준비를 하려한 베드로에게 다가오셔서 말씀하셨습니다. “그물을 오른편에 던지라 그리하면 잡으리라.” 예수님의 말씀에 순종한 베드로는 그물을 들 수 없을 정도의 물고기를 얻었습니다. 그 물고기의 숫자가 바로 153마리 였습니다. 
  
이스라엘 방문 중 한 유대인에게 153마리는 갈릴리 호수에 있는 모든 물고기의 종류라는 이야기를 들었습니다. 그때 153이라는 숫자가 마음에 깊이 와닿았습니다. 모든 종류의 사람을 낚는 어부가 되라고 부탁하시는 주님의 음성이 귓가를 맴도는 것 같았습니다. 153마리는 모든 다양한 사람들이며, 열방 즉, 모든 민족입니다. 153은 하나님께서 “이처럼 사랑하사” 라고 말씀하셨던 하나님의 형상을 가진 사람을의 세상 (world) 이기도 합니다.  그래서 저희가 함께 만들어갈 학교의 이름은 153 World Christian School 입니다.

153 World Christian School 의 목표는 입시교육의 대안으로 자리잡은 학교가 아닌 하나님께 받는 달란트를 강조하고 찾아가는 과정을 소중하게 여기는 학교가 될 것입니다. 마치 베드로가 예수님의 말씀에 순종하여 그물을 던졌을 때 153마리의 물고기를 잡은 거처럼, 아이들이 예수 그리스도를 주님으로 고백하고, 받은 달란트를 사용하여 그물이 찢어질 정도의 풍성한 삶을 살 수 있기를 바랍니다.

여러분의 사랑스러운 한 마리의 물고기를 저희 학교에 맡겨보시지 않으시겠습니까?
`;

  return (
    <>
      <BackgroundComponent image={image1} />
      <div className={styles.contentSection}>
        <TitleComponent text="학교장 소개" />
        <div className={styles.rowSet}>
          <div className={styles.principalInfo}>
            <img
              src={image}
              alt="교장선생님"
              className={styles.principalImage}
            />

            <div className={styles.principalText}>
              <p>류재상/ Jaesang Lyu</p>
              <ul>
                <li>서강대학교 종교학 박사 (B.A)</li>
                <li>Union Presbyterian Seminary 목회학 석사 (M.Div)</li>
                <li>기독교 교육학 석사 (MA)</li>
                <li>Virginia Commonwealth University 환자 상담학 석사 (M.S)</li>
                <li>
                  University of Denver / lliff School of Theology 상담학 박사
                  (PH.D)
                </li>
                <li>전 장로교회 신학대학교 교수</li>
                <li>현 우물 이야기 상담소 소장</li>
                <li>현 하품쉼터 원장</li>
                <li>현 세상의 빛 동광교회 담임목사</li>
              </ul>
            </div>
          </div>
          <div className={styles.principalMessage}>{text}</div>
        </div>
      </div>
    </>
  );
}

export default PrincipalPage;
