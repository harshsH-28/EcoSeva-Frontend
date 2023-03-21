import React, { FunctionComponent } from "react";
import personIcon from "../assets/personIcon.png";

interface CardProps {
  name: string;
  desc: string;
}

const Card: FunctionComponent<CardProps> = ({ name, desc }) => {
  return (
    <div className="w-[25vw] flex flex-col bg-white py-10 px-8 shadow-2xl rounded-md gap-4">
      <div className="flex">
        <img src={personIcon} alt="personIcon" className="scale-75 w-6 mr-4" />
        <h1>{name}</h1>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
