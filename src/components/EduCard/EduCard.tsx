import styles from "./EduCard.module.scss";
import Image from "next/image";
import { EduCardProps } from "./types/EduCard.types";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";



const educationIcons = {
  degree: <FaGraduationCap className={styles.icon} />, // Иконка для высшего образования
  course: <FaCertificate className={styles.icon} />, // Иконка для курсов
};

export default function EduCard({
  image,
  altText,
  title,
  institution,
  date,
  description,
  type,
}: EduCardProps) {
  return (
    <div className={styles.educationContainer}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={image} alt={altText} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.institution}>{institution}</p>
        <p className={styles.date}>{date}</p>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.educationType}>{educationIcons[type]}</div>
    </div>
  );
}
