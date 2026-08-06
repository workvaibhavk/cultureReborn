"use client";
import Lottie from "lottie-react";
import anime from "../public/loadingAnime.json";

export default function Starter() {
  return (
    <Lottie
      className="overflow-y-hidden max-h-screen flex items-center justify-center"
      animationData={anime}
      loop={false}
    />
  );
}
