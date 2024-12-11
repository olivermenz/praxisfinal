import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactInfoProps {
  Icon: LucideIcon;
  title: string;
  content: React.ReactNode;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ Icon, title, content }) => {
  return (
    <div className="flex items-start">
      <Icon className="w-5 h-5 text-[#3568a4] mt-0.5 flex-shrink-0" />
      <div className="ml-3">
        <h3 className="text-sm font-medium text-gray-700">{title}</h3>
        <div className="mt-1 text-gray-600">{content}</div>
      </div>
    </div>
  );
};

export default ContactInfo;