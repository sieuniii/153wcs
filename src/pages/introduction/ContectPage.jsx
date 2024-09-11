import React, { useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styles from "./ContectPage.module.css";
import BackgroundComponent from "../../components/common/BackgroundComponent";
import TitleComponent from "../../components/common/TitleComponent";
import image1 from "../../assets/img/학교소개.jpg";
import marker from "../../assets/img/marker.png";
import { FaLink } from "react-icons/fa6";

function ContectPage() {
  return (
    <>
      <BackgroundComponent image={image1} />
      <div className={styles.contentSection}>
        <TitleComponent text="찾아오시는 길" />{" "}
        <Map
          center={{ lat: 37.488526, lng: 126.825038 }}
          className={styles.map}
        >
          {" "}
          <MapMarker
            position={{ lat: 37.488526, lng: 126.825038 }}
            image={{
              src: marker, // 마커 이미지 URL
              size: {
                width: 130,
                height: 130, // 마커 크기 설정
              },
            }}
          />
        </Map>
        <div className={styles.textContent}>
          <p className={styles.subTitle}>주소</p>
          <p>
            14780 경기도 부천시 안곡로 194번길 14 유한대학교 입구 우측 길
            153월드크리스천스쿨
          </p>
          <p className={styles.subTitle}>자가 차량 이용 시</p>
          <p>
            경기도 부천시 경인로 590 유한대학교 입구 전 우측 길로 100m 진입
            유한대학교 정문으로 들어와서 동상 옆 샛길로 진입
          </p>

          <p className={styles.subTitle}>대중교통 이용 시</p>
          <p>
            서울 지하철 1호선 역곡역 1번 출구 {">"} 서울방향 10,83,88버스 승차
            {">"} 유한대학교 하차
          </p>
          <p>
            서울 지하철 1,7호선 온수역 1,2,3번 출구 {">"}
            인천방향 52,57 버스 승차{">"}유한대학교 하차
          </p>
        </div>
        <TitleComponent text="연락처" />
        <div className={styles.textContent}>
          <p className={styles.subTitle}>전화</p>
          <p>032-341-0153</p>
          <p className={styles.subTitle}>이메일</p>
          <p>153.wc.school@gmail.com</p>

          <p className={styles.subTitle}>카카오톡 채널</p>
          <a href="https://pf.kakao.com/_UUxkxdK">
            <p>
              {" "}
              <FaLink /> 153 WCS 카카오톡 바로 문의하기
            </p>{" "}
          </a>

          <p className={styles.subTitle}>인스타그램</p>
          <a href="https://www.instagram.com/153.world.cs?igsh=MXQ2ajdxZ25nMTRtZQ%3D%3D">
            <p>
              <FaLink /> 153.world.cs 바로가기{" "}
            </p>
          </a>

          <p className={styles.subTitle}>유튜브</p>
          <a href="https://www.youtube.com/@153worldchristianschool">
            <p>
              <FaLink /> 153 월드크리스천스쿨 바로가기
            </p>
          </a>
        </div>
      </div>
    </>
  );
}

export default ContectPage;
