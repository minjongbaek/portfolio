import { FC, ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

export const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      <hr className="mt-4 mb-8 border-gray-300" />
      {children}
    </div>
  );
};
