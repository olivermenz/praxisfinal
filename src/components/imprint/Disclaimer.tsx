import React from 'react';

const Disclaimer: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">Haftung für Inhalte</h3>
        <p className="text-gray-600">
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
          Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
          nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
          Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
          Tätigkeit hinweisen.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">Haftung für Links</h3>
        <p className="text-gray-600">
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen 
          Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
          Seiten verantwortlich.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">Urheberrecht</h3>
        <p className="text-gray-600">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
          dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
          der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
          Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;