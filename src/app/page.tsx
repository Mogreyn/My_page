"use client"
import styles from "./page.module.scss";
import AboutMe from "@/components/AboutMe/AboutMe";
import Tech from "@/components/Tech/Tech";
import Xp from "@/components/Xp/Xp";
import Ed from "@/components/Ed/Ed";
import AnimatedWrapper from "@/components/AnimatedWrapper/AnimatedWrapper";

export default function Home() {
  return (
    <div className={styles.page}>
      <section id="about">
        <AnimatedWrapper>
          <AboutMe />
        </AnimatedWrapper>
      </section>
      <section id="tech">
        <AnimatedWrapper>
          <Tech />
        </AnimatedWrapper>
      </section>
      <section id="xp">
        <AnimatedWrapper>
          <Xp />
        </AnimatedWrapper>
      </section>
      <section id="ed">
        <AnimatedWrapper>
          <Ed />
        </AnimatedWrapper>
      </section>
    </div>
  );
}
