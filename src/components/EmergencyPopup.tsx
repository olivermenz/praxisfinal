import React from 'react';
import { X, Phone, Clock, AlertCircle } from 'lucide-react';

interface EmergencyPopupProps {
  isOpen: boolean;
  onClose: () => void;
  isWithinOpeningHours: boolean;
}

const EmergencyPopup = ({ isOpen, onClose, isWithinOpeningHours }: EmergencyPopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-6">
          {isWithinOpeningHours ? (
            <>
              <div className="flex items-center text-[#3568a4] mb-4">
                <Clock className="w-6 h-6 mr-2" />
                <h3 className="text-xl font-semibold">Praxis geöffnet</h3>
              </div>
              <p className="text-gray-600 mb-4">Bitte kontaktieren Sie uns unter:</p>
              <a
                href="tel:+49230259234"
                className="flex items-center justify-center w-full bg-[#3568a4] text-white py-3 px-4 rounded-md hover:bg-[#2d5a8d] transition-colors mb-2"
              >
                <Phone className="w-5 h-5 mr-2" />
                02302 59234
              </a>
            </>
          ) : (
            <>
              <div className="flex items-center text-red-600 mb-4">
                <AlertCircle className="w-6 h-6 mr-2" />
                <h3 className="text-xl font-semibold">Ärztlicher Bereitschaftsdienst</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Außerhalb der Öffnungszeiten wenden Sie sich bitte an:
              </p>
              <a
                href="tel:116117"
                className="flex items-center justify-center w-full bg-[#3568a4] text-white py-3 px-4 rounded-md hover:bg-[#2d5a8d] transition-colors mb-2"
              >
                <Phone className="w-5 h-5 mr-2" />
                116 117
              </a>
              <a
                href="tel:112"
                className="flex items-center justify-center w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                112 (Notfall)
              </a>
            </>
          )}
        </div>

        <div className="text-sm text-gray-500">
          <p className="font-semibold mb-2">Öffnungszeiten:</p>
          <p>Mo. Di. Do.: 08:00 - 11:00 & 15:00 - 17:00</p>
          <p>Mi. & Fr.: 08:00 - 11:00</p>
        </div>
      </div>
    </div>
  );
};

export default EmergencyPopup;