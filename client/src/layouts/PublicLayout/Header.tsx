import React from "react";
import { Link } from "react-router";
import NavBarLink from "./NavBarLink";
import { PUBLIC_LINKS } from "@/shared/constants/navigation";
import MenuToggleBtn from "@/shared/components/MenuToggleBtn";
import MobileMenu from "./MobileMenu";
import Overlay from "@/shared/components/Overlay";

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
    <header className="sticky top-0 z-100 surface-low w-full md:h-20 h-16 md:py-4 py-2.5 md:px-4 border-b border-neutral-300">
      <div className="layout-container max-width-page flex-between gap-5 z-80">
        <Link
          className="text-headline-md italic text-primary"
          to="/"
        >
          Tartib
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {PUBLIC_LINKS.map((link) => (
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
