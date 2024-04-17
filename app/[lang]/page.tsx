import { Herosection } from "@/components/Herosection";
import { Locale } from "@/i18n-config";
import { ArrowDown } from "lucide-react";
import {CategorySection} from "@/components/CategorySection";
import { Carrousel } from "@/components/Carrousel";
import { BASE_API_URL } from "@/constants/constants";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <div className="lg:space-y-36 space-y-28 ">
      <Herosection lang={lang}/>
      <CategorySection lang={lang}/>
      <Carrousel/>
    
    </div>
  );
}
