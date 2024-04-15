import { Herosection } from "@/components/Herosection";
import { Locale } from "@/i18n-config";
import { ArrowDown } from "lucide-react";
import {CategorySection} from "@/components/CategorySection";
import { Carrousel } from "@/components/Carrousel";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <div>
      <Herosection lang={lang}/>
      <CategorySection lang={lang}/>
      <Carrousel/>
    
    </div>
  );
}
