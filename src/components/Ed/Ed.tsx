import styles from "./Ed.module.scss";
import { EdProps } from "./types/Ed.types";
import EduCard from "@/components/EduCard/EduCard";
import hilelle from "@/assets/images/hillel.png";

export default function Ed({}: EdProps) {
  return (
    <section className={styles.Ep}>
      <EduCard
        image={hilelle}
        altText="Course Logo"
        institution="IT  School "
        date="2024"
        title="Frontend Development"
        type="course"
        description="Advanced frontend development course covering React, JavaScript, HTML/CSS/SCSS and modern UI frameworks."
      />
    </section>
  );
}
