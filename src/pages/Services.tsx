import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Heading from '../components/ui/Heading';
import ServiceGrid from '../components/services/ServiceGrid';
import { services } from '../data/services';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Leistungen - Kinderarztpraxis Menz</title>
        <meta 
          name="description" 
          content="Unsere umfassenden kinderärztlichen Leistungen von Vorsorgeuntersuchungen bis zu Impfungen und Entwicklungsdiagnostik." 
        />
      </Helmet>

      <Section bgColor="gray">
        <Container>
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading level={1} className="mb-4">
              Unsere Leistungen
            </Heading>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Umfassende medizinische Versorgung für Ihre Kinder
            </p>
          </motion.div>

          <ServiceGrid services={services} />
        </Container>
      </Section>
    </>
  );
};

export default Services;