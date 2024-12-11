import React from 'react';
import { motion } from 'framer-motion';
import DynamicContactButton from './DynamicContactButton';
import useOpeningHours from '../hooks/useOpeningHours';

interface HeaderContactButtonProps {
  onEmergencyClick: () => void;
}

const HeaderContactButton: React.FC<HeaderContactButtonProps> = ({ onEmergencyClick }) => {
  const isWithinOpeningHours = useOpeningHours();

  // Only render the button outside of business hours
  if (isWithinOpeningHours) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="hidden md:block"
    >
      <DynamicContactButton
        isWithinOpeningHours={isWithinOpeningHours}
        onEmergencyClick={onEmergencyClick}
      />
    </motion.div>
  );
};

export default HeaderContactButton;