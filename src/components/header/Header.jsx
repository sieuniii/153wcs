import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/img/로고.png";
import { FaBars, FaTimes } from "react-icons/fa"; // 햄버거 아이콘과 닫기 아이콘

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" />
        <p>153 WORLD CHRISTIAN SCHOOL</p>
      </div>

      {/* 햄버거 메뉴 (모바일 전용) */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* 모바일 슬라이드 메뉴 */}
      <div className={`${styles.slideMenu} ${isMenuOpen ? styles.open : ""}`}>
        <div className={styles.closeMenu} onClick={toggleMenu}>
          <FaTimes />
        </div>
        <div className={styles.menuItem}>
          <a href="#">학교소개</a>
          <div className={styles.dropdownMenu}>
            <a href="/page/principal">학교장 소개</a>
            <a href="/mission">153 기도문</a>
            <a href="/team">153 캠퍼스 역사</a>
            <a href="/team">학교 연혁</a>
            <a href="/team">교직원 소개</a>
            <a href="/team">학사 일정</a>
            <a href="/team">연락처</a>
          </div>
        </div>
        <div className={styles.menuItem}>
          <a href="/page/entrance">입학안내</a>
        </div>
        <div className={styles.menuItem}>
          <a href="#">교육과정</a>
          <div className={styles.dropdownMenu}>
            <a href="/page/education">교육철학</a>
            <a href="/history">ABC/P.A.C.E</a>
            <a href="/mission">초중등교육</a>
          </div>
        </div>
        <div className={styles.menuItem}>
          <a href="#">학교생활</a>
          <div className={styles.dropdownMenu}>
            <a href="/history">학교활동</a>
            <a href="/mission">스쿨버스</a>
            <a href="/team">갤러리</a>
          </div>
        </div>
        <div className={styles.menuItem}>
          <a href="#">게시판</a>
          <div className={styles.dropdownMenu}>
            <a href="/history">공지사항</a>
            <a href="/mission">뉴스</a>
            <a href="/team">채용 공고</a>
          </div>
        </div>
      </div>

      {/* 웹용 드롭다운 메뉴 */}
      <nav className={styles.menu}>
        <div className={styles.menuItem}>
          <a href="#">학교소개</a>
          <div className={styles.dropdownMenu}>
            <a href="/page/principal">학교장 소개</a>
            <a href="/mission">153 기도문</a>
            <a href="/team">153 캠퍼스 역사</a>
            <a href="/team">학교 연혁</a>
            <a href="/team">교직원 소개</a>
            <a href="/team">학사 일정</a>
            <a href="/team">연락처</a>
          </div>
        </div>
        <div className={styles.menuItem}>
          <a href="/page/entrance">입학안내</a>
        </div>
        <div className={styles.menuItem}>
          <a href="#">교육과정</a>
          <div className={styles.dropdownMenu}>
            <a href="/page/education">교육철학</a>
            <a href="/history">ABC/P.A.C.E</a>
            <a href="/mission">초중등교육</a>
          </div>
        </div>
        <div className={styles.menuItem}>
          <a href="#">학교생활</a>
          <div className={styles.dropdownMenu}>
            <a href="/history">학교활동</a>
            <a href="/mission">스쿨버스</a>
            <a href="/team">갤러리</a>
          </div>
        </div>
        <div className={styles.menuItem}>
          <a href="#">게시판</a>
          <div className={styles.dropdownMenu}>
            <a href="/history">공지사항</a>
            <a href="/mission">뉴스</a>
            <a href="/team">채용 공고</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
