import Image from "next/image";
import { FC } from "react";
import { ExperienceCardProps } from "@/types";

export const ExperienceCard: FC<ExperienceCardProps> = ({
  title,
  position,
  startDate,
  endDate,
  imagePath,
  children,
}) => {
  return (
    <div className="flex flex-col gap-8 sm:flex-row sm:gap-0">
      <div className="flex w-full shrink-0 flex-row items-center gap-2 sm:mr-6 sm:w-42 sm:flex-col sm:items-start">
        <div className="h-24 w-24 shrink-0 rounded-xl border border-gray-200/80 p-1 sm:h-20 sm:w-20">
          <Image src={imagePath} alt={title} width={120} height={120} />
        </div>
        <div className="flex w-full flex-col">
          <h3>{title}</h3>
          {position && <span>{position}</span>}
          <div className="flex flex-row gap-1 sm:flex-col sm:gap-0">
            <span>
              {startDate} - {endDate ?? "진행중"}
            </span>
            {endDate && <span>({getDuration(startDate, endDate)})</span>}
          </div>
        </div>
      </div>
      <div className="markdown grow border-gray-200/80 sm:border-l sm:pl-6">
        {children}
      </div>
    </div>
  );
};

const getDuration = (startDate: string, endDate: string): string => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diff = end.getTime() - start.getTime();
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30),
  );

  if (years === 0) {
    return `${months}개월`;
  }
  return `${years}년 ${months}개월`;
};
