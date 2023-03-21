import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/Logo.png";
import porofileImg from "../assets/Jumping.png";

function Navbar() {
  return (
    <div className="w-full h-20 px-6 shadow-lg flex justify-between items-center gap-20 z-10">
      <Link to="/">
        <img src={logoImg} alt="logo" className="w-32" />
      </Link>
      <div className="flex flex-1 items-center justify-between">
        <input
          type="text"
          className="p-2 rounded-lg border-2 w-1/2 outline-none"
          placeholder="Search"
        />
        <div className="flex justify-center items-center gap-10">
          <Link
            to="/dashboard"
            className="font-semibold hover:scale-105 transition-all ease-in-out"
          >
            Dashboard
          </Link>
          <Link
            to="/profile"
            className="rounded-full p-1 border-[1px] border-black"
          >
            <img src={porofileImg} alt="profileImg" className="w-9 h-9" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
