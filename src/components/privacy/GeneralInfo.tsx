import React from 'react';

const GeneralInfo: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-800">Allgemeine Hinweise</h3>
      <p className="text-gray-600">
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
        wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
        werden können.
      </p>
      <h3 className="text-lg font-medium text-gray-800">Datenerfassung auf dieser Website</h3>
      <p className="text-gray-600">
        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten können Sie dem 
        Impressum dieser Website entnehmen.
      </p>
    </div>
  );
};

export default GeneralInfo;