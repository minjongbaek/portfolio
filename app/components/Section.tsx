import { FC } from "react";
import { SectionProps } from "@/types";

export const Section: FC<SectionProps> = ({ title, isBreak, children }) => {
  return (
    <div className={isBreak ? "break-after-page" : ""}>
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      <hr className="mt-4 mb-8 border-gray-300" />
      {children}
    </div>
  );
};
