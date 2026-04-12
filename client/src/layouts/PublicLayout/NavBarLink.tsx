import clsx from "clsx";
import { NavLink } from "react-router";
import { twMerge } from "tailwind-merge";

interface NavBarLinkProps {
  label: string;
  path: string;
  callback?: () => void;
}

function NavBarLink({ label, path, callback }: NavBarLinkProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(
          "text-label-lg hover:text-accent transition-all duration-200",
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
