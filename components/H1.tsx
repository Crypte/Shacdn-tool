import React, { ReactNode } from "react";

interface H1Props {
  className?: string;
  children: ReactNode;
}

export const H1 = ({ className,children }: H1Props) => {
  return (
    <h1 className={` w-fit scroll-m-20 text-3xl font-bold tracking-tight lg:text-5xl mt-10 border-b-2 pb-2 border-primary/40 ${className}`}>
      {children}
    </h1>
  );
};
