"use client";

import styles from "./Job.module.scss";
import Image from "next/image";
import { JobProps } from "./types/Job.types";
import { FaReact, FaHtml5, FaGithub, FaSass } from "react-icons/fa";
import { JSX } from "react";

const technologyIcons: Record<string, JSX.Element> = {
  react: <FaReact className={styles.icon} />,
  html5: <FaHtml5 className={styles.icon} />,
  sass: <FaSass className={styles.icon} />,
  github: <FaGithub className={styles.icon} />,
};

export default function JobCard({
  image,
  altText,
  title,
  date,
  role,
  description,
  achievements = [],
  technologies = [],
}: JobProps): JSX.Element {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={image} alt={altText} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.date}>{date}</p>
        <p className={styles.role}>{role}</p>
        <p className={styles.description}>{description}</p>

        {achievements.length > 0 && (
          <div className={styles.achievements}>
            <h3 className={styles.achievementsTitle}>Key Achievements</h3>
            <ul className={styles.achievementsList}>
              {achievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {technologies.length > 0 && (
        <div className={styles.technologies}>
          <h3 className={styles.technologiesTitle}>Technologies Used</h3>
          <div className={styles.technologyIcons}>
            {technologies.map((tech, index) => (
              <div key={index}>{technologyIcons[tech] || null}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
