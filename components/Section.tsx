import React, { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bgColor?: 'white' | 'offwhite' | 'dark';
}

const Section: React.FC<SectionProps> = ({ id, children, className = '', bgColor = 'dark' }) => {
  const bgClasses = {
    white: 'bg-white text-fdd-light-text-primary',
    offwhite: 'bg-white text-fdd-light-text-primary',
    dark: 'bg-fdd-dark-bg text-fdd-dark-text-primary',
  };

  return (
    <section id={id} className={`py-12 md:py-20 lg:py-32 ${bgClasses[bgColor]} ${className}`}>
      {children}
    </section>
  );
};

export default Section;