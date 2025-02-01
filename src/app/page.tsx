import styles from "./page.module.scss";
import AboutMe from "@/components/AboutMe/AboutMe";
import Tech from "@/components/Tech/Tech";

export default function Home() {
  return (
    <div className={styles.page}>
      <AboutMe />
      <Tech />
    </div>
  );
}
