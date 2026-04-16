import type { LinkInfoProps } from "@/types";
import clsx from "clsx";
import { NavLink } from "react-router";
import { twMerge } from "tailwind-merge";

interface NavBarLinkProps extends LinkInfoProps {
  callback?: () => void;
}

function NavBarLink({ label, path, callback }: NavBarLinkProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(
          "text-label-md hover:text-accent uppercase transition-all duration-200 border-b border-transparent hover:border-accent",
          twMerge("text-on-surface-variant", isActive && "text-accent")
        )
      }
      to={path}
      onClick={callback}
    >
      {label || "link"}
    </NavLink>
  );
}

export default NavBarLink;
