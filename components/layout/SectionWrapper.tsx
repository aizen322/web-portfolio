import { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export function SectionWrapper({
  id,
  children,
  className = '',
  fullWidth = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${className}`}
    >
      <div className={`${fullWidth ? 'w-full' : 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        {children}
      </div>
    </section>
  );
}

