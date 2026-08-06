"use client";

import Starter from "../components/Starter";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Chela_One } from "next/font/google";

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
