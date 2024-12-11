import React from 'react';

interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: 4 | 6 | 8 | 12;
  className?: string;
}

const Grid: React.FC<GridProps> = ({ 
  children, 
  cols = 3, 
  gap = 8,
  className = '' 
}) => {
  const colsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  const gapClasses = {
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
    12: 'gap-12'
  };

  return (
    <div className={`grid ${colsClasses[cols]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
};

export default Grid;