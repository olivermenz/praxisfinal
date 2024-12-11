import React from 'react';

interface ImprintSectionProps {
  title: string;
  children: React.ReactNode;
}

const ImprintSection: React.FC<ImprintSectionProps> = ({ title, children }) => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <div className="prose prose-gray max-w-none">
        {children}
      </div>
    </section>
  );
};

export default ImprintSection;