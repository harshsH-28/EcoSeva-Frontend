import React, { FunctionComponent } from "react";

interface DustbinGroupProps {
  groupName: string;
  dustbins: Array<string>;
}

const DustbinGroup: FunctionComponent<DustbinGroupProps> = ({
  groupName,
  dustbins,
}) => {
  return (
    <ul className="shadow-lg w-[20em] rounded-xl">
      <h1 className="bg-[#C1E3F7] px-6 py-1 border-b-2">{groupName}</h1>
      {dustbins.map((dustbin) => {
        return <li className="bg-[#FFEDC5] px-6 py-2">{dustbin}</li>;
      })}
    </ul>
  );
};

export default DustbinGroup;
