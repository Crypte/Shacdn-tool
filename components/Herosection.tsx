import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

interface LocaleHerosectionProps {
    lang: Locale;
  }


export async function Herosection({ lang }: LocaleHerosectionProps){
    const dictionary = await getDictionary(lang);
    return (
        <div className="mt-44 relative">
                    <div className="gradient-background red"></div>
                    <div className="gradient-background blue"></div>
                    <div className="gradient-background green"></div>
                <div className="text-center flex flex-col overflow-hidden items-center">
                    <h2 className=' text-xl mb-10 text-primary'>{dictionary["herosection"].bigslogan}</h2>
                    <h1 className=' text-6xl lg:text-7xl font-bold tracking-tight text-center mb-14'>{dictionary["herosection"].littleslogan}</h1>
                </div>
                
     </div>

    );
};