import React from 'react';
import { Phone, AlertCircle } from 'lucide-react';
import { createPhoneLink } from '../utils/phoneUtils';
import Overlay from './ui/Overlay';

// ... rest of the imports ...

const EmergencyPanel: React.FC<EmergencyPanelProps> = ({ 
  isOpen, 
  onClose, 
  isWithinOpeningHours 
}) => {
  const practiceNumber = '02302 59234';
  const emergencyNumber = '116117';
  const urgentEmergencyNumber = '112';

  return (
    <Overlay isOpen={isOpen} onClose={onClose} position="right" width="md">
      {/* ... other content ... */}
      {isWithinOpeningHours ? (
        <a
          href={createPhoneLink(practiceNumber)}
          className="flex items-center justify-center w-full bg-[#3568a4] text-white py-3 px-4 rounded-md hover:bg-[#2d5a8d] transition-colors mb-4"
        >
          <Phone className="w-5 h-5 mr-2" />
          {practiceNumber}
        </a>
      ) : (
        <>
          <a
            href={createPhoneLink(emergencyNumber)}
            className="flex items-center justify-center w-full bg-[#3568a4] text-white py-3 px-4 rounded-md hover:bg-[#2d5a8d] transition-colors mb-4"
          >
            <Phone className="w-5 h-5 mr-2" />
            {emergencyNumber}
          </a>
          <a
            href={createPhoneLink(urgentEmergencyNumber)}
            className="flex items-center justify-center w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            {urgentEmergencyNumber}
          </a>
        </>
      )}
      {/* ... rest of the component ... */}
    </Overlay>
  );
};

export default EmergencyPanel;