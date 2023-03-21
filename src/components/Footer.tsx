import React from "react";
import spaceGif from "../assets/space.gif";
import GithubButton from "../assets/Github.png";

const Footer = () => {
  return (
    <div className="px-10 py-5">
      <div className="flex justify-between items-center px-10 mb-16">
        <div>
          <h1 className="font-bold text-left text-5xl mb-5 leading-tight">
            Push yourself to the <br /> next{" "}
            <span className="text-[#86B049]">level</span> too.
          </h1>
          <button className="bg-[#5600FF] px-4 py-3 rounded-lg text-white shadow-md">
            <a href="/dashboard">Go to dashboard</a>
          </button>
        </div>
        <img src={spaceGif} alt="SpaceGif" className="w-[40vw]" />
      </div>
      <div className="flex justify-around items-baseline mb-28">
        <ul className="font-medium cursor-pointer">
          <h1 className="font-bold text-lg mb-6 cursor-text">Design</h1>
          <li className="hover:scale-105 transition-all ease-in-out">
            Design Policy
          </li>
          <li className="hover:scale-105 transition-all ease-in-out">
            Terms and Conditions
          </li>
          <li className="hover:scale-105 transition-all ease-in-out">
            Platform
          </li>
          <li className="hover:scale-105 transition-all ease-in-out">
            Community Guidelines
          </li>
          <li className="hover:scale-105 transition-all ease-in-out">
            Maintenance
          </li>
        </ul>
        <ul className="font-medium cursor-pointer">
          <h1 className="font-bold text-lg mb-6 cursor-text">Code</h1>
          <li className="hover:scale-105 transition-all ease-in-out">
            Terms and Conditions
          </li>
          <li className="hover:scale-105 transition-all ease-in-out">
            Licensing Guidelines
          </li>
          <li className="hover:scale-105 transition-all ease-in-out">
            Maintenance Guidelines
          </li>
        </ul>
        <ul className="font-medium cursor-pointer">
          <h1 className="font-bold text-lg mb-6 cursor-text">
            Terms and Policies
          </h1>
          <li className="hover:scale-105 transition-all ease-in-out">
            Privacy Policy
          </li>
          <li className="hover:scale-105 transition-all ease-in-out">
            Terms and Conditions
          </li>
          <li className="hover:scale-105 transition-all ease-in-out">
            Terms of Sale
          </li>
          <li className="hover:scale-105 transition-all ease-in-out">
            Community Guidelines
          </li>
          <li className="hover:scale-105 transition-all ease-in-out">
            Upload Guidelines
          </li>
        </ul>
        <div>
          <span className="text-xl">
            Get EcoSeva for mobile <br /> and desktop
          </span>
          <a
            href="https://github.com/The-Powerpuff-Rangers/ecoseva"
            target="blank"
          >
            <img
              src={GithubButton}
              alt="githubbutton"
              className="w-[8em] mt-4"
            />
          </a>
        </div>
      </div>
      <div className="w-3/5 flex justify-between items-center">
        <span>
          EcoSeva <br /> Copyright &copy; 2023
        </span>
        <span>Made with ❤️ from India</span>
      </div>
    </div>
  );
};

export default Footer;
