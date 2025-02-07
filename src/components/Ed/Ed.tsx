"use client";

import styles from "./Ed.module.scss";
import { EdProps } from "./types/Ed.types";
import EduCard from "@/components/EduCard/EduCard";
import hilell from "@/assets/images/hillel.jpg";
import sl from "@/assets/images/sl.jpeg";

export default function Ed({}: EdProps) {
  return (
    <section className={styles.Ed}>
      <EduCard
        image={sl}
        altText="Course Logo"
        institution="Self learning "
        date="2023 - Present"
        title="Frontend Development"
        type="course"
        description="Comprehensive self-learning journey in frontend development, mastering React, Next.js, TypeScript, MUI, and modern UI frameworks. Gained  expertise in building web applications."
      />
      <EduCard
        image={hilell}
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
