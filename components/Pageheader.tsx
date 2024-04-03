'use client';

import { NAV_BAR } from "@/constants";
import { usePathname} from 'next/navigation';

interface PageheaderProps {}

export const Pageheader: React.FC<PageheaderProps> = () => {
  const router = usePathname();

  const categoryActuelle = NAV_BAR
    .flatMap((category) => category.submenu)
    .find((tool) => `${tool.href}` === router);

  if (!categoryActuelle) {
    return null;
  }

  const pagetitle = categoryActuelle.title;
  const pagesubtitle = categoryActuelle.subtitle;

  return (
    <div className="text-center mt-44 mb-24">
      <h2 className="mb-2 text-primary text-lg ">{pagetitle}</h2>
      <h1 className='text-4xl font-bold'>{pagesubtitle}</h1>
    </div>
  );
};
