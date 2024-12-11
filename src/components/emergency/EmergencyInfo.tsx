import React from 'react';

interface EmergencyInfoProps {
  isWithinOpeningHours: boolean;
}

const EmergencyInfo: React.FC<EmergencyInfoProps> = ({ isWithinOpeningHours }) => {
  if (isWithinOpeningHours) {
    return null;
  }

  return (
    <div className="space-y-3 text-xs text-gray-600">
      <p>
        Die Praxis ist derzeit geschlossen. In dringenden Fällen wenden Sie sich bitte an die 
        Kinderklinik Witten<br />
        Marienplatz 2<br />
        58452 Witten<br />
        Tel.: 02302-17 30
      </p>
      <p>
        oder an das<br />
        Gemeinschaftskrankenhaus Herdecke<br />
        Gerhard-Kienle-Weg 4<br />
        58313 Herdecke<br />
        Telefon 02330 62-0
      </p>
      <p>
        Weiterhin steht der ärztliche Bereitschaftsdienst unter der bundesweit einheitlichen 
        Rufnummer 116117 zur Verfügung.
      </p>
      <p>
        Bei lebensbedrohlichen Notfällen wählen Sie bitte die 112.
      </p>
    </div>
  );
};

export default EmergencyInfo;