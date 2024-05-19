import Link from "next/link";
interface PlinkProps {
  children: React.ReactNode;
  href: string;
}

export const Plink = ({ children, href }: PlinkProps) => {
  return (
    <Link
      href={href}
      className="font-medium text-primary underline underline-offset-4 hover:no-underline"
    >
      {children}
    </Link>
  );
};
