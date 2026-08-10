import { Clock, MenuIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link" 
import "./Navbar.css";

const Navbar = () => {
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

      <Link className="loginbtn" href="/authenticate">Join</Link>

      {/* <MenuIcon className="menuIc" onClick={() => setIsopen(!isopen)} /> */}
    </div>
  );
};

export default Navbar;
