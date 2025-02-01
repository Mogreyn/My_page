import styles from "./GradientText.module.scss"; 
import { GradientTextProps } from "./types/GradientText.types";
import clsx from "clsx"; 

export default function GradientText({
  children,
  className = "",
  colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"],
  animationSpeed = 8,
  showBorder = false,
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    backgroundSize: "300% 100%", 
    animation: `gradient ${animationSpeed}s ease-in-out infinite`,
  };

  return (
    <div className={clsx(styles.animatedGradientText, className)}>
      {showBorder && (
        <div className={styles.gradientOverlay} style={gradientStyle}></div>
      )}
      <div className={styles.textContent} style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}
