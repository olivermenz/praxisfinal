import React from 'react';
import { motion } from 'framer-motion';
import { TeamMemberImage } from './TeamMemberImage';
import { TeamMemberInfo } from './TeamMemberInfo';
import { TeamMemberType } from '../../types/team';

const TeamMember: React.FC<TeamMemberType> = ({ 
  name, 
  title, 
  image, 
  description 
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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
    </motion.div>
  );
};

export default TeamMember;