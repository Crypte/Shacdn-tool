import { H1 } from "@/components/H1";
import { H2 } from "@/components/H2";
import { P } from "@/components/P";
import ToolGrid from "@/components/ToolGrid";

export default function Page() {
  const cloud = [30, 62, 52, 9, 80, 91];
  const transmission = [49];

  return (
    <div>
      <H1>Services cloud</H1>
      <P>Cloud description</P>
      <H2>Service de stockage </H2>
      <ToolGrid toolIds={cloud} />
      <H2>Transmission</H2>
      <ToolGrid toolIds={transmission} />
    </div>
  );
}
