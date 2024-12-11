import React from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard from './TeamMemberCard';
import { TeamMemberType } from '../../types/team';

interface TeamGridProps {
  members: TeamMemberType[];
}

const TeamGrid: React.FC<TeamGridProps> = ({ members }) => {
  const activeMembers = members.filter(member => member.name && member.title);

  return (
    <div className="flex justify-center">
      <motion.div 
        className="grid grid-cols-1 gap-8 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {activeMembers.map((member) => (
          <TeamMemberCard 
            key={member.id}
            {...member}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TeamGrid;