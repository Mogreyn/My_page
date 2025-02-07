"use client";

import styles from './Slogan.module.scss';

export interface SloganProps {
  children: React.ReactNode;
}
export default function Slogan({ children }: SloganProps) {
  return (
    <div className={styles.slogan}>
      <p className={styles.text}>{children}</p>
    </div>
  );
}
 