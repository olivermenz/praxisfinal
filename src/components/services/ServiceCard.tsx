import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Card from '../ui/Card';

interface ServiceCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ Icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full">
        <div className="p-6">
          <Icon className="w-12 h-12 text-[#3568a4] mb-4" />
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;