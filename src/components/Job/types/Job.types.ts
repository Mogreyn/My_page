import { StaticImageData } from 'next/image';

export interface JobProps {
    className?: string;
    image: StaticImageData;
    altText: string;
    title: string;
    date: string;
    role: string;
    description: string;
    achievements: string[];
    technologies: string[];
    }