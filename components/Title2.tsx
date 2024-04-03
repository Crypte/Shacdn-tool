import React, { ReactNode } from "react";

interface TitleProps {
  className?: string;
  children: ReactNode;
  id?: string;
}

export const Title2 = ({ className, id, children }: TitleProps) => {
  return (
    <h2 id={id || (typeof children === 'string' ? children : '')} className={`mt-8 mb-2 text-2xl font-bold ${className}`}>
      {children}
    </h2>
  );
};
