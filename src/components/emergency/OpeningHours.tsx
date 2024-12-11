import React from 'react';

const OpeningHours: React.FC = () => {
  return (
    <div className="border-t pt-6">
      <h3 className="font-semibold text-gray-900 mb-3">Unsere Öffnungszeiten:</h3>
      <div className="space-y-2 text-gray-600">
        <p>Mo. Di. Do.: 08:00 - 11:00 & 15:00 - 17:00</p>
        <p>Mi. & Fr.: 08:00 - 11:00</p>
        <p className="text-sm italic mt-2">und nach Vereinbarung</p>
      </div>
      <p className="text-sm text-gray-500 mt-4">
        Bitte beachten Sie, dass an Feiertagen und während der Urlaubszeiten abweichende Öffnungszeiten gelten können.
      </p>
    </div>
  );
};

export default OpeningHours;