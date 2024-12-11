import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import TeamGrid from '../components/team/TeamGrid';
import { teamMembers } from '../data/team';

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Unser Team - Kinderarztpraxis Dr. med. Kyra Menz-von Studnitz</title>
        <meta 
          name="description" 
          content="Lernen Sie unser erfahrenes Team kennen. Dr. med. Kyra Menz-von Studnitz und ihr Team stehen für kompetente Kindermedizin in Witten." 
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unser Team
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kompetente und fürsorgliche Betreuung für Ihre Kinder
            </p>
          </motion.div>

          <TeamGrid members={teamMembers} />
        </Container>
      </Section>
    </>
  );
};

export default Team;