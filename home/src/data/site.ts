/**
 * Single source of truth for site-wide content & SEO defaults.
 * Edit copy, links, and metadata here — components read from this file.
 */

export const site = {
  name: "YTalyze",
  title: "YTalyze — Rewind your watch history",
  description:
    "Upload your watch history and get a wildly personal, screenshot-ready rewind of everything you've ever watched on YouTube.",
  /** Path (relative to the deployed site) of the 1200×630 social card. */
  ogImage: "/ytalyze-og-1200x630.png",
  themeColor: "#0B0B0C",
  twitter: "@ytalyze",
} as const;

/** Primary in-page navigation (also reused by the footer "Product" column). */
export const navLinks = [
  { href: "#heart", label: "Your rewind" },
  { href: "#how", label: "How it works" },
  { href: "#share", label: "Shareables" },
  { href: "#privacy", label: "Privacy" },
] as const;

/** Footer link columns. */
export const footerColumns = [
  {
    title: "Product",
    links: navLinks,
  },
  {
    title: "Company",
    links: [
      { href: "#", label: "About" },
      { href: "#", label: "Blog" },
      { href: "#", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Privacy policy" },
      { href: "#", label: "Terms" },
      { href: "#", label: "Data & security" },
    ],
  },
] as const;

/** Scrolling marquee phrases (rendered twice for a seamless loop). */
export const marqueeItems = [
  "Sample rewind",
  "3,902 hours watched",
  "14,326 videos",
  "38 rabbit holes",
  "Peak: 12:47 AM",
  "7 eras of taste",
  "312 videos, one channel",
] as const;
