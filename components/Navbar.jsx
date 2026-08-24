import { Clock, MenuIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"
import "./Navbar.css";
import useUser from "../lib/useUser";

const Navbar = () => {

  const { userData, isLoaded } = useUser();

  if (!isLoaded) return <p> Loading ....</p>;

  if (isLoaded) {
    if (!userData) console.warn("failed to get user!")
  }
  console.log(userData, isLoaded)

  const firstName = userData?.rows?.first_name
  const lastName = userData?.rows?.last_name


  const [isopen, setIsopen] = useState(false);

  return (
    <div className="text-white flex justify-between w-8/12 mx-auto my-6 items-center navbar">
      <Link href="/" className="max-md:flex-1">
        <h1 className=" text-5xl font-chela tracking-wide">Culture</h1>
      </Link>

      <div className="navlinks">
        {/* Close icon (mobile only) */}
        <XIcon
          onClick={() => setIsopen(!isopen)}
          className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer"
        />

        <Link
          onClick={() => {
            window.scrollTo(0, 0);
            setIsopen(false);
          }}
          href="/"
        >
          {" "}
          Home
        </Link>
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
            setIsopen(false);
          }}
          href="/movies"
        >
          {" "}
          Movies
        </Link>
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
            setIsopen(false);
          }}
          href="/"
        >
          {" "}
          Explore
        </Link>
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
            setIsopen(false);
          }}
          href="/transparency"
        >
          {" "}
          Transparency
        </Link>
      </div>

     {userData ? <p> <Link href="/userarea" className=" text-2xl rounded-full bg-gray-600  p-7 size-8 mx-auto flex items-center justify-center ">{firstName.charAt(0) + lastName.charAt(0)}</Link> </p> : <Link className="loginbtn" href="/authenticate">Join</Link>}

      {/* <MenuIcon className="menuIc" onClick={() => setIsopen(!isopen)} /> */}
    </div>
  );
};

export default Navbar;
