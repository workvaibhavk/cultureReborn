"use client"

import useUser from "@/lib/useUser";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Page() {

  const router = useRouter();

  const [userId, setUserId] = useState("")
  const [prevPassword, setPrevPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<any>({})
  const [query, setQuery] = useState("")
  const [error, setError] = useState("")
  const [value, setValue] = useState("");

  const {userData, isLoaded} = useUser();
  
    if (!isLoaded) return <p> Loading ....</p>;
    
  if(isLoaded){
  if(!userData) console.warn("failed to get user!")
  }
    console.log(userData, isLoaded)

useEffect(()=>{
      if(userData?.rows?.user_id){
        setUserId(userData.rows.user_id || 0)
      }

},[isLoaded, userData])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("")

    setLoading(true)
    try {
      const response = await fetch(`/api/reset-user-password`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId,
          prevPassword,
          newPassword,
        })

      })
      if (!response.ok) {
        console.log("Error Submitting User Data", response)
      }
      const apiData = await response.json()
      console.log("rows", apiData.rows)

      console.log("data by state:", apiData)
      setQuery(apiData?.query)
      console.log(query)
      setData(apiData)
      setError(apiData?.error)
    }
    catch (error) {
      console.error(error)
      setError(data.error)
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {loading && null}

      {(query != '') && <div className="shadow-lg bg-green-200 p-3 rounded-xl absolute max-w-74 left-10 top-12">

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
          Reset Password
        </h2>

        {error && <p className="bg-red-400 text-sm text-white py-2 px-3 font-bold rounded-md text-center mx-auto">{error}</p>}

        <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Current Password
            </label>

            <input
              type="password"
              placeholder="Enter your current password"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              onChange={(e) => setPrevPassword(e.target.value)}
              value={prevPassword}
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
             New Password
            </label>
            <input
              type="password"
              placeholder="Enter your new password"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
             Confirm New Password
            </label>
            <input
              type="password"
              placeholder="Re-enter your new password"
              className={`${confirmNewPassword != "" && (newPassword == confirmNewPassword) ? "border-green-600" : "border-gray-300"} w-full rounded-lg border  px-4 py-2 focus:border-blue-500 focus:outline-none`}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              value={confirmNewPassword}
              required
            />
            {confirmNewPassword != "" && (newPassword == confirmNewPassword) && <span className="text-green-600 text-sm">password matched</span>}

          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            Reset Password
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
