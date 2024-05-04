import { BADGE_TAB } from "@/constants/badges";

type BadgeProps = {
  variant: string;
};

export function Badge({ variant }: BadgeProps) {
  // Recherchez le badge correspondant dans BADGE_TAB
  const badgeInfo = BADGE_TAB[variant];

  if (!badgeInfo) {
    return null; // Gérer le cas où le badge n'est pas trouvé
  }

  const { name, icon: IconComponent, color } = badgeInfo;

  return (
    <span className="flex gap-1 items-center rounded-sm px-2 py-1 text-xs pointer-events-none bg-black text-white">
      <IconComponent color={color} className={`h-3.5 w-3.5`} />
      {name}
    </span>
  );
}
