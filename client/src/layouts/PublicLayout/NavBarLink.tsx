import clsx from "clsx";
import { NavLink } from "react-router";
import { twMerge } from "tailwind-merge";

interface NavBarLinkProps {
  label: string;
  path: string;
}

function NavBarLink({ label, path }: NavBarLinkProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(
          "text-label-lg hover:text-accent transition-all duration-200",
          twMerge("text-on-surface-variant", isActive && "text-accent")
        )
      }
      to={path}
    >
      {label || "link"}
    </NavLink>
  );
}

export default NavBarLink;
