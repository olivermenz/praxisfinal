import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Printer } from 'lucide-react';
import { createPhoneLink } from '../utils/phoneUtils';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import GoogleMap from '../components/maps/GoogleMap';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
  const phoneNumber = '02302 59234';
  const faxNumber = '02302 279 00 73';
  const email = 'info@kinderarztpraxis-menz.de';
  const address = 'Bahnhofstr. 35, 58452 Witten';

  return (
    <>
      <Helmet>
        <title>Kontakt - Kinderarztpraxis Menz</title>
        <meta name="description" content="Kontaktieren Sie uns. Wir sind für Sie da!" />
      </Helmet>

      <Section bgColor="gray">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Kontakt</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <ContactInfo
                  Icon={MapPin}
                  title="Adresse"
                  content={address}
                />
                <ContactInfo
                  Icon={Phone}
                  title="Telefon"
                  content={
                    <a href={createPhoneLink(phoneNumber)} className="text-[#3568a4] hover:text-[#2d5a8d]">
                      {phoneNumber}
                    </a>
                  }
                />
                <ContactInfo
                  Icon={Printer}
                  title="Fax"
                  content={faxNumber}
                />
                <ContactInfo
                  Icon={Mail}
                  title="E-Mail"
                  content={
                    <a href={`mailto:${email}`} className="text-[#3568a4] hover:text-[#2d5a8d]">
                      {email.replace('@', '(a)')}
                    </a>
                  }
                />
                <ContactInfo
                  Icon={Clock}
                  title="Öffnungszeiten"
                  content={
                    <div className="space-y-1">
                      <p>Mo. Di. Do.: 08:00 - 11:00 & 15:00 - 17:00</p>
                      <p>Mi. & Fr.: 08:00 - 11:00</p>
                      <p>und nach Vereinbarung</p>
                    </div>
                  }
                />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <GoogleMap
                  address={address}
                  className="w-full h-[400px] rounded-lg"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Contact;