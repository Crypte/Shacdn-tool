import Toolcard from "./Toolcard";

type ToolGridProps = {
  toolIds: number[];
};

const ToolGrid = ({ toolIds }: ToolGridProps) => {
  return (
    <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6">
      {toolIds.map((id, index) => (
        <Toolcard key={index} id={id} />
      ))}
    </div>
  );
};

export default ToolGrid;
