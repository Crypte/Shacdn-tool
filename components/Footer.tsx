import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { ThemeSwitch } from "./Theme-switch";

interface FooterProps {
  lang: Locale;
}

export async function Footer({ lang }: FooterProps) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="py-5 border-t flex items-center justify-center">
      <span className="mr-2">© Brand, Inc.</span>
      <ThemeSwitch />
    </div>
  );
}