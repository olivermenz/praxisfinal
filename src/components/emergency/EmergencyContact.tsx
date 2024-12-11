import React from 'react';
import { Phone } from 'lucide-react';
import { createPhoneLink } from '../../utils/phoneUtils';

interface EmergencyContactProps {
  isWithinOpeningHours: boolean;
}

const EmergencyContact: React.FC<EmergencyContactProps> = ({ isWithinOpeningHours }) => {
  const practiceNumber = '02302 59234';
  const emergencyNumber = '116117';
  const urgentEmergencyNumber = '112';

  return (
    <div className="space-y-3">
      {isWithinOpeningHours ? (
        <a
          href={createPhoneLink(practiceNumber)}
          className="flex items-center justify-center w-full bg-[#3568a4] text-white py-2 px-4 rounded-md hover:bg-[#2d5a8d] transition-colors text-sm"
        >
          <Phone className="w-4 h-4 mr-2" />
          {practiceNumber}
        </a>
      ) : (
        <>
          <a
            href={createPhoneLink(emergencyNumber)}
            className="flex items-center justify-center w-full bg-[#3568a4] text-white py-2 px-4 rounded-md hover:bg-[#2d5a8d] transition-colors text-sm"
          >
            <Phone className="w-4 h-4 mr-2" />
            {emergencyNumber} (Ärztlicher Bereitschaftsdienst)
          </a>
          <a
            href={createPhoneLink(urgentEmergencyNumber)}
            className="flex items-center justify-center w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors text-sm"
          >
            <Phone className="w-4 h-4 mr-2" />
            {urgentEmergencyNumber} (Notfall)
          </a>
        </>
      )}
    </div>
  );
};

export default EmergencyContact;