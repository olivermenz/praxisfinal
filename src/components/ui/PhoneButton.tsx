import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PhoneButtonProps {
  phoneNumber: string;
  className?: string;
}

const PhoneButton: React.FC<PhoneButtonProps> = ({ 
  phoneNumber,
  className = ''
}) => {
  const [isNumberVisible, setIsNumberVisible] = useState(false);

  return (
    <motion.button
      className={`inline-flex items-center px-6 py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-[#3568a4] hover:bg-[#2d5a8d] transition-colors ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsNumberVisible(true)}
    >
      <Phone className="w-5 h-5 mr-2" />
      <AnimatePresence mode="wait">
        {isNumberVisible ? (
          <motion.span
            key="number"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {phoneNumber}
          </motion.span>
        ) : (
          <motion.span
            key="text"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            Termin telefonisch
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default PhoneButton;