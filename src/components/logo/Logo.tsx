import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface LogoProps {
  variant: 'small' | 'large';
  className?: string;
  animate?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant, 
  className = '',
  animate = true 
}) => {
  const logoSrc = variant === 'small' ? '/logo_small.png' : '/logo_large.png';
  const logoHeight = variant === 'small' ? 'h-[45px]' : 'h-[180px]';
  
  const image = (
    <img
      src={logoSrc}
      alt="Kinderarztpraxis Logo"
      className={`w-auto ${logoHeight} object-contain ${className}`}
    />
  );

  if (!animate) {
    return image;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {image}
    </motion.div>
  );
};