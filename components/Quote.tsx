import React, { ReactNode } from "react";

interface QuoteProps {
  className?: string;
  children: ReactNode;
  id?: string;
}

export const Quote = ({ className, children }: QuoteProps) => {
  return (
    <h3 className={`mt-6 border-l-2 pl-6 italic ${className}`}>
      {children}
    </h3>
  );
};
