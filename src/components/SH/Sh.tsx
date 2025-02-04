import styles from "./Sh.module.scss";
import { ShProps } from "./types/Sh.types";
import Image from "next/image";
import sheroes from "@/assets/images/sheroes.png";
import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa"; // Для иконок технологий

export default function Sh({}: ShProps) {
  return (
    <div className={styles.XpContainer}>
      <div className={styles.image_container}>
        <Image
          className={styles.image}
          src={sheroes}
          alt="School Heroes"
        />
      </div>
      <div className={styles.aboutXpContent}>
        <h2 className={styles.title}>SH</h2>
        <p className={styles.date}>Dec 2024 - Present</p>
        <p className={styles.role}>Frontend Developer</p>
        <p className={styles.text}>
          Project: Heroes&apos; School – Children&apos;s Education Website
        </p>

        <div className={styles.achievements}>
          <h3 className={styles.achievementsTitle}>Key Achievements</h3>
          <ul className={styles.achievementsList}>
            <li>
              Developed a web platform for a charitable foundation using React
              and Material UI.
            </li>
            <li>
              Built and styled UI components, ensuring accessibility and
              responsiveness.
            </li>
            <li>
              Collaborated with the team to implement new features and enhance
              user experience.
            </li>
          </ul>
        </div>
      </div>

      {/* Блок с используемыми технологиями */}
      <div className={styles.technologies}>
        <h3 className={styles.technologiesTitle}>Technologies Used</h3>
        <div className={styles.technologyIcons}>
          <FaReact className={styles.icon} />
          <FaHtml5 className={styles.icon} />
          <FaCss3Alt className={styles.icon} />
          <FaGithub className={styles.icon} />
        </div>
      </div>
    </div>
  );
}
