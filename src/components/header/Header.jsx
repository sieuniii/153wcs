import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/img/로고.png";

function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
        <p>153 WORLD CHRISTIAN SCHOOL</p>
      </div>
      <nav className={styles.menu}>
        <a href="/" className={styles.menuItem}>
          학교 소개
        </a>
        <a href="/" className={styles.menuItem}>
          입학안내
        </a>
        <a href="/" className={styles.menuItem}>
          교육과정
        </a>
        <a href="/" className={styles.menuItem}>
          학교생활
        </a>
        <a href="/" className={styles.menuItem}>
          게시판
        </a>
      </nav>
    </header>
  );
}

export default Header;
