import styles from "./Header.module.scss";
import { HeaderProps } from "./types/Header.types";
import GradientText from "../GradientText/GradientText";
import Slogan from "../Slogan/Slogan";

export default function Header({  }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.nameBar}>
        <GradientText
          colors={["#2b0a0a", "#4e1919", "#6e2727", "#4e1919", "#2b0a0a"]}
          animationSpeed={4}
          showBorder={false}
          className="custom-class"
        >
          <span className={styles.name}>ALEKSANDR VILGELMOV</span>
        </GradientText>{" "}
        <GradientText
          colors={["#0d0d0d", "#1a1a1a", "#400000", "#1a1a1a", "#0d0d0d"]}
          animationSpeed={5}
          showBorder={false}
          className="custom-class"
        >
          <span className={styles.spec}>FRONTEND DEVELOPER</span>
        </GradientText>{" "}
      </div>
      <Slogan> &quot;Faber est suae quisque fortunae&quot; <br /> — Cicero</Slogan>

    </header>
  );
}
