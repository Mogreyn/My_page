import styles from "./Xp.module.scss";
import { XpProps } from "./types/Xp.types";
import Tc from "../TC/Tc";

export default function Xp({}: XpProps) {
  return (
    <section className={styles.Xp}>
     <Tc />
    </section>
  );
}
