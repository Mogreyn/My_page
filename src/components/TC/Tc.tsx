import styles from "./Tc.module.scss";
import { TcProps } from "./types/Tc.types";
import Image from "next/image";
import reco from "@/assets/images/reco.png";
import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa"; // Для иконок технологий

export default function Tc({}: TcProps) {
  return (
      <div className={styles.XpContainer}>
        <div className={styles.image_container}>
          <Image
            className={styles.image}
            src={reco}
            alt="Description of the image"
            width={250}
            height={250}
          />
        </div>

        <div className={styles.aboutXpContent}>
          <h2 className={styles.title}>Team Challenge</h2>
          <p className={styles.date}>Jan 2023 - Present</p>
          <p className={styles.role}>Frontend Developer</p>
          <p className={styles.text}>
            At this role I was responsible for developing React-based components
            for a web app. I worked with a team of developers to deliver new
            features and optimize performance. I also worked on the mobile
            version of the app.
          </p>

          <div className={styles.achievements}>
            <h3 className={styles.achievementsTitle}>Key Achievements</h3>
            <ul className={styles.achievementsList}>
              <li>Successfully developed React-based components</li>
              <li>Optimized performance for mobile devices</li>
              <li>Worked with a team to deliver new features</li>
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
