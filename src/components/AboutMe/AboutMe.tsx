import styles from "./AboutMe.module.scss";
import { AboutMeProps } from "./types/AboutMe.types";
import Image from "next/image";
import myPhoto from "@/assets/images/MyPhoto.jpg";

export default function AboutMe({}: AboutMeProps) {
  return (
    <section className={styles.aboutMe}>
      <div className={styles.text_container}>
        <div className={styles.aboutMeContent}>
          <h2 className={styles.title}>ABOUT ME</h2>
          <p className={styles.text}>
            I’m a frontend developer who loves turning ideas into clean,
            functional, and visually appealing web experiences. I enjoy working
            with modern technologies and continuously improving my skills to
            create user-friendly and engaging applications. Always eager to take
            on new challenges and grow as a developer.
          </p>
        </div>
      </div>
      <div className={styles.photo}>
        <Image src={myPhoto} alt="My Photo" />{" "}
      </div>
    </section>
  );
}
