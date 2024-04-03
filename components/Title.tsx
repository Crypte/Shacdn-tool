import React, { ReactNode } from "react";

interface TitleProps {
  className?: string;
  children: ReactNode;
}

export const Title = ({ className,children }: TitleProps) => {
  return (
    <h1 className={`mt-10 mb-6 text-3xl font-bold text-main-grey ${className}`}>
      {children}
    </h1>
  );
};
