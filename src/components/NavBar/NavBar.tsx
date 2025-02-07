"use client";

import styles from "@/components/NavBar/NavBar.module.scss";
import { NavBarProps } from "./types/NavBar.types";
import Button from "@/components/Button/Button";
import { NAV_ITEMS } from "@/config/navigation";
import { useScrollTo } from "@/hooks/useScrollTo";

export default function NavBar({
}: NavBarProps) {
  const { scrollToSection } = useScrollTo();
  return (
    <nav className={styles.navbar}>
      {NAV_ITEMS.map(({ sectionId, label, scrollPosition }) => (
        <Button
          key={sectionId}
          onClick={() => scrollToSection(sectionId, scrollPosition)}
        >
          {label}
        </Button>
      ))}
    </nav>
  );
}
