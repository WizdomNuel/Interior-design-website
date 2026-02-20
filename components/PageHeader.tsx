import React from 'react';

type Props = {
  title: string;
  subtitle?: string;
};

const PageHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="bg-fdd-dark-bg py-16">
      <div className="page-container">
        <span className="text-fdd-dark-text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">{subtitle || 'Overview'}</span>
        <h1 className="font-serif text-4xl md:text-5xl text-fdd-dark-text-primary">{title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;
