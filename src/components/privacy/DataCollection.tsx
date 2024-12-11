import React from 'react';

const DataCollection: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-800">Wie erfassen wir Ihre Daten?</h3>
      <p className="text-gray-600">
        Ihre Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. 
        Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit 
        des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese 
        Website betreten.
      </p>
      <p className="text-gray-600">
        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu 
        gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
      </p>
    </div>
  );
};

export default DataCollection;