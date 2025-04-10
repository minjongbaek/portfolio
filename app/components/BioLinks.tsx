import { FC } from "react";

interface BioLink {
  label: string;
  href: string;
}

interface BioLinksProps {
  links: BioLink[];
}

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
