"use client"

import { redirect } from "next/navigation";
import { useState, useEffect } from "react";

export default function Page() {

    const [title, setTitle] = useState("")
    const [director, setDirector] = useState("")
    const [musician, setMusician] = useState("")
    const [runtime, setRuntime] = useState("")
    const [releaseDate, setReleaseDate] = useState("")
    const [ageRating, setAgeRating] = useState("")
    const [genres, setGenres] = useState("")
    const [cast, setCast] = useState("")
    const [posterUrl, setPosterUrl] = useState("")
    const [thumbnailUrl, setThumbnailUrl] = useState("")
    const [trailerId, setTrailerId] = useState("")
    const [streamPlatform, setStreamPlatform] = useState("")
    const [streamUrl, setStreamUrl] = useState("")
    //   const [ageRating, setConfirmPassword] = useState("")
    //   const [ageRating, setConfirmPassword] = useState("")

    //   const [dob, setDob] = useState("2009-07-02")
    //   const [role, setRole] = useState("user")
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<any>({})
    const [query, setQuery] = useState("")
    const [error, setError] = useState("")

    useEffect(() => {
        // console.log(email, name, password)
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // if (password !== confirmPassword) { setError("Passwords no not match!"); return; }
        // if (!(username)) generateUsername();

        setLoading(true)
        try {
            const response = await fetch(`/api/createUser`, {
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
                    genres,
                    posterUrl,
                    thumbnailUrl,
                    trailerId,
                    streamPlatform,
                    streamUrl,
                })

            })
            if (!response.ok) {
                console.log("Error Submitting User Data", response)
            }
            const apiData = await response.json()
            console.log("hash:", apiData.hashedPassword)
            const newData = apiData.request
            console.log("data by api:", JSON.stringify(newData))
            setData(newData)
            console.log("data by state:", data)
            setQuery(apiData.query)
            console.log(query)
            console.log(apiData.rows)
        }
        catch (error) {
            // throw new Error(error.message)
        }
        finally {
            setLoading(false)
            setTimeout(() => redirect('/login'), 9000)
        }
    }

    // const generateUsername = () => {
    //     setUsername(firstname + lastname + "@" + Math.ceil(Math.random() * 1000))
    // }

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

                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Thumnail Url
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
                            <button type="button" onClick={() => setAgeRating("U")} className={`${ageRating == "U" ? " bg-blue-600 " : "text-blue-600 bg-black"} py-2 px-4 rounded-xl font-bold text-lg`}>User</button>
                            <button type="button" onClick={() => setAgeRating("UA")} className={`${ageRating == "UA" ? " bg-blue-600 " : "text-blue-600 bg-black"} py-2 px-4 rounded-xl font-bold text-lg`}>User</button>
                            <button type="button" onClick={() => setAgeRating("A")} className={`${ageRating == "A" ? " bg-blue-600 " : "text-blue-600 bg-black"} py-2 px-4 rounded-xl font-bold text-lg`}>User</button>
                        </span>
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Register
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 hover:underline">
                        Login          </a>
                </p>
            </div>
        </div>
    );
}
