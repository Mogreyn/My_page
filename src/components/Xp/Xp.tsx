import styles from "./Xp.module.scss";
import { XpProps } from "./types/Xp.types";
import JobCard from "../Job/Job";
import reco from "@/assets/images/reco.png";
import sheroes from "@/assets/images/sheroes.png";

export default function Xp({}: XpProps) {
  return (
    <section className={styles.Xp}>
      <JobCard
        image={reco}
        altText="Reco"
        title="Team Challenge"
        date="Aug 2024 - Dec 2024"
        role="Frontend Developer"
        description="Project: E-commerce Web Application Online Store"
        achievements={[
          "Developed a commercial online store using React, Vite, and TypeScript.",
          "Built and maintained React components, ensuring performance optimization and responsive design.",
          "Adapted UI for mobile devices.",
          "Fixed bugs and refactored code under mentor guidance to enhance maintainability.",
        ]}
        technologies={["react", "html5", "sass", "github"]}
      ></JobCard>
      <JobCard
        image={sheroes}
        altText="SH"
        title="SH"
        date="Jun 2024 - Aug 2024"
        role="Frontend Developer"
        description="Project: Heroes' School – Children's Education Website"
        achievements={[
          "Developed a web platform for a charitable foundation using React and MUI.",
          "Built and styled UI components, ensuring accessibility and responsiveness.",
          "Adapted UI for mobile devices.",
          "Collaborated with the team to implement new features and enhance user experience.",
        ]}
        technologies={["react", "html5", "sass", "github"]}
      ></JobCard>
    </section>
  );
}
