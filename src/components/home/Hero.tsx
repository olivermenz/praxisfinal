import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '../../utils/animations';
import DynamicContactButton from '../DynamicContactButton';
import { Logo } from '../logo/Logo';
import { PracticeName } from '../logo/PracticeName';

interface HeroProps {
  isWithinOpeningHours: boolean;
  onEmergencyClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  isWithinOpeningHours, 
  onEmergencyClick 
}) => {
  return (
    <section className="relative h-[600px] sm:h-[650px] lg:h-[700px]">
      <div className="absolute top-4 right-4 z-10">
        <Logo variant="large" />
      </div>
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          src="/Empfang1.png"
          alt="Empfang der Kinderarztpraxis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3568a4]/80 via-[#3568a4]/60 to-transparent"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="h-full flex items-center">
          <motion.div 
            className="text-white max-w-3xl"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.div 
              className="mb-8"
              variants={fadeInUp}
            >
              <PracticeName variant="hero" />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <p className="text-lg sm:text-xl lg:text-2xl max-w-2xl text-white/90 mb-8">
                Kompetente und liebevolle medizinische Betreuung für Ihre Kinder
              </p>
              <DynamicContactButton
                isWithinOpeningHours={isWithinOpeningHours}
                onEmergencyClick={onEmergencyClick}
                className="shadow-lg hover:shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};