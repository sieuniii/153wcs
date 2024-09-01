import React from "react";
import styles from "./Button.module.css";

function Button({ onClick, text }) {
  return (
    <button className={styles.Button} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
