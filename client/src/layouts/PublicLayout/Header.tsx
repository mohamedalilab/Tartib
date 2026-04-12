import React from "react";
import { Link } from "react-router";
import NavBarLink from "./NavBarLink";
import { PUBLIC_NAV_LINKS } from "@/shared/constants/navigation";
import MenuToggleBtn from "@/shared/components/MenuToggleBtn";
import MobileMenu from "./MobileMenu";
import Overlay from "@/shared/components/overlay";

function Header() {
  // mobile menu display state
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  // handle toggle mobile menu display
  const toggleDropMenu = () => {
    setIsOpen((prev) => !prev);
  };
  
  // handle close mobile menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky surface-low w-full h-16 md:py-4 py-2.5 md:px-4 border-b border-neutral-300">
      <div className="layout-container is-page flex-between gap-5 z-80">
        <Link
          className="text-headline-md italic text-primary hover:opacity-70 transition-opacity"
          to="/"
        >
          Tartib
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {PUBLIC_NAV_LINKS.map((link) => (
            <NavBarLink key={link.path} label={link.label} path={link.path} />
          ))}
          <Link
            to="/sign-in"
            className="btn btn-accent text-label-lg tracking-wider uppercase"
          >
            Enter Workspace
          </Link>
        </nav>
        <MenuToggleBtn isOpen={isOpen} callback={toggleDropMenu} />
      </div>
      {isOpen && <Overlay isOpen={isOpen} callback={closeMenu} />}
      {isOpen && <MobileMenu closeMenu={closeMenu} />}
    </header>
  );
}

export default Header;
