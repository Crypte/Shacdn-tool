import React, { ReactNode } from "react";

interface H1Props {
  className?: string;
  children: ReactNode;
  subtitle? : String;
}

export const H1 = ({ className,children,subtitle }: H1Props) => {
  return (
    <div className="mb-4 mt-4 scroll-m-20">
    <h1 className={`mb-2 w-fit text-4xl font-bold tracking-tight lg:text-5xl pb-2 border-b-2 border-primary/50 ${className}`}>
      {children}
    </h1>
    
    </div>
  );
};
