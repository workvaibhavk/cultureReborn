"use client"

import { redirect } from "next/navigation";
import { useState, useEffect } from "react";

export default function Register() {

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [dob, setDob] = useState("2009-07-02")
  const [role, setRole] = useState("user")
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<any>({})
  const [query, setQuery] = useState("")
  const [error,setError] = useState("")

  useEffect(() => {
    // console.log(email, name, password)
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

if (password !== confirmPassword){ setError("Passwords no not match!"); return;}
if (!(username)) generateUsername();

    setLoading(true)
    try {
      const response = await fetch(`/api/createUser`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstname,
          lastname,
          username,
          email,
          password,
          dob,
          role
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
      setTimeout(()=> redirect('/login'), 9000)
    }
  }

const generateUsername = () =>{
  setUsername(firstname+lastname+"@"+Math.ceil(Math.random()*1000))
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
          Register
           {/* {JSON.stringify(data.request)} */}
        </h2>

{error && <p className="bg-red-400 text-sm text-white py-2 px-3 font-bold rounded-md text-center mx-auto">{error}</p>}

        <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter your First Name"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter your Last Name"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
              required
            />
          </div>
 {(firstname && lastname) &&
<button type="button" onClick={()=> generateUsername()} className="bg-green-200 py-2 px-4 mx-auto rounded-md">Generate username</button>
}
        <div className={`${username=="" ? "hidden" : ""}`}>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              readOnly
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Re-enter your password"
              className={`${confirmPassword != "" && (password == confirmPassword) ? "border-green-600" : "border-gray-300"} w-full rounded-lg border  px-4 py-2 focus:border-blue-500 focus:outline-none`}
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              required
           />
           {confirmPassword != "" && (password == confirmPassword) && <span className="text-green-600 text-sm">password matched</span>}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              placeholder="Re-enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              onChange={(e) => setDob(e.target.value)}
              value={dob}
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Role
            </label>
            <span className="border-2 border-black py-[12px] bg-black rounded-xl">
              <button type="button" onClick={()=> setRole("user")} className={`${role == "user" ? " bg-blue-600 " : "text-blue-600 bg-black"} py-2 px-4 rounded-xl font-bold text-lg`}>User</button>
              <button type="button" onClick={()=> setRole("admin")} className={`${role != "user" ? " bg-blue-600 " : "text-blue-600 bg-black"} py-2 px-4 rounded-xl font-bold text-lg`}>Admin</button>
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
