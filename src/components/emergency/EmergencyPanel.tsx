import React from 'react';
import { AlertCircle } from 'lucide-react';
import Overlay from '../ui/Overlay';
import EmergencyContact from './EmergencyContact';
import EmergencyInfo from './EmergencyInfo';

interface EmergencyPanelProps {
  isOpen: boolean;
  onClose: () => void;
  isWithinOpeningHours: boolean;
}

const EmergencyPanel: React.FC<EmergencyPanelProps> = ({
  isOpen,
  onClose,
  isWithinOpeningHours
}) => {
  // During opening hours, we don't need to show the panel at all
  if (isWithinOpeningHours) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onClose={onClose} position="right" width="md">
      <div className="space-y-6">
        <div className="flex items-center border-b pb-4">
          <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
          <h2 className="text-lg font-semibold">Ärztlicher Bereitschaftsdienst</h2>
        </div>

        <EmergencyInfo isWithinOpeningHours={isWithinOpeningHours} />
        <EmergencyContact isWithinOpeningHours={isWithinOpeningHours} />
      </div>
    </Overlay>
  );
};

export default EmergencyPanel;