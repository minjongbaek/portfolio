import { FC } from "react";
import { BioLinksProps } from "@/types";

export const BioLinks: FC<BioLinksProps> = ({ links }) => {
  return (
    <div className="flex gap-4">
      {links.map(({ label, href }) => (
        <a key={label} href={href} target="_blank">
          {label}
        </a>
      ))}
    </div>
  );
};
