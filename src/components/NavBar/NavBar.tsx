"use client";

import styles from "@/components/NavBar/NavBar.module.scss";
import { NavBarProps } from "./types/NavBar.types";
import Button from "@/components/Button/Button";

export default function NavBar({}: NavBarProps) {
  const scrollToSection = (
    id: string,
    position: ScrollLogicalPosition = "start"
  ) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: position });
    }
  };
  return (
    <nav className={styles.navbar}>
      <Button onClick={() => scrollToSection("about", "start")}>
        About Me
      </Button>
      <Button onClick={() => scrollToSection("tech", "center")}>
        Tech Stack
      </Button>
      <Button onClick={() => scrollToSection("xp", "start")}>My Journey</Button>
      <Button onClick={() => scrollToSection("ed", "start")}>Learning</Button>
    </nav>
  );
}
