// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "MasjidTV";
export const SITE_DESCRIPTION =
  "MasjidTV adalah sistem untuk memaparkan waktu solat semasa dan informasi terkini yang berkaitan.";

export const GITHUB_URL = "https://github.com/MasjidTV";

export const SITE_METADATA = {
  title: {
    default: "MasjidTV",
    template: "%s | MasjidTV",
  },
  description:
    "MasjidTV adalah sistem untuk memaparkan waktu solat semasa dan informasi terkini yang berkaitan.",
  keywords: [
    "MasjidTV",
    "masjid tv",
    "waktu solat",
    "jadual solat",
    "waktu solat semasa",
    "jadual waktu solat",
    "azan",
    "iqamah",
    "informasi masjid",
    "pengumuman masjid",
    "prayer times",
    "muslim prayer times",
    "prayer timetable",
    "mosque display system",
    "digital masjid board",
    "mosque information screen",
    "Islamic reminders",
    "Ramadan timetable",
    "jadual Ramadan",
    "Masjid Malaysia",
  ],
  authors: [{ name: "Muhammad Fareez Iqmal", url: "https://iqfareez.com" }],
  creator: "Muhammad Fareez Iqmal",
  publisher: "MasjidTV",
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
    creator: "@iqfareez",
  },
};
