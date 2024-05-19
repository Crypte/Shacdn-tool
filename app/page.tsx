import { Alltool } from "@/components/Alltool";
import { Herosection } from "@/components/Herosection";

export default function Home() {
  return (
    <div className="space-y-6">
      <Herosection />
      <Alltool />
    </div>
  );
}
