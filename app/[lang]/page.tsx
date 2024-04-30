import { Herosection } from "@/components/Herosection";
import { Locale } from "@/i18n-config";
import {BestSection} from "@/components/BestSection";
import { Carrousel } from "@/components/Carrousel";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <div className='space-y-6'>
      <Herosection lang={lang}/>
      <BestSection/>
      <Carrousel/>
    </div>
  );
}
