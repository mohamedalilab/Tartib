import React from "react";
import { Link } from "react-router";
import NavBarLink from "./NavBarLink";
import { PUBLIC_LINKS } from "@/shared/constants/navigation";
import MenuToggleBtn from "@/shared/components/MenuToggleBtn";
import MobileMenu from "./MobileMenu";
import Overlay from "@/shared/components/Overlay";
import { ThemeToggleBtn } from "@/features/theme/components/ThemeToggleBtn";

import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

const MOBILE_MEDIA = "(max-width: 768px)";

function Header() {
  // mobile menu display state
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const isMobile = useMediaQuery(MOBILE_MEDIA);

  // handle toggle mobile menu display
  const toggleDropMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // handle close mobile menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // auto close mobile menue after resizing to desktop
  React.useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  return (
    <header className="sticky top-0 z-100 surface-low w-full md:h-20 h-16 md:py-4 py-2.5 md:px-4">
      <div className="layout-container max-width-page flex-between gap-5 z-80">
        <Link className="text-headline-md italic text-primary" to="/">
          Tartib
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {PUBLIC_LINKS.map((link) => (
            <NavBarLink key={link.path} label={link.label} path={link.path} />
          ))}
          <Link
            to="/sign-in"
            className="btn btn-accent text-label-md tracking-wider uppercase"
          >
            Enter Workspace
          </Link>
          <ThemeToggleBtn />
        </nav>
        <MenuToggleBtn isOpen={isOpen} callback={toggleDropMenu} />
      </div>
      {isOpen && <MobileMenu closeMenu={closeMenu} />}
      {isOpen && isMobile && <Overlay isOpen={isOpen} onClose={closeMenu} />}
    </header>
  );
}

export default Header;
