import React from 'react';
import { motion } from 'framer-motion';
import { TeamMemberImage } from './TeamMemberImage';
import { TeamMemberInfo } from './TeamMemberInfo';
import { TeamMemberType } from '../../types/team';

const TeamMemberCard: React.FC<TeamMemberType> = ({ 
  name, 
  title, 
  image, 
  description 
}) => {
  return (
    <motion.article
      className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 mx-auto max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <TeamMemberImage 
        image={image} 
        name={name} 
      />
      <TeamMemberInfo 
        name={name}
        title={title}
        description={description}
      />
    </motion.article>
  );
};

export default TeamMemberCard;