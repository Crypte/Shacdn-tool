import { HeroGrid } from "@/components/HeroGrid";
import { Herosection } from "@/components/Herosection";

export default function Home() {
  return (
    <div className="space-y-6">
      <Herosection />
      <HeroGrid />
    </div>
  );
}
