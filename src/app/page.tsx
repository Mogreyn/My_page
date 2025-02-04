import styles from "./page.module.scss";
import AboutMe from "@/components/AboutMe/AboutMe";
import Tech from "@/components/Tech/Tech";
import Xp from "@/components/Xp/Xp";
import Ed from "@/components/Ed/Ed";

export default function Home() {
  return (
    <div className={styles.page}>
      <AboutMe />
      <Tech />
      <Xp />
      <Ed />
    </div>
  );
}
