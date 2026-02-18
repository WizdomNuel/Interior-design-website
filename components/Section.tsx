import React, { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bgColor?: 'white' | 'offwhite' | 'dark';
}

const Section: React.FC<SectionProps> = ({ id, children, className = '', bgColor = 'offwhite' }) => {
  const bgClasses = {
    white: 'bg-white',
    offwhite: 'bg-stone-50',
    dark: 'bg-stone-900 text-stone-100',
  };

  return (
    <section id={id} className={`py-12 md:py-20 lg:py-32 ${bgClasses[bgColor]} ${className}`}>
      {children}
    </section>
  );
};

export default Section;