import { H1 } from "@/components/H1";
import { TOOL_LIST } from "@/constants/tool_data";
import ToolGrid from "@/components/ToolGrid";


export default function Home() {
  const data = TOOL_LIST;
  return (
    <>
    <H1>All tools </H1>
    <ToolGrid toolIds={data.map(tool => tool.id)} />
    </>
  );}