"use client"

import { redirect } from "next/navigation";
import { useState, useEffect } from "react";

export default function Login() {

  const [emailUsername, setEmailUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<any>({})
  const [query, setQuery] = useState("")
  const [error,setError] = useState("")

  useEffect(() => {
    // console.log(email, name, password)
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true)
    try {
      const response = await fetch(`/api/verify-user`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emailUsername,
          password,
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
    }
    catch (error) {
      //  throw new Error(error.messa)
    }
    finally {
      setLoading(false)
      setTimeout(()=> redirect('/'), 9000)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {loading && null}
      
      {(query != '' && data)&& <div className="shadow-lg bg-green-200 p-3 rounded-xl absolute max-w-74 left-10 top-12">
        
        {query}
        <button
            type="button"
            onClick={()=> setQuery('')}
            className="w-full rounded-lg bg-red-400 py-2 mt-6 shadow-xs font-semibold text-white transition hover:bg-blue-700"
          >
            Close
          </button>
          </div>} 
      <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Login
        </h2>

{error && <p className="bg-red-400 text-sm text-white py-2 px-3 font-bold rounded-md text-center mx-auto">{error}</p>}

        <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email or Username
            </label>

            <input
              type="text"
              placeholder="Enter your email or username"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              onChange={(e) => setEmailUsername(e.target.value)}
              value={emailUsername}
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register          </a>
        </p>
      </div>
    </div>
  );
}
