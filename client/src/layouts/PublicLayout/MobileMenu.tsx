import { Link } from "react-router";
import { PUBLIC_NAV_LINKS } from "@/shared/constants/navigation";
import NavBarLink from "./NavBarLink";

interface MobileMenuProps {
  closeMenu: () => void;
}

function MobileMenu({ closeMenu }: MobileMenuProps) {
  return (
    <div className="md:hidden absolute top-full left-0 w-full surface-low shadow-lg duration-150 animate-dropdown-slide">
      <nav className="flex flex-col gap-4 p-4">
        {PUBLIC_NAV_LINKS.map((link) => (
          <NavBarLink
            key={link.path}
            label={link.label}
            path={link.path}
            callback={closeMenu}
          />
        ))}

        <Link
          to="/sign-in"
          className="btn btn-accent text-label-lg tracking-wider uppercase"
          onClick={closeMenu}
        >
          Enter Workspace
        </Link>
      </nav>
    </div>
  );
}

export default MobileMenu;
