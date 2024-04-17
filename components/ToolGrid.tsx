import React from "react";
import Toolcard from "./Toolcard";

type ToolGridProps = {
  toolIds: number[];
};


const ToolGrid = ({ toolIds }: ToolGridProps) => {
  return (
    <div className="md:grid md:grid-cols-2 gap-5 my-6 flex flex-col">
      {toolIds.map((id,index) => (
        <Toolcard key={index} id={id}   />
      ))}
    </div>
  );
};

export default ToolGrid;
