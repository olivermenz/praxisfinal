import React from 'react';

interface PracticeNameProps {
  variant: 'header' | 'hero';
  className?: string;
}

export const PracticeName: React.FC<PracticeNameProps> = ({ 
  variant,
  className = '' 
}) => {
  if (variant === 'hero') {
    return (
      <div className={`text-white ${className}`}>
        <span className="block text-2xl sm:text-3xl md:text-4xl mb-2">Willkommen in der</span>
        <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1">
          Kinderarztpraxis
        </span>
        <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Dr. med. Kyra Menz-von Studnitz
        </span>
      </div>
    );
  }

  return (
    <div className={`flex flex-col ${className}`}>
      <span className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
        Kinderarztpraxis
      </span>
      <span className="text-sm sm:text-base font-semibold text-gray-900 leading-tight">
        Dr. med. Kyra Menz-von Studnitz
      </span>
    </div>
  );
};