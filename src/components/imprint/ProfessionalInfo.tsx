import React from 'react';

const ProfessionalInfo: React.FC = () => {
  return (
    <div className="space-y-2">
      <p>
        Berufsbezeichnung: Fachärztin für Kinder- und Jugendmedizin<br />
        Zuständige Kammer: Ärztekammer Westfalen-Lippe<br />
        Verliehen durch: Bundesrepublik Deutschland
      </p>
      <p className="mt-4">
        Es gelten folgende berufsrechtliche Regelungen:<br />
        - Arzt-Gesetzbuch<br />
        Regelungen einsehbar unter: <a href="http://www.aerztekammer-nrw.de" className="text-primary-600 hover:text-primary-700">www.aerztekammer-nrw.de</a>
      </p>
    </div>
  );
};

export default ProfessionalInfo;