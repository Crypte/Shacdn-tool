import { Herosection } from "@/components/Herosection";
import { Locale } from "@/i18n-config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <div>
      <Herosection lang={lang}/>
    </div>
  );
}
