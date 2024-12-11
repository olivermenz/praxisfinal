import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <div className="absolute top-4 right-4 z-10">
      <motion.img
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        src="/logo_large.png"
        alt="Kinderarztpraxis Logo"
        className="w-auto h-[180px] object-contain"
      />
    </div>
  );
};

export default Header;