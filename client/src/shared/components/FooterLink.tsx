import type { LinkInfoProps } from "@/types";
import { Link } from "react-router";

function FooterLink({ label, path }: LinkInfoProps) {
  return (
    <li>
      <Link
        className="text-label-lg text-secondary hover:text-accent hover:border-b border-accent"
        to={path}
        title={path}
      >
        {label}
      </Link>
    </li>
  );
}

export default FooterLink;
