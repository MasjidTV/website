// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "MasjidTV";
export const SITE_DESCRIPTION =
  "MasjidTV adalah sistem untuk memaparkan waktu solat semasa dan informasi terkini yang berkaitan.";

export const GITHUB_URL =
  "https://github.com/shadcnblocks/mainline-astro-template";

export const SITE_METADATA = {
  title: {
    default: "MasjidTV",
    template: "%s | MasjidTV",
  },
  description:
    "MasjidTV adalah sistem untuk memaparkan waktu solat semasa dan informasi terkini yang berkaitan.",
  keywords: [
    "Astro",
    "astro template",
    "astro theme",
    "astro starter",
    "shadcn template",
    "shadcn theme",
    "shadcn starter",
    "tailwind template",
    "tailwind theme",
    "tailwind starter",
    "mdx template",
    "mdx theme",
    "mdx starter",
  ],
  authors: [{ name: "shadcnblocks.com" }],
  creator: "shadcnblocks.com",
  publisher: "shadcnblocks.com",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "MasjidTV",
    description:
      "MasjidTV adalah sistem untuk memaparkan waktu solat semasa dan informasi terkini yang berkaitan.",
    siteName: "MasjidTV",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MasjidTV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MasjidTV",
    description:
      "MasjidTV adalah sistem untuk memaparkan waktu solat semasa dan informasi terkini yang berkaitan.",
    images: ["/og-image.jpg"],
    creator: "@ausrobdev",
  },
};
