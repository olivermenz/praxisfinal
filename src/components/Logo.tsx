import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

interface LogoProps {
  variant?: 'default' | 'header' | 'footer';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', className = '' }) => {
  const baseStyles = 'flex items-center';
  const variantStyles = {
    default: 'text-gray-900',
    header: 'text-gray-900',
    footer: 'text-white'
  };

  return (
    <motion.div 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Users className="w-8 h-8 mr-2 text-[#3568a4]" />
      <div className="flex flex-col">
        <span className="text-lg font-semibold">Kinderarztpraxis</span>
        <span className="text-sm">Dr. med. Kyra Menz-von Studnitz</span>
      </div>
    </motion.div>
  );
};

export default Logo;