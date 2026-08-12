"use client";
// src/components/Anime.jsx
import Slider from "./Slider";
import "./Anime.css";

const sliders = [
  {
    id: "slider1",
    images: [
      "/try/img1.jpg",
      "/try/img2.jpg",
      "/try/img3.jpg",
      "/try/img4.jpg",
      "/try/img5.jpg",
      "/try/img6.jpg",
      "/try/img7.jpg",
      "/try/img8.jpg",
    ],
    direction: "left",
  },
];

const Anime = () => {
  return (
    <div className="anime-wrapper text-white">
      <h1 className="main-txt text-[55px] leading-14 md:leading-normal md:text-[70px] "> For the Cinema, For you</h1>
      <section className="slider-container">
        {sliders.map((slider) => (
          <Slider
            key={slider.id}
            id={slider.id}
            images={slider.images}
            direction={slider.direction}
          />
        ))}
      </section>
    </div>
  );
};

export default Anime;
