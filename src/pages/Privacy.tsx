import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import PrivacySection from '../components/privacy/PrivacySection';
import GeneralInfo from '../components/privacy/GeneralInfo';
import DataCollection from '../components/privacy/DataCollection';
import DataUsage from '../components/privacy/DataUsage';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Datenschutzerklärung - Kinderarztpraxis Dr. med. Kyra Menz-von Studnitz</title>
        <meta 
          name="description" 
          content="Datenschutzerklärung der Kinderarztpraxis Dr. med. Kyra Menz-von Studnitz - Informationen zum Umgang mit Ihren Daten gemäß DSGVO." 
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
            <h1 className="text-3xl font-bold text-gray-900 mb-12">Datenschutzerklärung</h1>
            
            <div className="bg-white rounded-lg shadow-sm p-8">
              <PrivacySection title="1. Datenschutz auf einen Blick">
                <GeneralInfo />
              </PrivacySection>

              <PrivacySection title="2. Datenerfassung auf unserer Website">
                <DataCollection />
              </PrivacySection>

              <PrivacySection title="3. Ihre Rechte">
                <DataUsage />
              </PrivacySection>

              <PrivacySection title="4. Cookies und Webanalyse">
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Diese Website verwendet nur technisch notwendige Cookies. Das sind kleine Textdateien, 
                    die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät gespeichert werden. 
                    Diese Cookies sind für den technischen Betrieb der Website erforderlich.
                  </p>
                  <p className="text-gray-600">
                    Eine persönliche Nachverfolgung findet nicht statt, und es werden keine Daten an Dritte 
                    weitergegeben.
                  </p>
                </div>
              </PrivacySection>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
};

export default Privacy;