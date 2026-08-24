"use client";

import { useEffect, useState } from "react";

export default function useUser() {

  const [userData, setUserData] = useState("")
  const [isLoaded, setIsLoaded] = useState(true)

  useEffect(() => {
    const userId = localStorage.getItem("User");
    if (!userId) {
      setIsLoaded(true);
      return;
    }

    async function fetchUser() {
      try{
      const response = await fetch(`/api/get-user-details?userId=${userId}`);
      if(!response.ok) throw new Error("Failed to fetch user")

        const data = await response.json();
        setUserData(data);
      }
      catch(err){
        console.error("Error fetching user details", err)
      }
      finally{
        setIsLoaded(true)
      }
    }
fetchUser();
  }, []);
  return {
    userData,
    isLoaded
  };
}