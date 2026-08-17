"use client";

import { Metadata } from "next";
import Starter from "../components/Starter";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Chela_One } from "next/font/google";

export async function generateMetadata(): Promise<Metadata> {
  return {
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
      images: ["https://culture.vercel.app/og-image.png"],
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
    }

const chelaOne = Chela_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-chela-one",
});
import Random from "../components/Random";
import FilteredByGenres from "../components/FilteredByGenres";

import Anime from "../components/Anime";

export default function Page() {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3957); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className={chelaOne.className}>
      {isVisible && <Starter />}
      <Navbar />
      <Anime />
      <Footer />
      <Random />
      <FilteredByGenres />

    </div>
  );
}
