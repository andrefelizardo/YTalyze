/**
 * Single source of truth for locale-invariant site data & SEO defaults.
 * All user-facing copy (titles, labels, descriptions) lives in src/i18n/.
 */

export const site = {
  name: "YTalyze",
  /** Path (relative to the deployed site) of the 1200×630 social card. */
  ogImage: "/ytalyze-og-1200x630.png",
  themeColor: "#0B0B0C",
  twitter: "@ytalyze",
} as const;

/**
 * Primary in-page navigation (also reused by the footer "Product" column).
 * `key` indexes the localized label in `dict.nav`.
 */
export const navLinks = [
  { href: "#heart", key: "heart" },
  { href: "#how", key: "how" },
  { href: "#share", key: "share" },
  { href: "#privacy", key: "privacy" },
] as const;

/** Footer "Company" / "Legal" links — `key` indexes `dict.footer.links`. */
export const companyLinks = [
  { href: "#", key: "about" },
  { href: "#", key: "blog" },
  { href: "#", key: "contact" },
] as const;

export const legalLinks = [
  { href: "#", key: "privacyPolicy" },
  { href: "#", key: "terms" },
  { href: "#", key: "dataSecurity" },
] as const;
