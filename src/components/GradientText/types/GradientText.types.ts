export interface GradientTextProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    colors: string[];
    duration?: number;
    delay?: number;
    direction?: "left" | "right" | "top" | "bottom";
    easing?: string;
    loop?: boolean;
    repeat?: number;
    textShadow?: boolean;
    textShadowColor?: string;
    textShadowBlur?: number;
    textShadowOffsetX?: number;
    textShadowOffsetY?: number;
    showBorder?: boolean;
    animationSpeed?: number;
    }