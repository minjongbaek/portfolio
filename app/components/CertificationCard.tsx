import { FC } from "react";
import { CertificationCardProps } from "@/types";

export const CertificationCard: FC<CertificationCardProps> = ({
  title,
  date,
  issuer,
}) => {
  return (
    <div className="mr-6 flex flex-col gap-2">
      <h3>{title}</h3>
      <div className="flex flex-col">
        <span>{issuer}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};
