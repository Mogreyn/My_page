"use client";

import { TechProps } from "./types/Tech.types";
import styles from "./Tech.module.scss";
import Image from "next/image";

import MuiIcon from "@/assets/images/mui.svg";
import TsIcon from "@/assets/images/ts.svg";
import ReactIcon from "@/assets/images/react.svg";
import JS from "@/assets/images/js.svg";
import Css from "@/assets/images/css.svg";
import HTML from "@/assets/images/html.svg";
import WebpackIcon from "@/assets/images/wp.svg";  

export default function Tech({}: TechProps) {
  return (
    <div className={styles.tech}>
      <Image src={JS} alt="JavaScript" className={styles.icon} />
      <Image src={ReactIcon} alt="React" className={styles.icon} />
      <Image src={TsIcon} alt="TypeScript" className={styles.icon} />
      <Image src={MuiIcon} alt="MUI" className={styles.icon} />
      <Image src={Css} alt="CSS" className={styles.icon} />
      <Image src={HTML} alt="HTML" className={styles.icon} />
      <Image src={WebpackIcon} alt="Webpack" className={styles.icon} />
    </div>
  );
}
