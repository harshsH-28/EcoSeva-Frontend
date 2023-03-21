import React, { useState, useEffect } from "react";
import Grid from "../assets/Grid.png";
import dashBoardImg from "../assets/Illustration 1.png";
import pieChart from "../assets/Glance.png";
import dusbinImg from "../assets/dustbin.png";
import DustbinGroup from "../components/DustbinGroup";
import addGroupButton from "../assets/plus-square.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import EcosevaService from "../service/ecoseva.service";

const dustbins = ["Dustbin 1", "Dustbin 2"];

const Dashboard = () => {
  const percentage = 66;
  // const [dustbins, setDustbins] = useState([]);

  // useEffect(() => {
  //   const getDustbins = async () => {
  //     const dustins = await EcosevaService.getDustinList();
  //     setDustbins(dustins);
  //   };
  //   getDustbins();
  // }, []);

  return (
    <div>
      <img src={Grid} alt="" />
      <div className="mt-[-45vh] flex justify-evenly items-start mb-36">
        <img src={dashBoardImg} alt="" className="w-[38vw]" />
        <div className="flex flex-col w-[25vw] h-full">
          <div className="w-[25vw] py-7 px-9 bg-[#DFF5CE] rounded-md shadow-sm mb-6 flex flex-col items-center justify-center">
            <h1 className="text-sm mb-6 font-semibold">Nearest</h1>
            <div className="w-[10vw]">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "16px",
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(134, 176, 73,1)`,
                  textColor: "black",
                })}
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="py-6 px-8 bg-[#DFF5CE] rounded-t-md shadow-sm flex flex-col items-center justify-center">
              <h1 className="text-sm mb-6 font-semibold">Biodegradable</h1>
              <CircularProgressbar
                value={63}
                text={`${63}%`}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "16px",
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(234, 67, 53, 1)`,
                  textColor: "black",
                })}
              />
            </div>
            <div className="py-6 px-8 bg-[#DFF5CE] rounded-t-md shadow-sm flex flex-col items-center justify-center  ">
              <h1 className="text-sm mb-6 font-semibold">Non-Biodegradable</h1>
              <CircularProgressbar
                value={35}
                text={`${35}%`}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "16px",
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(234, 67, 53, 1)`,
                  textColor: "black",
                })}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 px-9 py-4 justify-center items-center bg-[#DEE2FC] rounded-b-lg shadow-lg">
            <span>Did you Know?</span>
            <span>Lorem ipsum dolor sit.</span>
          </div>
        </div>
      </div>
      <div className="px-32 flex justify-between items-center mb-16">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <h1 className="text-2xl font-bold">Groups</h1>
              <button>
                <img
                  src={addGroupButton}
                  alt="addGroupButton"
                  className="w-6 hover:scale-105 transition-all ease-in-out"
                />
              </button>
            </div>
            <input
              type="text"
              className="px-2 py-1 rounded-lg border-2 border-black w-1/2 outline-none"
              placeholder="&#128269; Search"
            />
          </div>
          <div className="flex flex-col gap-8">
            <DustbinGroup
              groupName="Group A"
              dustbins={dustbins}
            ></DustbinGroup>
            <DustbinGroup
              groupName="Group A"
              dustbins={dustbins}
            ></DustbinGroup>
            <DustbinGroup
              groupName="Group A"
              dustbins={dustbins}
            ></DustbinGroup>
          </div>
        </div>
        <img src={dusbinImg} alt="DustinImage" className="w-[35vw] h-[25vw]" />
      </div>
    </div>
  );
};

export default Dashboard;
