import FooterLink from "@/shared/components/FooterLink";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container border-t border-outline-variant/10">
      <div className="layout-container max-width-page flex-between flex-col gap-6 md:flex-row p-6 md:p-8">
        <span className="text-body-md uppercase text-on-surface-variant/70 text-center">
          © {currentYear} The Digital Scholar. All rights reserved.
        </span>
        <div className="flex gap-4">
          <FooterLink path="privacy-policy" label="Privacy Policy" />
          <FooterLink path="terms" label="Terms of Service" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
