"use client"

import { useState, useEffect } from "react"; 

export default function Login(){

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [loading, setLoading] = useState(false)
const [data, setData] = useState({})

useEffect(()=>{
   console.log(email, password) 
})

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=> {
  e.preventDefault();
  setLoading(true)
  try{
    const response = await fetch(`/api/createUser`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({
        email,
        password
      })

    })
    if (!response.ok){
    console.log("Error Submitting User Data",response)
    }
    const data = await response.json()
        console.log("data:", data)
setData(data)
        console.log("data:", data)

  }
  catch(error){
  //  throw new Error(error.message)
  }
  finally{
    setLoading(false)
  }
}

return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Login
        </h2>

        <form className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              onChange={(e)=> setEmail(e.target.value)}
              value={email}
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
              onChange={(e)=> setPassword(e.target.value)}
              value={password}
            />
          </div>

          <button
            type="submit"
            onClick={(e)=> handleSubmit(e)}
            className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
