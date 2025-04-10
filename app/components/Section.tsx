import { FC } from "react";
import { SectionProps } from "@/types";

export const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <div className="break-after-page">
      <h2>{title}</h2>
      <hr className="mt-4 mb-8 border-gray-300" />
      {children}
    </div>
  );
};
