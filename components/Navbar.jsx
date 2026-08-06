import { Clock, MenuIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isopen, setIsopen] = useState(false);

  return (
    <div className="text-white flex justify-between w-8/12 mx-auto my-6 items-center navbar">
      <Link to="/" className="max-md:flex-1">
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
          to="/"
        >
          {" "}
          Home
        </Link>
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
            setIsopen(false);
          }}
          to="/movies"
        >
          {" "}
          Movies
        </Link>
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
            setIsopen(false);
          }}
          to="/"
        >
          {" "}
          Explore
        </Link>
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
            setIsopen(false);
          }}
          to="/transparency"
        >
          {" "}
          Transparency
        </Link>
      </div>

      <Link className="loginbtn" to="/authenticate">Join</Link>

      {/* <MenuIcon className="menuIc" onClick={() => setIsopen(!isopen)} /> */}
    </div>
  );
};

export default Navbar;

/*   */
