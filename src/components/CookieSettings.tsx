import React from 'react';
import { X } from 'lucide-react';

interface CookieSettingsProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (settings: CookieSettings) => void;
  initialSettings: CookieSettings;
}

export interface CookieSettings {
  necessary: boolean;
}

const CookieSettings: React.FC<CookieSettingsProps> = ({
  isOpen,
  onClose,
  onSave,
  initialSettings,
}) => {
  const [settings] = React.useState<CookieSettings>(initialSettings);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(settings);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-semibold mb-6">Cookie-Einstellungen</h2>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 pt-1">
              <input
                type="checkbox"
                checked={settings.necessary}
                disabled={true}
                className="w-4 h-4 text-[#3568a4] border-gray-300 rounded focus:ring-[#3568a4]"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Technisch notwendige Cookies</h3>
              <p className="text-gray-500 text-sm">
                Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                Sie ermöglichen grundlegende Funktionen wie die Navigation und den Zugriff auf geschützte Bereiche der Website.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end space-x-4">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-[#3568a4] text-white rounded-md hover:bg-[#2d5a8d]"
          >
            Einstellungen bestätigen
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieSettings;