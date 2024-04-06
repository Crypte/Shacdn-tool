import React, { ReactNode } from "react";

interface H3Props {
  className?: string;
  children: ReactNode;
  id?: string;
}

export const H3 = ({ className, children }: H3Props) => {
  return (
    <h3 className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}>
      {children}
    </h3>
  );
};
