"use client";

import styles from "./Button.module.scss";
import {ButtonProps} from "./types/Button.types";


export default function Button({children, onClick}: ButtonProps) {
  return (
    <button onClick={onClick} className={styles.btn}>{children}</button>
  );
}