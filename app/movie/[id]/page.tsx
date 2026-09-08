// "use client";

// import React from "react";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import Navbar from "@/components/Navbar";
// import MoviePageNav from "@/components/MoviePageNav";
// import { Heart, Play, Star } from "lucide-react";

// const movies = [
//   {
//     id: 1,
//     title: "Coolie",
//     sub_title: "The Powerhouse",
//     poster_url: "/MoviePosterPt/1.jpg",
//     rating: 86,
//     release_date: "2025-08-14",
//     run_time: "2h 30m",
//     thumbnail: "/MovieThumbnailPt/1.jpg",
//     short_desc:
//       "A gripping tale of action and tragedy in a crime-ridden world.",
//     tags: ["action", "thriller", "tragedy", "crime"],
//     director: "Lokesh Kanagaraj",
//     music: "Anirudh Ravichander",
//     stars: ["Rajinikanth", "Shruti Haasan", "Nagarjuna Akkineni"],
//     ott_platform: "Netflix",
//     ott_link: "https://www.netflix.com/title/coolie",
//     trailer_link: "coolie_trailer",
//     language: "Tamil",
//   },
//   {
//     id: 2,
//     title: "Peddi",
//     poster_url: "/MoviePosterPt/2.jpg",
//     rating: 84,
//     release_date: "2025-07-20",
//     run_time: "2h 15m",
//     thumbnail: "/MovieThumbnailPt/2.jpg",
//     short_desc: "An intense drama unfolding in a small town with big secrets.",
//     tags: ["drama", "mystery", "crime"],
//     director: "Karthik Subbaraj",
//     music: "Santhosh Narayanan",
//     stars: ["Vijay Sethupathi", "Trisha"],
//     ott_platform: "Amazon Prime",
//     ott_link: "https://www.amazon.com/prime/peddi",
//     trailer_link: "peddi_trailer",
//     ticketing_link: "https://www.district.com/peddi",
//     language: "Tamil",
//   },
//   {
//     id: 3,
//     title: "Superman",
//     poster_url: "/MoviePosterPt/3.jpg",
//     rating: 76,
//     release_date: "2025-06-25",
//     run_time: "2h 45m",
//     thumbnail: "/MovieThumbnailPt/3.png",
//     short_desc: "A superhero saga with epic battles and moral dilemmas.",
//     tags: ["action", "superhero", "adventure"],
//     director: "James Gunn",
//     music: "John Williams",
//     stars: ["David Corenswet", "Rachel Brosnahan", "Nicholas Hoult"],
//     ott_platform: "HBO Max",
//     ott_link: "https://www.hbomax.com/superman",
//     trailer_link: "superman_trailer",
//     ticketing_link: "https://www.district.com/superman",
//     language: "English",
//   },
//   {
//     id: 4,
//     title: "Shang Chi",
//     sub_title: "and the legend of Ten Rings",
//     poster_url: "/MoviePosterPt/4.jpg",
//     rating: 90,
//     release_date: "2021-09-03",
//     run_time: "2h 12m",
//     thumbnail: "/MovieThumbnailPt/4.jpg",
//     short_desc: "A martial arts epic with a journey of self-discovery.",
//     tags: ["action", "fantasy", "adventure"],
//     director: "Destin Daniel Cretton",
//     music: "Joel P. West",
//     stars: ["Simu Liu", "Awkwafina", "Tony Leung"],
//     ott_platform: "Disney+",
//     ott_link: "https://www.disneyplus.com/shangchi",
//     trailer_link: "shangchi_trailer",
//     ticketing_link: "https://www.district.com/shangchi",
//     language: "English",
//   },
//   {
//     id: 5,
//     title: "Vikram Vedha",
//     poster_url: "/MoviePosterPt/5.jpg",
//     rating: 74,
//     release_date: "2022-09-30",
//     run_time: "2h 27m",
//     thumbnail: "/MovieThumbnailPt/5.jpg",
//     short_desc: "A cat-and-mouse game between a cop and a gangster.",
//     tags: ["action thriller", "crime", "drama"],
//     director: "Pushkar-Gayathri",
//     music: "Sam C.S.",
//     stars: ["Hrithik Roshan", "Saif Ali Khan", "Radhika Apte"],
//     ott_platform: "Zee5",
//     ott_link: "https://www.zee5.com/vikramvedha",
//     trailer_link: "vikramvedha_trailer",
//     ticketing_link: "https://www.district.com/vikramvedha",
//     language: "Hindi",
//   },
//   {
//     id: 6,
//     title: "Vikram",
//     poster_url: "/MoviePosterPt/6.jpg",
//     rating: 83,
//     release_date: "2022-06-03",
//     run_time: "2h 55m",
//     thumbnail: "/MovieThumbnailPt/6.jpg",
//     short_desc: "A high-octane action thriller with a vigilante's quest.",
//     tags: ["action", "thriller", "crime"],
//     director: "Lokesh Kanagaraj",
//     music: "Anirudh Ravichander",
//     stars: ["Kamal Haasan", "Vijay Sethupathi", "Fahadh Faasil"],
//     ott_platform: "Disney+ Hotstar",
//     ott_link: "https://www.hotstar.com/vikram",
//     trailer_link: "vikram_trailer",
//     ticketing_link: "https://www.district.com/vikram",
//     language: "Tamil",
//   },
//   {
//     id: 7,
//     title: "KGF Chapter II",
//     poster_url: "/MoviePosterPt/7.jpg",
//     rating: 86,
//     release_date: "2022-04-14",
//     run_time: "2h 48m",
//     thumbnail: "/MovieThumbnailPt/7.jpg",
//     short_desc: "A saga of power and vengeance in the gold mines.",
//     tags: ["action", "drama", "crime"],
//     director: "Prashanth Neel",
//     music: "Ravi Basrur",
//     stars: ["Yash", "Sanjay Dutt", "Raveena Tandon"],
//     ott_platform: "Amazon Prime",
//     ott_link: "https://www.amazon.com/prime/kgfchapter2",
//     trailer_link: "kgfchapter2_trailer",
//     ticketing_link: "https://www.district.com/kgfchapter2",
//     language: "Kannada",
//   },
//   {
//     id: 8,
//     title: "Kantara",
//     poster_url: "/MoviePosterPt/8.jpg",
//     rating: 84,
//     release_date: "2022-09-30",
//     run_time: "2h 30m",
//     thumbnail: "/MovieThumbnailPt/8.jpg",
//     short_desc: "A mystical tale blending folklore and human conflict.",
//     tags: ["action", "fantasy", "drama"],
//     director: "Rishab Shetty",
//     music: "B. Ajaneesh Loknath",
//     stars: ["Rishab Shetty", "Sapthami Gowda", "Kishore"],
//     ott_platform: "Amazon Prime",
//     ott_link: "https://www.amazon.com/prime/kantara",
//     trailer_link: "kantara_trailer",
//     ticketing_link: "https://www.district.com/kantara",
//     language: "Kannada",
//   },
//   {
//     id: 9,
//     title: "Bagheera",
//     poster_url: "/MoviePosterPt/9.jpg",
//     rating: 76,
//     release_date: "2024-10-31",
//     run_time: "2h 20m",
//     thumbnail: "/MovieThumbnailPt/9.jpg",
//     short_desc: "A vigilante's fight against crime in a chaotic city.",
//     tags: ["action", "thriller", "crime"],
//     director: "Dr. Suri",
//     music: "B. Ajaneesh Loknath",
//     stars: ["Sriimurali", "Rukmidi Vasanth", "Prakash Raj"],
//     ott_platform: "Netflix",
//     ott_link: "https://www.netflix.com/bagheera",
//     trailer_link: "bagheera_trailer",
//     ticketing_link: "https://www.district.com/bagheera",
//     language: "Kannada",
//   },
//   {
//     id: 10,
//     title: "Salaar I",
//     poster_url: "/MoviePosterPt/10.jpg",
//     rating: 90,
//     release_date: "2023-12-22",
//     run_time: "2h 55m",
//     thumbnail: "/MovieThumbnailPt/10.jpg",
//     short_desc: "An epic tale of loyalty and betrayal in a dystopian world.",
//     tags: ["action", "drama", "crime"],
//     director: "Prashanth Neel",
//     music: "Ravi Basrur",
//     stars: ["Prabhas", "Prithviraj Sukumaran", "Shruti Haasan"],
//     ott_platform: "Netflix",
//     ott_link: "https://www.netflix.com/salaar",
//     trailer_link: "salaar_trailer",
//     ticketing_link: "https://www.district.com/salaari",
//     language: "Telugu",
//   },
//   {
//     id: 11,
//     title: "RRR",
//     poster_url: "/MoviePosterPt/11.jpg",
//     rating: 94,
//     release_date: "2022-03-25",
//     run_time: "3h 5m",
//     thumbnail: "/MovieThumbnailPt/11.jpg",
//     short_desc:
//       "A fictional tale of two revolutionaries against colonial rule.",
//     tags: ["action", "drama", "historical"],
//     director: "S.S. Rajamouli",
//     music: "M.M. Keeravani",
//     stars: ["N.T. Rama Rao Jr.", "Ram Charan", "Alia Bhatt"],
//     ott_platform: "Netflix",
//     ott_link: "https://www.netflix.com/rrr",
//     trailer_link: "rrr_trailer",
//     ticketing_link: "https://www.district.com/rrr",
//     language: "Telugu",
//   },
//   {
//     id: 12,
//     title: "Toxic",
//     poster_url: "/MoviePosterPt/12.jpg",
//     rating: 94,
//     release_date: "2025-04-10",
//     run_time: "2h 40m",
//     thumbnail: "/MovieThumbnailPt/12.jpg",
//     short_desc: "A gritty tale of crime and redemption in a toxic underworld.",
//     tags: ["action", "crime", "drama"],
//     director: "Geetu Mohandas",
//     music: "G.V. Prakash Kumar",
//     stars: ["Yash", "Kiara Advani", "Nayanthara"],
//     ott_platform: "Zee5",
//     ott_link: "https://www.zee5.com/toxic",
//     trailer_link: "toxic_trailer",
//     ticketing_link: "https://www.district.com/toxic",
//     language: "Kannada",
//   },
//   {
//     id: 13,
//     title: "Jana Nayagan",
//     poster_url: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jan-neta-et00478378-1784117004.jpg",
//     rating: 94,
//     release_date: "2026-07-23",
//     run_time: "2h 25m",
//     thumbnail: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/jan-neta-et00478378-1784117004.jpg",
//     short_desc: "A leader rises to fight for justice in a corrupt society.",
//     tags: ["action", "drama", "social"],
//     director: "Vijay Anand",
//     music: "Santhosh Narayanan",
//     stars: ["CM Vijay", "Bobby D", "Mamitha Baiju"],
//     ott_platform: "Amazon Prime",
//     ott_link: "https://www.amazon.com/prime/jananayagan",
//     trailer_link: "jananayagan_trailer",
//     ticketing_link: "https://www.district.com/jananayagan",
//     language: "Tamil",
//   },
//   {
//     id: 14,
//     title: "Devara",
//     poster_url: "/MoviePosterPt/14.jpg",
//     rating: 94,
//     release_date: "2024-09-27",
//     run_time: "2h 50m",
//     thumbnail: "/MovieThumbnailPt/14.jpg",
//     short_desc: "A coastal warrior's battle against smuggling and betrayal.",
//     tags: ["action", "drama", "adventure"],
//     director: "Koratala Siva",
//     music: "Anirudh Ravichander",
//     stars: ["N.T. Rama Rao Jr.", "Janhvi Kapoor", "Saif Ali Khan"],
//     ott_platform: "Netflix",
//     ott_link: "https://www.netflix.com/devara",
//     trailer_link: "devara_trailer",
//     ticketing_link: "https://www.district.com/devara",
//     language: "Telugu",
//   },
//   {
//     id: 15,
//     title: "Kalki 2898 AD",
//     poster_url: "/MoviePosterPt/15.jpg",
//     rating: 94,
//     release_date: "2024-06-27",
//     run_time: "3h 1m",
//     thumbnail: "/MovieThumbnailPt/15.jpg",
//     short_desc:
//       "A sci-fi epic set in a dystopian future with ancient prophecies.",
//     tags: ["sci-fi", "action", "drama"],
//     director: "Nag Ashwin",
//     music: "Santhosh Narayanan",
//     stars: ["Prabhas", "Deepika Padukone", "Amitabh Bachchan"],
//     ott_platform: "Netflix",
//     ott_link: "https://www.netflix.com/kalki2898ad",
//     trailer_link: "kalki2898ad_trailer",
//     ticketing_link: "https://www.district.com/kalki2898ad",
//     language: "Telugu",
//   },
//   {
//     id: 16,
//     title: "Animal",
//     poster_url: "/MoviePosterPt/16.jpg",
//     rating: 94,
//     release_date: "2023-12-01",
//     run_time: "3h 21m",
//     thumbnail: "/MovieThumbnailPt/16.jpg",
//     short_desc: "A raw tale of vengeance and complex family dynamics.",
//     tags: ["action", "crime", "drama"],
//     director: "Sandeep Reddy Vanga",
//     music: "Pritam",
//     stars: ["Ranbir Kapoor", "Rashmika Mandanna", "Anil Kapoor"],
//     ott_platform: "Netflix",
//     ott_link: "https://www.netflix.com/animal",
//     trailer_link: "animal_trailer",
//     ticketing_link: "https://www.district.com/animal",
//     language: "Hindi",
//   },
//   {
//     id: 17,
//     title: "Spiderman: Brand New Day",
//     poster_url: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man-brand-new-day-et00447840-1781677342.jpg",
//     rating: 94,
//     release_date: "2026-07-31",
//     run_time: "2h 25m",
//     thumbnail: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/spider-man-brand-new-day-et00447840-1781677342.jpg",
//     short_desc: "The fourth installment in the MCU Spider-Man franchise.",
//     tags: ["action", "crime", "drama"],
//     director: "Destin Cretton",
//     music: "Michael Giacchino",
//     stars: ["Tom H", "Zendaya", "Mark Ruffalo"],
//     ott_platform: "Hotstar",
//     ott_link: "",
//     trailer_link: "8TZMtslA3UY",
//     language: "English",
//   },
//    {
//     id: 18,
//     title: "The Odyssey",
//     poster_url: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-odyssey-et00452034-1778421685.jpg",
//     rating: 94,
//     release_date: "2026-07-17",
//     run_time: "2h 55m",
//     thumbnail: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/the-odyssey-et00452034-1778421685.jpg",
//     short_desc: "An historical epic real life adaptation",
//     tags: ["action", "crime", "drama"],
//     director: "Christopher Nolan",
//     music: "Ludwig Göransson",
//     stars: ["Tom H", "Zendaya", "Matt Damon", "Anne Hathway"],
//     ott_platform: "Hotstar",
//     ott_link: "",
//     trailer_link: "f_bKjZeJBBI",
//     language: "English",
//   },
//   {
//     id: 19,
//     title: "Obsession",
//     poster_url: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/obsession-et00480914-1783607836.jpg",
//     rating: 94,
//     release_date: "2026-05-29",
//     run_time: "1h 50m",
//     thumbnail: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/obsession-et00480914-1783607836.jpg",
//     short_desc: "After breaking the mysterious One Wish Willow to win his crush's heart, a hopeless romantic gets exactly what he asked for, only to discover that some desires come at a dark, sinister price.",
//     tags: ["horror", "thriller"],
//     director: "Curry Barker",
//     music: "Ludwig Göransson",
//     stars: ["Michael Johnston", "Inde Navarrette", "Cooper Tomlinson"],
//     ott_platform: "Apple Tv",
//     ott_link: "https://www.primevideo.com/detail/0M1G8W35R6LZYZ25OYBKKX3PBF",
//     trailer_link: "3-sJed7iv84",
//     language: "English",
//   },
//    {
//     id: 20,
//     title: "The Paradise",
//     poster_url: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-paradise-et00436621-1741094191.jpg",
//     rating: 94,
//     release_date: "2026-08-21",
//     run_time: "",
//     thumbnail: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/the-paradise-et00436621-1741094191.jpg",
//     short_desc: "After breaking the mysterious One Wish Willow to win his crush's heart, a hopeless romantic gets exactly what he asked for, only to discover that some desires come at a dark, sinister price.",
//     tags: ["action", "drama", "adventure"],
//     director: "Shrikanth Odela",
//     music: "Anirudh R",
//     stars: ["Nani", "Sonali K", "Cooper Tomlinson"],
//     ott_platform: "",
//     ott_link: "",
//     trailer_link: "NkZFnpDhdCk",
//     language: "Telugu",
//   },
//    {
//     id: 21,
//     title: "Valmiki Ramayana",
//     poster_url: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/valmiki-ramayana-et00493199-1774848196.jpg",
//     rating: 94,
//     release_date: "2026-11-08",
//     run_time: "",
//     thumbnail: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/valmiki-ramayana-et00493199-1774848196.jpg",
//     short_desc: "A powerful retelling of the Valmiki Ramayana, following Lord Ramas journey through love, exile, and war, as he navigates the eternal conflict between duty and desire.",
//     tags: ["action", "drama", "adventure"],
//     director: "Nitish Kumar",
//     music: "Anirudh R",
//     stars: ["Ranbir K", "Yash", "Sunny D"],
//     ott_platform: "",
//     ott_link: "",
//     trailer_link: "3-wSEehDBVk",
//     language: "Hindi",
//   },
//   {
//     id: 22,
//     title: "Jailer 2",
//     poster_url: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/rajini-the-jailer-2-et00429211-1736921165.jpg",
//     rating: 94,
//     release_date: "2026-10-15",
//     run_time: "",
//     thumbnail: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/rajini-the-jailer-2-et00429211-1736921165.jpg",
//     short_desc: "Hukkum! Tiger Ka Hukkum!",
//     tags: ["action", "drama", "adventure"],
//     director: "Nelson K",
//     music: "Anirudh R",
//     stars: ["Rajinikanth", "Hrithik R", "Mohanlal"],
//     ott_platform: "",
//     ott_link: "",
//     trailer_link: "ugzPkXEqff4",
//     language: "Tamil",
//   },
//   {
//     id: 23,
//     title: "Khashaba",
//     poster_url: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/khashaba-et00505825-1782995767.jpg",
//     rating: 94,
//     release_date: "2027-01-01",
//     run_time: "",
//     thumbnail: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/khashaba-et00505825-1782995767.jpg",
//     short_desc: "A sports drama based on the extraordinary story of India's first individual Olympic medal winner.",
//     tags: ["biography", "drama", "sports"],
//     director: "Nagraj M",
//     music: "Ajay Atul",
//     stars: ["Nagraj M", "Mahesh M", "Girish K", "Jitendra J"],
//     ott_platform: "",
//     ott_link: "",
//     trailer_link: "q6uHkXJR9qU",
//     language: "Marathi",
//   },
//   {
//     id: 24,
//     title: "King",
//     poster_url: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/king-et00455480-1769617085.jpg",
//     rating: 94,
//     release_date: "2027-12-26",
//     run_time: "",
//     thumbnail: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/king-et00455480-1769617085.jpg",
//     short_desc: "KING is Ready to ROAR on 24.12.2026 in Cinemas.",
//     tags: ["action", "drama", "thriller"],
//     director: "Siddharth Anand",
//     music: "Sachin & Jigar",
//     stars: ["Shah Rukh Khan", "Deepika P", "Abhisek B", "Suhana K"],
//     ott_platform: "",
//     ott_link: "",
//     trailer_link: "Uu2QK9Z9X5E",
//     language: "Hindi",
//   },
//   {
//     id: 25,
//     title: "Alpha",
//     poster_url: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/alpha-et00403805-1781695445.jpg",
//     rating: 94,
//     release_date: "2026-07-03",
//     run_time: "8400",
//     thumbnail: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/alpha-et00403805-1781695445.jpg",
//     short_desc: "Alpha is a true-blue popcorn entertainer, intended as a celebration of the Alpha attitude of two girls in a never-before-done action film fronted by women in cinema!",
//     tags: ["action", "drama", "thriller"],
//     director: "Shiv Ravail",
//     music: "Rohansh & Abeer",
//     stars: ["Alia B", "Sharvari W", "Bobby D", "Anil K"],
//     ott_platform: "",
//     ott_link: "",
//     trailer_link: "QRqGwGwo1Y0",
//     language: "Hindi",
//     created_at: ""
//   },
// ];

// export default function Page() {
//   const { id } = useParams();
//   const movieId = parseInt(id, 10);

//   const movie = movies.find((m) => m.id === movieId);

//   if (!movie) {
//     return <div className="text-red-500 p-8">Movie Not Found</div>;
//   }

//   return (
//     <div className="main ">
//       <div className="hidden md:block text-white">
//         <Navbar />
//         <section
//           className="herosec flex h-screen bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: `url(${movie.thumbnail})` }}
//         >
//           <div className="leftCnt w-[50vw] items-center content-start flex-wrap flex flex-col justify-center pl-7.5">
//             <div className="flex gap-1.25 text-[23px] font-medium -mb-6.25 ml-6.25">
//               <span>{movie.release_date.split("-")[0]}</span> <span>•</span>
//               <span>{movie.run_time}</span>
//             </div>
//             {/* <h1 className='main-head text-3xl font-bold uppercase text-[130px] tracking-[8px] '>{movie.title}</h1> */}

//             <h1
//               className={`main-head text-6xl uppercase `}
//               // ${movie.title.length <= 6 ? "short" : movie.title.length >= 25 ? "long" : movie.title.length > 6 && movie.title.length <= 9 ? "med" : ""}
//             >
//               {movie.title}
//             </h1>
//             <h2 className="text-sm sub-head tracking-[0.8rem] ">
//               {movie.sub_title}
//             </h2>

//             <p className="text-3xl text-[#DBDBDB] desc">{movie.short_desc}</p>

//             <p className="taggs capitalize text-[#DBDBDB]">
//               {movie.tags.join("  ┃  ")}
//             </p>

//             {/* <div className="mt-2 text-lg"> Rating: {movie.rating} </div>  */}
//           </div>
//           <div className="righttCnt w-[50vw]  flex flex-col justify-end items-end gap-3">
//             <button className="bg-white  w-43.75 h-11.75 rounded-[15px] text-black text-[20px] font-semibold cursor-pointer">
//               Leave a Review
//             </button>
//             <button className="w-43.75 h-11.75 rounded-[15px] border-2 text-[20px] font-semibold cursor-pointer">
//               Add to WatchIist
//             </button>
//           </div>
//         </section>

//         <section className="Additional_info capitalize flex gap-10 w-full items-center pl-25">
//           <Image
//             src={movie.poster_url}
//             alt={movie.title}
//             className="stat_info_img rounded-3xl"
//             width={450}
//             height={500}
//           />

//           <div className="movie_info_content flex flex-col gap-7.5">
//             <div className="leading-8.75">
//               <h3 className="stat_info_title text-[#D0D0D0] text-[40px]">
//                 Director
//               </h3>
//               <h4 className="stat_info text-[30px]">{movie.director}</h4>
//             </div>
//             <div className="leading-8.75">
//               <h3 className="stat_info_title text-[#D0D0D0] text-[40px]">
//                 Star Cast
//               </h3>
//               <div className="flex gap-10">
//                 {movie.stars.map((star, index) => (
//                   <h4
//                     key={index}
//                     className="stat_info_cast text-[30px] whitespace-nowrap"
//                   >
//                     {star}
//                   </h4>
//                 ))}
//               </div>
//             </div>
//             <div className="leading-8.75">
//               <h3 className="stat_info_title text-[#D0D0D0] text-[40px]">
//                 Music
//               </h3>
//               <h4 className="stat_info text-[30px]">{movie.music}</h4>
//             </div>
//             <div>
//               {/* <h3 className='stat_info_title'>Music</h3> */}
//               <div className="flex gap-2">
//                 {movie.tags.slice(0, 3).map((tag, index) => (
//                   <span
//                     key={index}
//                     className={`px-4 py-1 rounded-full text-white ${
//                       tag === "action"
//                         ? "bg-red-700"
//                         : tag === "thriller"
//                           ? "bg-blue-900"
//                           : tag === "tragedy"
//                             ? "bg-purple-900"
//                             : "bg-gray-500" // A default color for other tags
//                     }`}
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>{" "}
//             </div>
//           </div>
//         </section>

//         <section className="Traier-section flex flex-col items-center justify-center">
//           <h1 className="Trail-txt mb-0 leading-50 opacity-50 p-50 text-[240px] justify-center tracking-[2px] font-25">
//             Trailer
//           </h1>

//           <iframe
//             width="1100"
//             height="500"
//             src={`https://www.youtube.com/embed/${movie.trailer_link}`}
//             title="YouTube video player"
//             // frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             // referrerpolicy="strict-o rigin-when-cross-origin"
//             allowFullScreen
//           ></iframe>
//           {/* </div> */}
//         </section>

//         <section className="Reviews-section flex justify-center">
//           <h1 className="Review-txt mb-0 leading-25 opacity-50 p-50 text-[120px] justify-self-center tracking-[2px] font-25">
//             What People Say {movie.rating} {movie.release_date}
//           </h1>
//         </section>
//       </div>

//       <div className="responsive block md:hidden">
//         <MoviePageNav />
//         <section className="introsection">
//           <Image src={movie.thumbnail} alt={movie.title} width={500} height={1080} />
//           <div className="content">
//             <p className="taggs capitalize text-[#DBDBDB]">
//               {movie.tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="inline-block bg-[#2A2A2A] text-[#DBDBDB] px-3 py-1 rounded-full text-sm mr-2"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </p>
//             <div className="titles">
//               <h2 className="">{movie.title}</h2>
//               <span>{movie.sub_title}</span>
//             </div>
//             <div className="flex gap-px text-[12px] font-medium -mb-6.25 ml-6.25">
//               <span>{movie.release_date.split("-")[0]}</span> <span>┃</span>
//               <span>{movie.language}</span>
//               <span>┃</span>
//               <span>{movie.run_time}</span>
//             </div>
//             <div>
//               <button>
//                 <Heart />
//               </button>
//               <button>
//                 <Star />
//               </button>
//               <button className="cta_btn bg-linear-to-r from-gray-900 to-black text-white">
//                 <Play fill="white" className="w-4 h-4" />
//                 <span className="font-semibold">
//                   Watch on {movie.ott_platform}
//                 </span>
//               </button>
//             </div>

//             <section>
//               {/* <img
//         src={movie.poster}
//         alt={movie.title}
//     /> */}

//               <div>
//                 <div>
//                   <h3>Director</h3>
//                   <h4>{movie.director}</h4>
//                 </div>
//                 <div>
//                   <h3>Star Cast</h3>
//                   <div>
//                     {movie.stars.map((star, index) => (
//                       <h4 key={index}>{star}</h4>
//                     ))}
//                   </div>
//                 </div>
//                 <div>
//                   <h3>Music</h3>
//                   <h4>{movie.music}</h4>
//                 </div>
//               </div>
//             </section>

//             <p className="text-3xl text-[#DBDBDB] desc">{movie.short_desc}</p>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Heart, Star, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import MoviePageNav from "@/components/MoviePageNav";
import { moviesSampleData as movies } from "@/lib/data";

// NOTE ON FONTS
// This design assumes two typefaces are loaded globally via next/font/google
// in your root layout:
//   Fraunces  -> exposed as the `font-serif` Tailwind alias (display/headline)
//   Inter     -> exposed as the `font-sans` Tailwind alias (body/UI, default)
// e.g. in app/layout.tsx:
//   import { Fraunces, Inter } from "next/font/google";
//   const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-serif" });
//   const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
// and in tailwind.config: fontFamily.serif = ["var(--font-serif)"], sans = ["var(--font-sans)"]

// NOTE ON DATA SOURCE
// `movies` is assumed to now mirror the DB schema field-for-field:
// movie_id, title, director, musician, runtime, release_date, cast, genres,
// certification, poster_url, thumbnail_url, trailer_id, stream_platform, stream_url.

function formatRuntime(minutes?: number) {
  if (!minutes) return "—";
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m}m`;
}

function formatYear(dateStr?: string) {
  if (!dateStr) return "—";
  return dateStr.split("-")[0];
}

const GENRE_STYLES: Record<string, string> = {
  action: "border-[#7A3B2E] text-[#E3A78F]",
  thriller: "border-[#2E3B55] text-[#9FB2D9]",
  tragedy: "border-[#4A2E55] text-[#C9A7D9]",
};
const GENRE_DEFAULT = "border-white/15 text-[#B8B0A6]";

export default function Page() {
  const { id } = useParams();
  const movieId = parseInt(id as string, 10);

  const movie = movies.find((m) => m.movie_id === movieId);

  if (!movie) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0A0908] px-8 font-sans">
        <div className="text-center">
          <p className="font-serif text-3xl text-[#F2EDE4]">
            This one isn&apos;t in the archive.
          </p>
          <p className="mt-2 text-sm text-[#8F8880]">
            Check the link, or head back to browse what is.
          </p>
        </div>
      </div>
    );
  }

  const genres: string[] = movie.genres ?? [];
  const cast: string[] = movie.cast ?? [];

  return (
    <div className="bg-[#0A0908]">
      {/* ---------------- DESKTOP ---------------- */}
      <div className="hidden md:block text-[#F2EDE4] font-sans">
        <Navbar />

        {/* HERO */}
        <section
          className="relative flex h-screen w-full items-end bg-cover bg-center"
          style={{ backgroundImage: `url(${movie.thumbnail_url})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/60 to-[#0A0908]/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908]/70 via-transparent to-transparent" />

          <div className="relative z-10 flex w-full items-end justify-between px-16 pb-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-sm text-[#B8B0A6]">
                <span>{formatYear(movie.release_date)}</span>
                <span className="h-1 w-1 rounded-full bg-[#B8B0A6]" />
                <span>{formatRuntime(movie.runtime)}</span>
                {movie.certification && (
                  <>
                    <span className="h-1 w-1 rounded-full bg-[#B8B0A6]" />
                    <span className="rounded border border-[#C9A227]/50 px-1.5 py-0.5 text-xs text-[#C9A227]">
                      {movie.certification}
                    </span>
                  </>
                )}
              </div>

              <h1 className="mt-3 font-serif text-7xl font-medium uppercase leading-[0.92] tracking-tight lg:text-8xl">
                {movie.title}
              </h1>

              {genres.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {genres.slice(0, 4).map((genre, i) => (
                    <span
                      key={i}
                      className={`rounded-full border px-3 py-1 text-xs capitalize ${
                        GENRE_STYLES[genre.toLowerCase()] ?? GENRE_DEFAULT
                      }`}
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex shrink-0 flex-col items-end gap-3">
              <button className="h-12 w-48 rounded-sm bg-[#F2EDE4] text-sm font-medium tracking-wide text-[#0A0908] transition hover:bg-white">
                Book a show{" "}
              </button>
              <button className="h-12 w-48 rounded-sm border border-white/25 text-sm font-medium tracking-wide transition hover:border-white/60">
                Add to watchlist
              </button>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="flex gap-16 border-b border-white/10 px-16 py-20">
          <div className="w-[300px] shrink-0">
            <Image
              src={movie.poster_url}
              alt={movie.title}
              className="w-full rounded-sm object-cover shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]"
              width={450}
              height={620}
            />
          </div>

          <div className="flex flex-1 flex-col divide-y divide-white/10">
            <div className="grid grid-cols-[160px_1fr] gap-6 py-6 first:pt-0">
              <h3 className="text-sm text-[#8F8880]">Director</h3>
              <p className="font-serif text-2xl">{movie.director || "—"}</p>
            </div>

            <div className="grid grid-cols-[160px_1fr] gap-6 py-6">
              <h3 className="text-sm text-[#8F8880]">Star cast</h3>
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                {cast.length > 0 ? (
                  cast.map((star, i) => (
                    <p key={i} className="font-serif text-2xl">
                      {star}
                    </p>
                  ))
                ) : (
                  <p className="font-serif text-2xl text-[#8F8880]">—</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-[160px_1fr] gap-6 py-6">
              <h3 className="text-sm text-[#8F8880]">Music</h3>
              <p className="font-serif text-2xl">{movie.musician || "—"}</p>
            </div>

            {movie.stream_platform && (
              <div className="grid grid-cols-[160px_1fr] items-center gap-6 py-6 last:pb-0">
                <h3 className="text-sm text-[#8F8880]">Stream on</h3>
                <a
                  href={movie.stream_url || "#"}
                  className="inline-flex w-fit items-center gap-2 rounded-sm bg-[#C9A227] px-5 py-2.5 text-sm font-medium text-[#0A0908] transition hover:bg-[#DDB537]"
                >
                  <Play fill="#0A0908" className="h-3.5 w-3.5" />
                  Watch on {movie.stream_platform}
                </a>
              </div>
            )}
          </div>
        </section>

        {/* TRAILER */}
        {movie.trailer_id && (
          <section className="flex flex-col items-center border-b border-white/10 px-16 py-24">
            <h2 className="mb-12 font-serif text-6xl uppercase tracking-tight text-[#F2EDE4]/30">
              Trailer
            </h2>
            <div className="w-full max-w-5xl overflow-hidden rounded-sm border border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${movie.trailer_id}`}
                  title="Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        )}

        {/* REVIEWS */}
        <section className="flex flex-col items-center px-16 py-24">
          <h2 className="mb-6 font-serif text-6xl uppercase tracking-tight text-[#F2EDE4]/30">
            What people say
          </h2>
          <p className="mb-6 max-w-md text-center text-[#8F8880]">
            No reviews yet for {movie.title}.
          </p>
          <button className="rounded-sm border border-white/25 px-6 py-3 text-sm font-medium tracking-wide transition hover:border-white/60">
            Write the first review
          </button>
        </section>
      </div>

      {/* ---------------- MOBILE ---------------- */}
      <div className="block md:hidden bg-[#0A0908] text-[#F2EDE4] font-sans">
        <MoviePageNav />

        <section>
          <div className="relative h-[55vh] w-full">
            <Image
              src={movie.thumbnail_url}
              alt={movie.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/40 to-transparent" />
          </div>

          <div className="-mt-10 relative z-10 px-6">
            {genres.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {genres.map((genre, i) => (
                  <span
                    key={i}
                    className={`rounded-full border px-3 py-1 text-xs capitalize ${
                      GENRE_STYLES[genre.toLowerCase()] ?? GENRE_DEFAULT
                    }`}
                  >
                    {genre}
                  </span>
                ))}
              </div>
            )}

            <h1 className="font-serif text-4xl uppercase leading-[0.95] tracking-tight">
              {movie.title}
            </h1>

            <div className="mt-2 flex items-center gap-2 text-xs text-[#B8B0A6]">
              <span>{formatYear(movie.release_date)}</span>
              <span className="h-1 w-1 rounded-full bg-[#B8B0A6]" />
              <span>{formatRuntime(movie.runtime)}</span>
              {movie.certification && (
                <>
                  <span className="h-1 w-1 rounded-full bg-[#B8B0A6]" />
                  <span className="rounded border border-[#C9A227]/50 px-1.5 py-0.5 text-[#C9A227]">
                    {movie.certification}
                  </span>
                </>
              )}
            </div>

            <div className="mt-5 flex items-center gap-3">
              <button
                aria-label="Add to watchlist"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25"
              >
                <Heart className="h-4 w-4" />
              </button>
              <button
                aria-label="Rate this movie"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25"
              >
                <Star className="h-4 w-4" />
              </button>
              {movie.stream_platform && (
                <a
                  href={movie.stream_url || "#"}
                  className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[#C9A227] text-sm font-medium text-[#0A0908]"
                >
                  <Play fill="#0A0908" className="h-3.5 w-3.5" />
                  Watch on {movie.stream_platform}
                </a>
              )}
            </div>

            <div className="mt-8 divide-y divide-white/10 border-t border-white/10">
              <div className="flex justify-between py-4">
                <h3 className="text-sm text-[#8F8880]">Director</h3>
                <p className="text-right font-serif text-lg">
                  {movie.director || "—"}
                </p>
              </div>
              <div className="flex justify-between py-4">
                <h3 className="text-sm text-[#8F8880]">Star cast</h3>
                <p className="max-w-[65%] text-right font-serif text-lg">
                  {cast.length > 0 ? cast.join(", ") : "—"}
                </p>
              </div>
              <div className="flex justify-between py-4">
                <h3 className="text-sm text-[#8F8880]">Music</h3>
                <p className="text-right font-serif text-lg">
                  {movie.musician || "—"}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
