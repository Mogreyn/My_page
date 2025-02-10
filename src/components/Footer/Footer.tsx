"use client";
import styles from "./Footer.module.scss";
import { FooterProps } from "./types/Footer.types";
import SMBtn from "../SMBtn/SMBtn";

export default function Header({}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <SMBtn />
    </footer>
  );
}
