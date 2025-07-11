import Image from "next/image";
import type { ReactNode } from "react";

interface FooterLink {
  href: string;
  label: string | ReactNode;
  icon?: string;
  isButton?: boolean;
}

const SECTIONS = [
  {
    title: "Über Trustpilot",
    links: [
      { href: "https://de.trustpilot.com/about", label: "Über uns" },
      { href: "https://business.trustpilot.com/jobs", label: "Jobs" },
      { href: "https://de.trustpilot.com/contact", label: "Kontakt" },
      { href: "https://de.trustpilot.com/blog", label: "Blog" },
      {
        href: "https://de.trustpilot.com/trust/how-reviews-work",
        label: "So funktioniert Trustpilot",
      },
      {
        href: "https://corporate.trustpilot.com/trust/trust-report-2025",
        label: "Trust Report",
      },
      { href: "https://press.trustpilot.com", label: "Presse" },
      { href: "https://investors.trustpilot.com", label: "Investor Relations" },
      {
        href: "https://apps.apple.com/app/trustpilot-reviews-ratings/id1608392803",
        label: (
          <Image
            src="https://cdn.trustpilot.net/app-store/ios/badges/de-DE.svg"
            alt="Download the Trustpilot iOS app"
            width={120}
            height={40}
          />
        ),
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        href: "https://de.trustpilot.com/trust",
        label: "Bewertungen Ihres Vertrauens",
      },
      {
        href: "https://help.trustpilot.com/s?language=de",
        label: "Hilfecenter",
      },
      { href: "https://de.trustpilot.com/users/connect", label: "Einloggen" },
      {
        href: "https://de.trustpilot.com/users/connect?signup=True",
        label: "Anmelden",
      },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      {
        href: "https://de.business.trustpilot.com",
        label: "Trustpilot Business",
      },
      {
        href: "https://de.business.trustpilot.com/features",
        label: "Produkte",
      },
      {
        href: "https://de.business.trustpilot.com/pricing",
        label: "Leistungen und Preise",
      },
      {
        href: "https://businessapp.b2b.trustpilot.com/?locale=de-de",
        label: "Login für Unternehmen",
      },
      {
        href: "https://de.business.trustpilot.com/reviews",
        label: "Blog für Unternehmen",
      },
    ],
  },
  {
    title: "Folgen Sie uns auf",
    links: [
      {
        href: "https://www.facebook.com/Trustpilot/",
        icon: "/icons/facebook.svg",
        label: "Facebook",
      },
      { href: "https://x.com/Trustpilot", icon: "/icons/x.svg", label: "X" },
      {
        href: "https://www.instagram.com/trustpilot/",
        icon: "/icons/instagram.svg",
        label: "Instagram",
      },
      {
        href: "https://www.linkedin.com/company/trustpilot/",
        icon: "/icons/linkedin.svg",
        label: "LinkedIn",
      },
      {
        href: "https://www.youtube.com/c/trustpilotreviews",
        icon: "/icons/youtube.svg",
        label: "Youtube",
      },
    ],
    isSocial: true,
  },
];

const LEGAL_LINKS: FooterLink[] = [
  {
    href: "https://de.legal.trustpilot.com",
    label: "Rechtliches",
    isButton: false,
  },
  {
    href: "https://de.legal.trustpilot.com/end-user-privacy-terms",
    label: "Datenschutzerklärung",
    isButton: false,
  },
  {
    href: "https://de.legal.trustpilot.com/for-reviewers/end-user-terms-and-conditions",
    label: "Nutzungsbedingungen",
    isButton: false,
  },
  {
    href: "https://de.legal.trustpilot.com/for-reviewers/guidelines-for-reviewers",
    label: "Richtlinien für Bewerter",
    isButton: false,
  },
  {
    href: "https://de.trustpilot.com/impressum",
    label: "Impressum",
    isButton: false,
  },
  {
    href: "https://status.trustpilot.com/",
    label: "Systemstatus",
    isButton: false,
  },
  { href: "#", label: "Cookie-Einstellungen", isButton: true },
  {
    href: "https://de.legal.trustpilot.com/for-everyone/modern-slavery-and-human-trafficking-statement",
    label: "Modern Slavery Statement",
    isButton: false,
  },
];

const Footer = () => (
  <footer className="bg-black text-white py-15" role="contentinfo">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-col md:justify-between gap-8">
        {/* Logo and Country Selector */}
        <div className="flex flex-col gap-8 min-w-[220px]">
          <div>
            <Image
              src="https://cdn.trustpilot.net/brand-assets/4.3.0/logo-white.svg"
              alt="Trustpilot-Bewertungen"
              width={140}
              height={40}
              className="mb-4"
            />
          </div>
        </div>
        {/* Footer Sections */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
          {SECTIONS.map((section) => (
            <section key={section.title} className="mb-6 md:mb-0">
              <h3 className="text-base sm:text-lg font-bold mb-2 opacity-80">
                {section.title}
              </h3>
              <ul
                className={`space-y-4 sm:space-y-5 ${
                  section.isSocial
                    ? "flex flex-row sm:flex-col gap-4 sm:gap-3 space-y-0"
                    : ""
                }`}
              >
                {section.links.map((link, i) => {
                  if (
                    section.isSocial &&
                    "icon" in link &&
                    typeof link.icon === "string"
                  ) {
                    return (
                      <li key={i}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-bold"
                          aria-label={
                            typeof link.label === "string"
                              ? link.label
                              : undefined
                          }
                        >
                          <Image
                            src={link.icon}
                            alt={
                              typeof link.label === "string" ? link.label : ""
                            }
                            width={24}
                            height={24}
                            className="w-6 h-6"
                          />
                        </a>
                      </li>
                    );
                  } else {
                    return (
                      <li key={i}>
                        {"isButton" in link && link.isButton ? (
                          <button className="underline underline-offset-2 text-base sm:text-sm py-2 w-full text-left">
                            {typeof link.label === "string" ? link.label : ""}
                          </button>
                        ) : typeof link.label === "string" ? (
                          <a
                            href={link.href}
                            className="hover:underline underline-offset-2 text-base sm:text-sm font-semibold py-2 w-full block"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <a href={link.href}>{link.label}</a>
                        )}
                      </li>
                    );
                  }
                })}
              </ul>
            </section>
          ))}
          <section>
            <h3 className="text-lg font-bold mb-2 opacity-80">
              Land auswählen
            </h3>
            <div className="flex flex-col gap-2">
              <button className="flex items-center gap-2 bg-gray-900 rounded px-3 py-2 text-sm font-medium">
                <span className="inline-block w-5 h-5 bg-gray-200 rounded-full"></span>
                <span>Deutschland</span>
                <svg
                  width="10"
                  height="10"
                  fill="currentColor"
                  className="ml-1"
                >
                  <path d="M0 3l5 5 5-5z" />
                </svg>
              </button>
            </div>
          </section>
        </div>
      </div>
      {/* Legal links and copyright */}
      <div className="mt-8  pt-4 flex flex-col md:flex-col md:justify-between items-start gap-5 text-xs opacity-80">
        <ul className="grid grid-cols-3 gap-5 mb-2 md:mb-0 md:grid-cols-6">
          {LEGAL_LINKS.map((link, i) =>
            "isButton" in link && link.isButton ? (
              <li key={i}>
                <button className="underline underline-offset-2 text-sm font-normal mb-2 opacity-80">
                  {typeof link.label === "string" ? link.label : ""}
                </button>
              </li>
            ) : (
              <li key={i}>
                {typeof link.label === "string" ? (
                  <a
                    href={link.href}
                    className="hover:underline underline-offset-2 text-sm font-normal mb-2 opacity-80"
                  >
                    {link.label}
                  </a>
                ) : (
                  <a href={link.href}>{link.label}</a>
                )}
              </li>
            )
          )}
        </ul>
        <div className="text-sm font-normal mb-2 opacity-80">
          © 2025 Trustpilot A/S. Alle Rechte vorbehalten.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
