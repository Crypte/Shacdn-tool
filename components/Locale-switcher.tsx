'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, Locale } from "../i18n-config";
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";

interface LocaleSwitcherProps {
  lang: Locale;
}

const localeicon = [
  {
    lang: 'fr',
    icon: '🇫🇷'
  },
  {
    lang: 'en',
    icon: '🇺🇸'
  }
];

export function LocaleSwitcher({ lang }: LocaleSwitcherProps) {
  const pathName = usePathname();
  const currentIcon = localeicon.find((icon) => icon.lang === lang)?.icon;

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <Select>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder={currentIcon}/>
      </SelectTrigger>
      <SelectContent>
        {i18n.locales.map((locale, index) => {
          const icon = localeicon.find((icon) => icon.lang === locale)?.icon;
          return (
            <Link key={index} href={redirectedPathName(locale)}>
              {icon}
            </Link>
          );
        })}
      </SelectContent>
    </Select>
  );
}
