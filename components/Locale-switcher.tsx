'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, Locale } from "../i18n-config";
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "./ui/button";

interface LocaleSwitcherProps {
  lang: Locale;
}

const localeicon = [
  {
    lang: 'fr',
    icon: '🇺🇸'
  },
  {
    lang: 'en',
    icon: '🇫🇷'
  }
];

export function LocaleSwitcher({ lang }: LocaleSwitcherProps) {
  const pathName = usePathname();
  const currentIcon = localeicon.find((icon) => icon.lang === lang)?.icon;

  // Find the opposite locale
  const oppositeLocale = lang === 'en' ? 'fr' : 'en';

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <Button variant={'outline'} className="text-2xl" asChild>
      <Link href={redirectedPathName(oppositeLocale)}>{currentIcon}</Link>
    </Button>
  );
}
