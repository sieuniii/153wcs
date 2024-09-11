import React, { useEffect, useState } from "react";
import styles from "./ContectPage.module.css";
import BackgroundComponent from "../../components/common/BackgroundComponent";
import TitleComponent from "../../components/common/TitleComponent";
import image1 from "../../assets/img/학교소개.jpg";
import markerImg from "../../assets/img/marker.png"; // marker라는 이름에서 markerImg로 변경
import { FaLink } from "react-icons/fa6";

function ContectPage() {
  const [isMapLoaded, setIsMapLoaded] = useState(false); // API 로드 상태

  useEffect(() => {
    // Kakao Maps API 동적 로드
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_APP_JAVA_SCRIPT_KEY
    }&autoload=false&libraries=services,clusterer,drawing`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Kakao Maps API가 로드된 후에 호출
      window.kakao.maps.load(() => {
        setIsMapLoaded(true); // Kakao Maps API가 완전히 로드된 후 상태 변경
      });
    };

    return () => {
      document.head.removeChild(script); // 컴포넌트가 언마운트되면 스크립트 제거
    };
  }, []);

  useEffect(() => {
    if (isMapLoaded) {
      const container = document.getElementById("map"); // 지도를 그릴 HTML 요소
      const options = {
        center: new window.kakao.maps.LatLng(37.488526, 126.825038), // 지도 중심 좌표
        level: 2, // 지도 줌 레벨
      };
      const map = new window.kakao.maps.Map(container, options); // 지도 생성

      // 마커 추가
      const markerImage = new window.kakao.maps.MarkerImage(
        markerImg, // 이미지 파일을 변수로 교체
        new window.kakao.maps.Size(100, 100)
      );
      const markerPosition = new window.kakao.maps.LatLng(
        37.488526,
        126.825038
      );
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
      });

      marker.setMap(map); // 마커를 지도에 표시
    }
  }, [isMapLoaded]); // Kakao Maps API가 로드된 후에만 실행

  if (!isMapLoaded) {
    return <div>Loading map...</div>; // 지도 로드 전 로딩 표시
  }

  return (
    <>
      <BackgroundComponent image={image1} />
      <div className={styles.contentSection}>
        <TitleComponent text="찾아오시는 길" />
        {/* 지도 요소 */}
        <div id="map" className={styles.map}></div>

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
            서울 지하철 1,7호선 온수역 1,2,3번 출구 {">"} 인천방향 52,57 버스
            승차{">"}유한대학교 하차
          </p>
        </div>

        <TitleComponent text="연락처" />
        <div className={styles.textContent}>
          <p className={styles.subTitle}>전화</p>
          <p>032-341-0153</p>

          <p className={styles.subTitle}>이메일</p>
          <p>153.wc.school@gmail.com</p>

          <p className={styles.subTitle}>카카오톡 채널</p>
          <a
            href="https://pf.kakao.com/_UUxkxdK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              <FaLink /> 153 WCS 카카오톡 바로 문의하기
            </p>
          </a>

          <p className={styles.subTitle}>인스타그램</p>
          <a
            href="https://www.instagram.com/153.world.cs?igsh=MXQ2ajdxZ25nMTRtZQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              <FaLink /> 153.world.cs 바로가기{" "}
            </p>
          </a>

          <p className={styles.subTitle}>유튜브</p>
          <a
            href="https://www.youtube.com/@153worldchristianschool"
            target="_blank"
            rel="noopener noreferrer"
          >
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
