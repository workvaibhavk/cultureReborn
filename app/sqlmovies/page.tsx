"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { moviesSampleData as movies } from "@/lib/data";
import { Chela_One } from "next/font/google";
import useUser from "@/lib/useUser";

const chelaOne = Chela_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-chela-one",
});

export default function Page() {
  const [loading, setLoading] = useState(false);

  const { userData, isLoaded } = useUser();

  if (!isLoaded) return <p> Loading ....</p>;

  if (isLoaded) {
    if (!userData) console.warn("failed to get user!");
  }
  console.log(userData, isLoaded);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/get-movies");

      if (!response.ok) {
        console.error("Error fetching movies from db", response);
      }

      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log("Error: ", err);
    } finally {
      setLoading(false);
    }
  };

  const getMovies = () => {
    try {
      setLoading(true);
      const response = await fetch("/api/get-movies");
      if (!response.ok) {
        console.error("Error fetching movies from db", response);
      }
    } catch (err) {
    } finally {
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  const router = useRouter();

  return (
    <div className={chelaOne.className}>
      <Navbar />
      <div className="bg-none text-white w-full">
        <h1 className="Title-txt opacity-50 pb-36 pt-48 text-9xl justify-self-center tracking-[2px] font-thin">
          Now Showing
        </h1>

        <div className="px-6 ">
          <div className="grid grid-cols-4 w-10/12 mx-auto justify-items-center">
            {movies.map((movie) => (
              <div
                key={movie.movie_id}
                className="flex flex-col items-center space-y-2 movie-wrapper  w-86 h-128 overflow-visible rounded-2xl"
              >
                <div
                  onClick={() => {
                    router.push(`/movie/${movie.movie_id}`);
                  }}
                  className="w-64 h-96 rounded-xl overflow-hidden cursor-pointer "
                >
                  <img
                    src={movie.poster_url}
                    // onError={(e) => (e.target.src = "/image.jpg")}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="movie_title text-white text-2xl font-medium">
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
