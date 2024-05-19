import Image from "next/image"; // Make sure to import Image from Next.js if using it
import { AspectRatio } from "./ui/aspect-ratio";

export const HeroGrid = () => {
  return (
    <div className="relative mt-20 rounded-lg p-6">
      <div className="absolute z-[-1] w-3/4 h-full rounded-full bg-gradient-to-tl from-purple-400 to-red-400 blur-3xl translate-y-[-30%] dark:opacity-20 opacity-60 left-1/2 transform -translate-x-1/2" />
      <AspectRatio ratio={16 / 9}>
        <div className="relative">
          <Image
            className="rounded-3xl object-cover heroimg mx-auto min-w-[900px] w-full h-auto "
            src={"/herogrid.png"}
            alt="Tool logo"
            width={1920}
            height={1080}
          />
          <div className="absolute bg-gradient-to-r from-transparent via-white to-transparent" />
        </div>
      </AspectRatio>
    </div>
  );
};
