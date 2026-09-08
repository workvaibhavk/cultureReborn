"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import VanillaTilt from "vanilla-tilt";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/navigation";
import { moviesSampleData as movies } from "@/lib/data";

const Random = () => {
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
      <h1 className="Title-txt opacity-50 p-50 text-7xl md:text-[240px] justify-self-center tracking-[2px] font-thin">
        Trending
      </h1>

      <div
        style={{ margin: "auto" }}
        className="main-swiper-cnt px-6 relative w-10/12 mx-auto flex items-center justify-center"
      >
        <button
          className={`custom-prev transition duration-300 absolute top-1/2 left-0 z-10 transform -translate-y-1/2 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-105 cursor-pointer ${
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
          className="overflow-hidden -mt-20 px-6"
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.movie_id} className="shrink-0 w-auto!  ">
              <div className="flex flex-col items-center space-y-2 movie-tilt-wrapper relative w-42 h-70 overflow-visible rounded-2xl">
                <TiltCard>
                  <div
                    onClick={() => {
                      router.push(`/movie/${movie.movie_id}`);
                    }}
                    className="w-42 h-64 rounded-xl overflow-hidden cursor-pointer relative"
                  >
                    <img
                      src={movie.poster_url}
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />
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
