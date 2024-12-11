import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationItems } from './NavigationItems';
import DynamicContactButton from '../DynamicContactButton';
import useOpeningHours from '../../hooks/useOpeningHours';

interface MobileMenuProps {
  isOpen: boolean;
  onEmergencyClick: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onEmergencyClick }) => {
  const isWithinOpeningHours = useOpeningHours();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden border-t border-gray-200 bg-white"
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navigationItems.map(({ path, label }) => (
              <Link 
                key={path}
                to={path} 
                className="mobile-nav-link block"
              >
                {label}
              </Link>
            ))}
            {!isWithinOpeningHours && (
              <div className="pt-2">
                <DynamicContactButton
                  isWithinOpeningHours={isWithinOpeningHours}
                  onEmergencyClick={onEmergencyClick}
                  className="w-full justify-center"
                />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};