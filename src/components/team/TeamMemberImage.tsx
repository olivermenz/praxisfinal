import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberImageProps {
  image: string;
  name: string;
  className?: string;
}

export const TeamMemberImage: React.FC<TeamMemberImageProps> = ({ 
  image, 
  name,
  className = ''
}) => {
  return (
    <motion.div 
      className={`relative overflow-hidden rounded-t-lg aspect-[4/3] ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
    </motion.div>
  );
};