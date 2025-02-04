import { StaticImageData } from 'next/image';

export interface EduCardProps {
    image: StaticImageData;
    altText: string;
    title: string;
    institution: string;
    date: string;
    description: string;
    type: "degree" | "course"; // Определяет, что отображать (образование или курсы)
  }