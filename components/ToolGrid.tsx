import React from "react";
import Toolcard from "./Toolcard";

type ToolGridProps = {
  toolIds: number[]; // Un tableau d'ID d'outils
};


const ToolGrid = ({ toolIds }: ToolGridProps) => {
  return (
    <div className="md:grid md:grid-cols-2 gap-5 my-6">
      {toolIds.map((id) => (
        <Toolcard key={id} id={id}  />
      ))}
    </div>
  );
};

export default ToolGrid;
