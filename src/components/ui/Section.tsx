import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: 'white' | 'gray';
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  bgColor = 'white' 
}) => {
  const bgColorClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50'
  };

  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${bgColorClasses[bgColor]} ${className}`}>
      {children}
    </section>
  );
};

export default Section;