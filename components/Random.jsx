"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import VanillaTilt from "vanilla-tilt";
import { Bookmark, ChevronLeft, ChevronRight } from "lucide-react";

import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/navigation";
import {moviesSampleData as movies} from '@/lib/data'

const Random = () => {

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
  const swiperRef = useRef(null);

  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavButtons = (swiper) => {
    console.log("updateNavBtn called");
    console.log("is Beginning", swiper.isBeginning);
    console.log("is End", swiper.isEnd);

    setIsStart(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

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
    <div className="bg-none text-white w-full">
      <h1 className="Title-txt opacity-50 p-50 text-7xl md:text-[240px] justify-self-center tracking-[2px] font-[100]">
        Trending
      </h1>

      <div style={{"margin": "auto",}} className="main-swiper-cnt px-6 relative w-10/12 mx-auto flex items-center justify-center" >
        <button
          className={`custom-prev transition-opacity duration-300 absolute top-1/2 left-0 z-10 transform -translate-y-1/2 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-105 transition cursor-pointer ${
            isStart ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <ChevronLeft />
        </button>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            console.log("Swiper is initiated", swiper);

            setIsStart(swiper.isBeginning);
            setIsEnd(swiper.isEnd);

            setTimeout(() => {
              updateNavButtons(swiper);
            }, 100);
          }}
          onSlideChange={(swiper) => {
            updateNavButtons(swiper);
          }}
          onProgress={(swiper) => {
            updateNavButtons(swiper);
          }}
          spaceBetween={16}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          centeredSlides={false}
          centeredSlidesBounds={true}
          modules={[Navigation]}
          breakpoints={{
            400: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 6 },
          }}
          slidesPerView={6}
          slidesPerGroup={6}
          loop={false}
          className="overflow-hidden mt-[-80px] px-6"
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id} className="flex-shrink-0 !w-auto  ">
              <div className="flex flex-col items-center space-y-2 movie-tilt-wrapper relative w-[170px] h-[280px] overflow-visible rounded-2xl">
                <TiltCard>
                  <div
                    onClick={() => {
                      router.push(`/movie/${movie.id}`);
                    }}
                    className="w-[170px] h-[255px] rounded-xl overflow-hidden cursor-pointer relative"
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
                <h3 className="movie_title text-white text-sm font-medium">
                  {movie.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className={`custom-next absolute top-1/2 right-0 z-10 transform -translate-y-1/2 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-105 transition cursor-pointer ${
            isEnd ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Random;
