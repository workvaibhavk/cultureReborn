import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Culture | For the Cinema. For You.",
  description:
    "Discover movies, explore their culture, and book your cinema experience with Culture — a movie discovery and ticket booking platform built for cinephiles.",
  keywords: [
    "Culture",
    "movie discovery",
    "movie booking",
    "cinema",
    "movie tickets",
    "movies",
    "cinephile",
    "theatre booking",
    "film culture",
  ],

  openGraph: {
    title: "Culture | For the Cinema. For You.",
    description:
      "Discover movies, explore their culture, and book your cinema experience. Trust, that's Culture. Quality, that's Culture.",
    url: "https://culturereborn.vercel.app",
    siteName: "Culture",
    images: [
      {
        url: "https://culturereborn.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Culture — For the Cinema. For You.",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Culture | For the Cinema. For You.",
    description:
      "Discover movies, explore their culture, and book your cinema experience with Culture.",
    images: ["https://culturereborn.vercel.app/og-image.png"],
  },

  alternates: {
    canonical: "https://culturereborn.vercel.app",
  },

  metadataBase: new URL("https://culturereborn.vercel.app"),

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        {children}
      </body>
    </html>
  );
}
