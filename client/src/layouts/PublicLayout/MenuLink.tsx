import type { LinkInfoProps } from "@/types";
import clsx from "clsx";
import { NavLink } from "react-router";
import { twMerge } from "tailwind-merge";

interface MenuLinkProps extends LinkInfoProps {
  callback?: () => void;
}

function MenuLink({ label, path, callback }: MenuLinkProps) {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          clsx(
            "size-full text-label-md hover:text-accent uppercase block py-2 transition-all duration-200 border-b border-transparent hover:pl-2 hover:border-accent",
            twMerge("text-on-surface-variant", isActive && "text-accent"),
          )
        }
        to={path}
        onClick={callback}
      >
        {label || "link"}
      </NavLink>
    </li>
  );
}

export default MenuLink;
