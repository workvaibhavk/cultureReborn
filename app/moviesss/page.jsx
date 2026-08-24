"use client";

import React, { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { Bookmark } from "lucide-react";
import Navbar from "@/components/Navbar";

import { useRouter } from "next/navigation";
import { moviesSampleData as movies } from "@/lib/data";

import { Chela_One } from "next/font/google";

const chelaOne = Chela_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-chela-one",
});

export default function Page() {
  const RatingCircle = ({ rating }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [touchTimeout, setTouchTimeout] = useState(null);
    const [progress, setProgress] = useState(0);

    const getProgressColor = (percent) => {
      if (percent <= 10) return "#FF3B30";
      if (percent <= 25) return "#FF6B35";
      if (percent <= 40) return "#FF8E00";
      if (percent <= 55) return "#FFB800";
      if (percent <= 70) return "#FFD700";
      if (percent <= 85) return "#9ACD32";
      return "#34C759";
    };

    const handleTouchStart = () => {
      const timeout = setTimeout(() => {
        setShowTooltip(true);
      }, 800);
      setTouchTimeout(timeout);
    };

    const handleTouchEnd = () => {
      if (touchTimeout) {
        clearTimeout(touchTimeout);
        setTouchTimeout(null);
      }
      setTimeout(() => setShowTooltip(false), 2000);
    };

    return (
      <div className="absolute bottom-[-21px] right-[-21px] z-20">
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 42 42"
        >
          <circle
            cx="21"
            cy="21"
            r="18"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
          />
        </svg>

        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 42 42"
        ></svg>

        <div
          className="absolute inset-[2px] rounded-full flex items-center justify-center"
          style={{ backgroundColor: "#120F0F" }}
        >
          <span className="text-white text-[12px] font-medium"></span>
        </div>

        <div className="text-center">
          <span
            className="text-[11px] font-medium whitespace-nowrap"
            style={{ color: "#B3B3B3" }}
          ></span>
        </div>
      </div>
    );
  };

  const router = useRouter();

  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const TiltCard = ({ children }) => {
    const tiltRef = useRef(null);

    useEffect(() => {
      if (tiltRef.current) {
        VanillaTilt.init(tiltRef.current, {
          max: 15,
          speed: 400,
          scale: 1.065555,
          glare: true,
          "max-glare": 0.14,
          gyroscope: true,
        });
      }
      return () => tiltRef.current?.vanillaTilt?.destroy();
    }, []);

    return (
      <div className="w-full h-full overflow-hidden relative">
        <div
          ref={tiltRef}
          className="w-full h-full will-change-transform transition-transform"
        >
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className={chelaOne.className}>
      <Navbar />
      <div className="bg-none text-white w-full">
        <h1 className="Title-txt opacity-50 p-50 text-[240px] justify-self-center tracking-[2px] font-[100]">
          Now Showing
        </h1>

        <div className="px-6 relative">
          <div className="grid grid-cols-4 w-9/12 mx-auto">
            {movies.map((movie) => (
              <div className="flex flex-col items-center space-y-2 movie-tilt-wrapper relative w-[340px] h-[510px] overflow-visible rounded-2xl">
                <TiltCard>
                  <div
                    onClick={() => {
                      router.push(`/movie/${movie.id}`);
                    }}
                    className="w-[340px] h-[510px] rounded-xl overflow-hidden cursor-pointer relative"
                  >
                    <img
                      src={movie.poster_url}
                      // onError={(e) => (e.target.src = "/image.jpg")}
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />

                    <RatingCircle rating={movie.rating} />
                  </div>
                </TiltCard>
                <h3 className="movie_title text-white text-xl font-medium">
                  {movie.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
