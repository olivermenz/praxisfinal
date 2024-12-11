import React from 'react';
import { motion } from 'framer-motion';
import Card from './ui/Card';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full">
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="ml-3 text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600">{content}</p>
      </Card>
    </motion.div>
  );
};

export default InfoCard;