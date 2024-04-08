import React, { ReactNode } from "react";

interface H1Props {
  className?: string;
  children: ReactNode;
  subtitle? : String;
}

export const H1 = ({ className,children,subtitle }: H1Props) => {
  return (
    <div className="my-8 scroll-m-20">
    <h1 className={`mb-2 w-fit text-4xl font-bold tracking-tight lg:text-5xl ${className}`}>
      {children}
    </h1>
    <h2 className="text-md text-primary font-semibold tracking-tight lg:text-base">
      {subtitle}
    </h2>
    </div>
  );
};
