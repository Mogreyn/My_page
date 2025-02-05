import styles from "./page.module.scss";
import AboutMe from "@/components/AboutMe/AboutMe";
import Tech from "@/components/Tech/Tech";
import Xp from "@/components/Xp/Xp";
import Ed from "@/components/Ed/Ed";
import AnimatedWrapper from "@/components/AnimatedWrapper/AnimatedWrapper";

export default function Home() {
  return (
    <div className={styles.page}>
      <AnimatedWrapper>
        {" "}
        <AboutMe />
      </AnimatedWrapper>
      <AnimatedWrapper>
        {" "}
        <Tech />
      </AnimatedWrapper>
      <AnimatedWrapper>
        {" "}
        <Xp />
      </AnimatedWrapper>
      <AnimatedWrapper>
        {" "}
        <Ed />
      </AnimatedWrapper>
    </div>
  );
}
