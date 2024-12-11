import React from 'react';

const ContactDetails: React.FC = () => {
  return (
    <div className="space-y-2">
      <p>Dr. med. Kyra Menz-von Studnitz<br />
         Bahnhofstr. 35<br />
         58452 Witten</p>
      <p className="mt-4">
        Telefon: 02302-59234<br />
        Fax: 02302-2790073<br />
        E-Mail: info@kinderarztpraxis-menz.de
      </p>
    </div>
  );
};

export default ContactDetails;