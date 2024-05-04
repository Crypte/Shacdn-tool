import { PLATFORM_TAB } from "@/constants/badges";

type PlatformProps = {
  variant: string;
};

export const Platform = ({ variant }: PlatformProps) => {
  // Recherchez le badge correspondant dans PLATFORM_TAB
  const platformInfo = PLATFORM_TAB[variant];

  if (!platformInfo) {
    return null; // Gérer le cas où le badge n'est pas trouvé
  }

  const { icon: IconComponent } = platformInfo;

  return <IconComponent size={17} className={` ${variant}`} />;
};
