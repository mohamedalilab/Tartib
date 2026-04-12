import { Link } from "react-router";
import NavBarLink from "./NavBarLink";
import { PUBLIC_NAV_LINKS } from "@/constants/navigation";

function Header() {

  return (
    <header className="sticky w-full py-4 border-b border-neutral-300">
      <div className="layout-container is-page flex-between gap-5">
        <Link
          className="text-headline-md italic text-primary hover:opacity-70 transition-opacity"
          to="/"
        >
          Tartib
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {PUBLIC_NAV_LINKS.map((link, idx) => (
            <NavBarLink key={idx} label={link.label} path={link.path} />
          ))}
          <Link
            to="/sign-in"
            className="btn btn-accent text-label-lg tracking-wider uppercase"
          >
            Enter Workspace
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
