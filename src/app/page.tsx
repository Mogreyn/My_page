import styles from "./page.module.scss";
import AboutMe from "@/components/AboutMe/AboutMe";
import Tech from "@/components/Tech/Tech";
import Xp from "@/components/Xp/Xp";

export default function Home() {
  return (
    <div className={styles.page}>
      <AboutMe />
      <Tech />
      <Xp />
    </div>
  );
}
