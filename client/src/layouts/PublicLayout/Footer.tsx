import { CONTACT_LINKS, PUBLIC_LINKS } from "@/shared/constants/navigation";
import FooterLink from "./FooterLink";

function Footer() {
  // get current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-15 px-5 surface-mid">
      <div className="layout-container max-width-page grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="text-headline-md text-primary italic">Tartib</div>
          <p className="text-body-md text-secondary max-w-sm">
            A Scholar's Productivity Tool. Crafting space for deep thought and
            structured output in an age of distraction.
          </p>
          <p className="text-body-md text-secondary uppercase">
            © {currentYear} Tartib. All rights reserved.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-20">
          <div className="space-y-4">
            <h5 className="text-title-lg font-sans uppercase text-primary">
              explore
            </h5>
            <ul className="space-y-2 capitalize">
              {PUBLIC_LINKS.map((link) => (
                <FooterLink
                  key={link.label}
                  label={link.label}
                  path={link.path}
                />
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-title-lg font-sans uppercase text-primary">
              contact
            </h5>
            <ul className="space-y-2 capitalize">
              {CONTACT_LINKS.map((link) => (
                <FooterLink
                  key={link.label}
                  label={link.label}
                  path={link.path}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
