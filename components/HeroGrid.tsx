import Image from "next/image"; // Make sure to import Image from Next.js if using it
import { AspectRatio } from "./ui/aspect-ratio";

export const HeroGrid = () => {
  return (
    <div className="relative rounded-lg p-6 overflow-x-hidden">
      <AspectRatio ratio={16 / 9}>
        <div>
          <Image
            className=" absolute right-1/2 translate-x-1/2 rounded-3xl object-cover heroimg mx-auto min-w-[700px] h-fit "
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
