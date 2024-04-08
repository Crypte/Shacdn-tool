import React, { ReactNode } from "react";

interface H2Props {
  className?: string;
  children: ReactNode;
  id?: string;
}

export const H2 = ({ className, children }: H2Props) => {
  return (
    <h2 className={`w-fit scroll-m-20 border-b-2 border-primary/40 pb-2 mt-10 text-3xl font-bold tracking-tight first:mt-0 ${className}`}>
      {children}
    </h2>
  );
};
