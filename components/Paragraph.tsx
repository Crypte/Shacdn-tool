import React, { ReactNode } from 'react';

interface ParagraphProps {
  className?: string;
  children: ReactNode;
}

export const Paragraph = ({ className, children} :ParagraphProps) => {
  return (
    <p className={`mb-5 text-secondary-foreground text-justify text-sm leading-6 [&:not(:first-child)]:mt-6 ${className}`}>
      {children}
    </p>
  );
};
