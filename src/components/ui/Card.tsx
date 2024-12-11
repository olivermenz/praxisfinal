import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  animate = true 
}) => {
  const baseStyles = 'bg-white rounded-lg shadow-sm overflow-hidden';
  
  if (animate) {
    return (
      <motion.div
        className={`${baseStyles} ${className}`}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`${baseStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;