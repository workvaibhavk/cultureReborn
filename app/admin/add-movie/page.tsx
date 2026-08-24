"use client"

import { useState } from "react";
import Image from "next/image"
import { CheckIcon } from "lucide-react";

export default function Page() {

    const [title, setTitle] = useState("")
    const [director, setDirector] = useState("")
    const [musician, setMusician] = useState("")
    const [runtime, setRuntime] = useState("")
    const [releaseDate, setReleaseDate] = useState("")
    const [ageRating, setAgeRating] = useState("UA")
    const [cast, setCast] = useState([])
    const [actor, setActor] = useState("")
    const [posterUrl, setPosterUrl] = useState("")
    const [thumbnailUrl, setThumbnailUrl] = useState("")
    const [trailerId, setTrailerId] = useState("")
    const [streamUrl, setStreamUrl] = useState("")
    const [previewPoster, setPreviewPoster] = useState("")
    const [ottPlatform, setOttPlatform] = useState("")
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<any>({})
    const [query, setQuery] = useState("")
    const [error, setError] = useState("")

    const PLATFORMS = [
        "Netflix",
        "Amazon Prime Video",
        "Disney+",
        "Hulu",
        "HBO Max",
        "Apple TV+",
        "Paramount+",
        "Peacock",
        "SonyLIV",
        "JioHotstar",
        "ZEE5",
        "MX Player",
        "Hoichoi",
        "Sun NXT",
        "Aha",
        "YouTube",
    ] as const;

    const GENRES_OPTIONS = [
        "Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Crime",
        "Documentary",
        "Drama",
        "Family",
        "Fantasy",
        "Horror",
        "Mystery",
        "Romance",
        "SciFi",
        "Thriller",
        "War",
        "Western",
        "Musical",
        "Biography",
        "History",
        "Sport",
        "Superhero",
        "Psychological",
        "Suspense",
        "Political",
        "Teen",
        "ComingOfAge",
        "DarkComedy",
        "RomanticComedy",
        "RomanticDrama",
        "ActionComedy",
        "ActionThriller",
        "SciFiThriller",
        "MysteryThriller",
        "HistoricalDrama",
        "WarDrama",
        "LegalDrama",
        "MedicalDrama",
        "Disaster",
        "MartialArts",
        "Noir",
        "Satire",
    ] as const;

    const toggleGenre = (genre): void => {
        setSelectedGenres((prev) =>
            prev.includes(genre) ? prev.filter((item) => item !== genre) : [...prev, genre],
        );
    };


    const toggleCast = () => {
        setCast((prev) => [...prev, actor])
        setActor("")
        console.log(cast)
    }

    const minusToggleCast = (item) => {
        setCast((prev) => prev.filter((i) => i != item))
    }

    const handleOttPlatformChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        setOttPlatform(e.target.value)
    }


    const previewwPoster = () => {
        setPreviewPoster(posterUrl)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await fetch(`/api/admin/add-movie`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    director,
                    musician,
                    runtime,
                    releaseDate,
                    ageRating,
                    cast,
                    selectedGenres,
                    posterUrl,
                    thumbnailUrl,
                    trailerId,
                    ottPlatform,
                    streamUrl,
                })

            })
            if (!response.ok) {
                console.log("Error Submitting User Data", response)
            }
            const apiData = await response.json()
            setQuery(apiData.query)
            console.log(apiData)
            console.log(apiData.rows)
        }
        catch (error) {
            console.error("Error: ", error)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            {loading && null}

            {(query != '' && data) && <div className="shadow-lg bg-green-200 p-3 rounded-xl absolute max-w-74 left-10 top-12">

                {query}
                <button
                    type="button"
                    onClick={() => setQuery('')}
                    className="w-full rounded-lg bg-red-400 py-2 mt-6 shadow-xs font-semibold text-white transition hover:bg-blue-700"
                >
                    Close
                </button>
            </div>}
            <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-lg">
                <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
                    Add Movie
                    {/* {JSON.stringify(data.request)} */}
                </h2>

                {error && <p className="bg-red-400 text-sm text-white py-2 px-3 font-bold rounded-md text-center mx-auto">{error}</p>}

                <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Title"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            required
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Director
                        </label>
                        <input
                            type="text"
                            placeholder="Enter director Name"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                            onChange={(e) => setDirector(e.target.value)}
                            value={director}
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Musician
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Musician Name"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                            onChange={(e) => setMusician(e.target.value)}
                            value={musician}
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="platform"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            OTT Platform
                        </label>
                        <select
                            id="platform"
                            value={ottPlatform}
                            onChange={handleOttPlatformChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#665bca] focus:border-[#665bca] outline-none transition-all bg-white"
                        >
                            {PLATFORMS.map((ott) => (
                                <option key={ott} value={ott}>
                                    {ott}
                                </option>
                            ))}
                        </select>
                        <p className="mt-1 text-xs text-gray-500">
                            Select the movie platform.
                        </p>
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Runtime
                        </label>
                        <input
                            type="number"
                            placeholder="Enter Movie Runtime (minutes)"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                            onChange={(e) => setRuntime(e.target.value)}
                            value={runtime}
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Poster Url
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Poster Url"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                            onChange={(e) => setPosterUrl(e.target.value)}
                            value={posterUrl}
                            required
                        />
                    </div>

                    {previewPoster && <Image src={previewPoster} height={1980} width={1080} alt="pstImage" />}

                    {posterUrl &&
                        <button type="button" onClick={() => previewwPoster()} className="bg-green-200 py-2 px-4 mx-auto rounded-md">Preview Poster</button>
                    }

                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Actor Name
                        </label>
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Enter Actor"
                                className="w-9/12 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                                onChange={(e) => setActor(e.target.value)}
                                value={actor}
                                required
                            />
                            <button type="button" onClick={() => toggleCast()} className="bg-green-200 py-2 px-4 mx-auto rounded-md">Add</button>
                        </div>
                        <div className="mt-3">
                            {cast && cast.map((item) => (
                                <div key={item} onClick={() => minusToggleCast(item)} className="bg-[#e6cefa] py-[8px] px-[16px] border-[#ddd] rounded-2xl mr-[5px] cursor-pointer inline-flex items-center gap-[6px] ">
                                    {item}
                                </div>
                            ))}
                        </div>


                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Thumbnail Url
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Thumbnail Url"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                            onChange={(e) => setThumbnailUrl(e.target.value)}
                            value={thumbnailUrl}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Tags
                        </label>
                        <div className="flex flex-row flex-wrap content-center items-center gap-1 text-sm">
                            {GENRES_OPTIONS.map((genre) => (
                                <button
                                    key={genre}
                                    onClick={() => toggleGenre(genre)}
                                    type="button"
                                    className={`
                      py-[8px] px-[16px] border-[#ddd] rounded-[20px] cursor-pointer inline-flex items-center gap-[6px] 
                      ${selectedGenres.includes(genre)
                                            ? "bg-[#7b34ff] border-[#4caf50] text-[#ffffff]"
                                            : "bg-[#e6cefa]"
                                        }
                    `}
                                >
                                    {selectedGenres.includes(genre) && (
                                        <CheckIcon className="w-4 h-4" />
                                    )}
                                    {genre}
                                </button>
                            ))}
                        </div>
                    </div>


                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Trailer Id
                        </label>
                        <input
                            type="text"
                            placeholder="Enter TrailerId"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                            onChange={(e) => setTrailerId(e.target.value)}
                            value={trailerId}
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Stream Url
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Streaming Url"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                            onChange={(e) => setStreamUrl(e.target.value)}
                            value={streamUrl}
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Release Date
                        </label>
                        <input
                            type="date"
                            placeholder="Release Date"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                            onChange={(e) => setReleaseDate(e.target.value)}
                            value={releaseDate}
                            required
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Age Rating
                        </label>
                        <span className="border-2 border-black py-[12px] bg-black rounded-xl">
                            <button type="button" onClick={() => setAgeRating("U")} className={`${ageRating == "U" ? " bg-blue-600 " : "text-blue-600 bg-black"} py-2 px-4 rounded-xl font-bold text-lg`}>U</button>
                            <button type="button" onClick={() => setAgeRating("UA")} className={`${ageRating == "UA" ? " bg-blue-600 " : "text-blue-600 bg-black"} py-2 px-4 rounded-xl font-bold text-lg`}>UA</button>
                            <button type="button" onClick={() => setAgeRating("A")} className={`${ageRating == "A" ? " bg-blue-600 " : "text-blue-600 bg-black"} py-2 px-4 rounded-xl font-bold text-lg`}>A</button>
                        </span>
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
