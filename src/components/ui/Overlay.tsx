import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position?: 'right' | 'center';
  width?: 'full' | 'md' | 'lg';
}

const Overlay: React.FC<OverlayProps> = ({
  isOpen,
  onClose,
  children,
  position = 'right',
  width = 'md'
}) => {
  const widthClasses = {
    full: 'w-full',
    md: 'max-w-md w-full',
    lg: 'max-w-lg w-full'
  };

  const positionVariants = {
    right: {
      initial: { x: '100%' },
      animate: { x: 0 },
      exit: { x: '100%' }
    },
    center: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={positionVariants[position].initial}
            animate={positionVariants[position].animate}
            exit={positionVariants[position].exit}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed ${position === 'right' ? 'right-0 top-0 bottom-0' : 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'} 
              ${widthClasses[width]} bg-white shadow-xl z-50 flex flex-col
              ${position === 'right' ? '' : 'rounded-lg max-h-[90vh]'}`}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex-1 overflow-y-auto p-6">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Overlay;