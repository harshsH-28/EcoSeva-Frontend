import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeImg from "../assets/HomeGif.gif";
import Card from "../components/Card";
import globe from "../assets/globe.gif";
import eco from "../assets/environmentGif.gif";
import mobile from "../assets/mobile.gif";
import Chat from "./Chat";
import "aos/dist/aos.css";
import AuthService from "../services/auth.service";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!AuthService.getCurrentUser()) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="mb-24">
      <div className="flex justify-center items-center pl-20">
        <div>
          <h1 className="font-bold text-left text-6xl mb-5">
            Serve the nature because it's{" "}
            <span className="text-[#86B049]">yours</span> too.
          </h1>
          <p className="text-[#A0A0A0] text-4xl mb-5">
            Bin it right, save the planet's might!
          </p>
          <button className="bg-[#5600FF] px-4 py-3 rounded-lg text-white shadow-md">
            <a href="/dashboard">Go to dashboard</a>
          </button>
        </div>
        <img src={HomeImg} alt="HomePageImage" className="w-[60vw]" />
      </div>
      <div className="flex flex-col justify-center items-center mb-44">
        <div>
          <img src={globe} alt="Enabled by IOT" className="scale-50" />
          <h1 className="text-center font-bold text-3xl">Enabled by IOT</h1>
        </div>
        <div>
          <img src={eco} alt="Environment Friendly" className="scale-75" />
          <h1 className="text-center font-bold text-3xl">
            Environment Friendly
          </h1>
        </div>
        <div>
          <img
            src={mobile}
            alt="Automatically detects nearest dustbin"
            className="scale-75"
          />
          <h1 className="text-center font-bold text-3xl">
            Automatically detects nearest dustbin
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-12">
        <h1 className="text-center text-3xl font-bold">Need of EcoSeva</h1>
        <div className="flex justify-around">
          <Card
            name="User Xyz"
            desc="“Saving nature is a critical issue, and smart dustbins are an innovative solution. They help reduce waste, promote recycling, and keep the environment clean. Highly recommended!”"
          />
          <Card
            name="User abc"
            desc="“Saving nature is a critical issue, and smart dustbins are an innovative solution. They help reduce waste, promote recycling, and keep the environment clean. Highly recommended!”"
          />
          <Card
            name="User pqr"
            desc="“Saving nature is a critical issue, and smart dustbins are an innovative solution. They help reduce waste, promote recycling, and keep the environment clean. Highly recommended!”"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
