import { H1 } from "@/components/H1";
import { H2 } from "@/components/H2";
import { P } from "@/components/P";
import ToolGrid from "@/components/ToolGrid";

export default function Page() {
  const encryption = [22, 73];
  const cloudencryption = [28];

  return (
    <div>
      <H1>Chiffrement</H1>
      <P>Chiffrer description </P>
      <H2>Chiffrement local</H2>
      <ToolGrid toolIds={encryption} />
      <H2>Chiffrement de cloud</H2>
      <ToolGrid toolIds={cloudencryption} />
    </div>
  );
}
