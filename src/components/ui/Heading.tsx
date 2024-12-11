import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ 
  children, 
  level = 1, 
  className = '' 
}) => {
  const baseStyles = 'font-bold text-gray-900';
  const sizeStyles = {
    1: 'text-3xl sm:text-4xl lg:text-5xl',
    2: 'text-2xl sm:text-3xl lg:text-4xl',
    3: 'text-xl sm:text-2xl lg:text-3xl',
    4: 'text-lg sm:text-xl lg:text-2xl',
    5: 'text-base sm:text-lg lg:text-xl',
    6: 'text-sm sm:text-base lg:text-lg'
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <Tag className={`${baseStyles} ${sizeStyles[level]} ${className}`}>
      {children}
    </Tag>
  );
};

export default Heading;