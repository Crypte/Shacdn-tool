import React, { ReactNode } from 'react';

interface PProps {
  className?: string;
  children: ReactNode;
}

export const P = ({ className, children} :PProps) => {
  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground ${className}`}>
      {children}
    </p>
  );
};
