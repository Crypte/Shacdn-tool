import { TOOL_LIST } from "@/constants/tool_data";
import Toolcard from "./Toolcard";

export function Alltool() {
  return (
    <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6">
      {TOOL_LIST.map((item, index) => (
        <Toolcard id={item.id} key={index} />
      ))}
    </div>
  );
}
