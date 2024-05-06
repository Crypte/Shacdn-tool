import { TOOL_LIST } from "@/constants/tool_data"; // Ensure the path is correct
import Image from "next/image"; // Make sure to import Image from Next.js if using it

export const HeroGrid = () => {
  return (
    <div className="relative mt-20 rounded-lg p-6 gap-3 sm:gap-6 place-items-stretch grid grid-cols-4 grid-row-6 sm:grid-cols-6 sm:grid-rows-4 lg:grid-cols-8 lg:grid-rows-3">
      <div className="absolute inset-0 z-[-1] w-3/4 h-full rounded-full bg-gradient-to-tl from-purple-400 to-red-400 blur-3xl translate-y-[-20%] dark:opacity-20 opacity-60 left-1/2 transform -translate-x-1/2" />

      {TOOL_LIST.slice(0, 24).map((item, index) => (
        <div
          key={index}
          className="p-2 md:p-5 rounded-xl bg-muted/30 w-30 h-30"
        >
          <Image
            className="rounded-xl"
            src={item.url_logo}
            alt="Tool logo"
            width={200}
            height={200}
          />
        </div>
      ))}
    </div>
  );
};
