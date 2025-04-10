import { FC } from "react";
import { EducationCardProps } from "@/types";

export const EducationCard: FC<EducationCardProps> = ({
  title,
  major,
  degree,
  status,
  startDate,
  endDate,
}) => {
  return (
    <div className="mr-6 flex flex-col gap-2">
      <h3>{title}</h3>
      <div className="flex flex-col">
        {major && degree && (
          <span>
            {major} | {degree}
          </span>
        )}
        <span>
          {startDate} - {endDate} {endDate && <span>({status})</span>}
        </span>
      </div>
    </div>
  );
};
