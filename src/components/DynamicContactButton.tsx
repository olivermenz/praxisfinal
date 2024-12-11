import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface DynamicContactButtonProps {
  isWithinOpeningHours: boolean;
  onEmergencyClick: () => void;
  className?: string;
}

const DynamicContactButton: React.FC<DynamicContactButtonProps> = ({
  isWithinOpeningHours,
  onEmergencyClick,
  className = ''
}) => {
  // Only show the button outside of business hours
  if (isWithinOpeningHours) {
    return null;
  }

  return (
    <motion.button
      onClick={onEmergencyClick}
      className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-[#3568a4] hover:bg-[#2d5a8d] transition-colors ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Phone className="w-4 h-4 mr-2" />
      <span>Notfallnummer</span>
    </motion.button>
  );
};

export default DynamicContactButton;