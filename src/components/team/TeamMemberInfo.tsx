import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberInfoProps {
  name: string;
  title: string;
  description: string;
}

export const TeamMemberInfo: React.FC<TeamMemberInfoProps> = ({ 
  name, 
  title, 
  description 
}) => {
  return (
    <motion.div 
      className="p-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
      <p className="text-[#3568a4] font-medium mb-4">{title}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};