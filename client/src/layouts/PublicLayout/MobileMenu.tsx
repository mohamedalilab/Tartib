import { Link } from "react-router";
import { PUBLIC_LINKS } from "@/shared/constants/navigation";
import MenuLink from "./MenuLink";
import { ThemeToggleBtn } from "@/features/theme/components/ThemeToggleBtn";

interface MobileMenuProps {
  closeMenu: () => void;
}

function MobileMenu({ closeMenu }: MobileMenuProps) {
  return (
    <div className="md:hidden absolute top-full left-0 w-full z-40 surface-low shadow-lg duration-150 animate-dropdown-slide">
      <nav className="p-4">
        {PUBLIC_LINKS.map((link) => (
            <MenuLink
              key={link.path}
              label={link.label}
              path={link.path}
              callback={closeMenu}
            />
        ))}

        <div className="menu-btns flex-between gap-4 mt-5">
          <Link
            to="/sign-in"
            className="btn btn-accent text-label-lg tracking-wider uppercase flex-1"
            onClick={closeMenu}
          >
            Enter Workspace
          </Link>
          <ThemeToggleBtn />
        </div>
      </nav>
    </div>
  );
}

export default MobileMenu;
