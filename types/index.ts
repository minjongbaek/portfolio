import { ReactNode } from "react";

export interface EducationCardProps {
  title: string;
  major?: string;
  degree?: string;
  status: string;
  startDate: string;
  endDate: string;
}

export interface CertificationCardProps {
  title: string;
  date: string;
  issuer: string;
}

export interface ExperienceCardProps {
  title: string;
  position?: string;
  startDate: string;
  endDate?: string;
  imagePath: string;
  children: ReactNode;
}

export interface BioLink {
  label: string;
  href: string;
}

export interface BioLinksProps {
  links: BioLink[];
}

export interface SectionProps {
  title: string;
  isBreak?: boolean;
  children: ReactNode;
}
