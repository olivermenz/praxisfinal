import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import ImprintSection from '../components/imprint/ImprintSection';
import ContactDetails from '../components/imprint/ContactDetails';
import ProfessionalInfo from '../components/imprint/ProfessionalInfo';
import Disclaimer from '../components/imprint/Disclaimer';

const Imprint = () => {
  return (
    <>
      <Helmet>
        <title>Impressum - Kinder- und Jugendarztpraxis Dr. med. Kyra Menz-von Studnitz</title>
        <meta 
          name="description" 
          content="Impressum der Kinder- und Jugendarztpraxis Dr. med. Kyra Menz-von Studnitz – Rechtliche Informationen und Kontaktdaten." 
        />
      </Helmet>

      <Section bgColor="gray">
        <Container>
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-12">Impressum</h1>
            
            <div className="bg-white rounded-lg shadow-sm p-8">
              <ImprintSection title="Angaben gemäß § 5 TMG">
                <ContactDetails />
              </ImprintSection>

              <ImprintSection title="Vertreten durch">
                <p>Dr. med. Kyra Menz-von Studnitz</p>
              </ImprintSection>

              <ImprintSection title="Aufsichtsbehörde">
                <p>Kassenärztliche Vereinigung Westfalen-Lippe</p>
              </ImprintSection>

              <ImprintSection title="Berufsbezeichnung und berufsrechtliche Regelungen">
                <ProfessionalInfo />
              </ImprintSection>

              <ImprintSection title="Haftungsausschluss">
                <Disclaimer />
              </ImprintSection>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
};

export default Imprint;