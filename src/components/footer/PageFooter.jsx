import React from "react";
import styles from "./PageFooter.module.css";
import logo from "../../assets/img/로고.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";

function PageFooter() {
  return (
    <div className={styles.PageFooter}>
      <img className={styles.logo} src={logo} alt="Logo" />
      <div className={styles.infoSection}>
        14780 경기도 부천시 안곡로 194번길 14 유한대학교 입구 우측 길
        153월드크리스천스쿨
        <br />
        Tel. 032-341-0153
        <br />
        Email. 153.wc.school@gmail.com
        <br />
        후원 계좌 131-019-414916 (신협은행)
        <br />
      </div>
      <div className={styles.snsSection}>
        <a
          href="https://www.instagram.com/153.world.cs?igsh=MXQ2ajdxZ25nMTRtZQ%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://www.youtube.com/@153worldchristianschool"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <FaYoutube />
        </a>
        <a
          href="http://pf.kakao.com/_UUxkxdK"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <RiKakaoTalkFill />
        </a>
      </div>
    </div>
  );
}

export default PageFooter;
