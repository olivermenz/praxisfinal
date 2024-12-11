import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderLogo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-3">
      <img
        src="/logo_small.png"
        alt="Kinderarztpraxis Logo"
        className="h-[45px] w-auto"
      />
      <div className="flex flex-col">
        <span className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
          Kinderarztpraxis
        </span>
        <span className="text-sm sm:text-base font-semibold text-gray-900 leading-tight">
          Dr. med. Kyra Menz-von Studnitz
        </span>
      </div>
    </Link>
  );
};

export default HeaderLogo;