import { Path } from "@/components/Path";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Path/>
      {children}
    </>
  );
}
