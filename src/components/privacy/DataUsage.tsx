import React from 'react';

const DataUsage: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-800">Wofür nutzen wir Ihre Daten?</h3>
      <p className="text-gray-600">
        Die Daten werden ausschließlich erhoben, um eine fehlerfreie Bereitstellung der Website 
        zu gewährleisten. Die Analyse der Daten hilft uns, die Website für Sie zu optimieren 
        und die technische Funktionalität sicherzustellen.
      </p>
      <h3 className="text-lg font-medium text-gray-800 mt-6">Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
      <p className="text-gray-600">
        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck 
        Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, 
        die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur 
        Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit widerrufen. 
        Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung 
        Ihrer personenbezogenen Daten zu verlangen.
      </p>
    </div>
  );
};

export default DataUsage;