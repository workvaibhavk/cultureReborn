"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { moviesSampleData as movies } from "@/lib/data";
import { Chela_One } from "next/font/google";
import useUser from "@/lib/useUser";
import Link from "next/link";

const chelaOne = Chela_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-chela-one",
});

export default function Page() {

  const {userData, isLoaded} = useUser();

  if (!isLoaded) return <p> Loading ....</p>;
  
if(isLoaded){
if(!userData) console.warn("failed to get user!")
}
  console.log(userData, isLoaded)

  const [loading, setLoading] = useState(false)


  const handleSubmit = async () => {

    try {
      setLoading(true)
      const response = await fetch("/api/get-movies");

      if (!response.ok) {
        console.log("Error fetching movies from db", response)
      }

      const data = await response.json()
      console.log(data)
    }
    catch (err) {
      console.log("Error: ", err)
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    handleSubmit();
  },[])

  const router = useRouter();

  return (
    <div className={chelaOne.className}>
      <Navbar />
      <div className="bg-none text-white w-full">

<Link href="/reset-password" className="bg-white rounded-md text-black py-2 px-3 text-xl cursor-pointer">
    Reset Password
</Link>

        <h1 className="Title-txt opacity-50 p-50 text-9xl justify-self-center tracking-[2px] font-[100]">
          Now Showing
        </h1>

        <div className="px-6 relative">
          <div className="grid grid-cols-4 w-9/12 mx-auto">
            {movies.map((movie) => (
              <div key={movie.id} className="flex flex-col items-center space-y-2 movie-wrapper relative w-[340px] h-[510px] overflow-visible rounded-2xl">
                <div
                  onClick={() => {
                    router.push(`/movie/${movie.id}`);
                  }}

                  className="w-[255px] h-[382px] rounded-xl overflow-hidden cursor-pointer relative"
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
