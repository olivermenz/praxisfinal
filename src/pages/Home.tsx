import React, { useState } from 'react';
import { MetaTags } from '../components/seo/MetaTags';
import EmergencyPanel from '../components/emergency/EmergencyPanel';
import useOpeningHours from '../hooks/useOpeningHours';
import { Hero } from '../components/home/Hero';
import { InfoSection } from '../components/home/InfoSection';
import { PRACTICE_INFO } from '../utils/constants';

const Home = () => {
  const [isEmergencyPanelOpen, setIsEmergencyPanelOpen] = useState(false);
  const isWithinOpeningHours = useOpeningHours();

  return (
    <>
      <MetaTags
        title="Kinderarztpraxis in Witten"
        description={`Willkommen in der Kinderarztpraxis ${PRACTICE_INFO.name}. Wir bieten liebevolle und kompetente medizinische Versorgung für Ihre Kinder in Witten.`}
        keywords="Kinderarzt Witten, Kinderarztpraxis, Dr. Menz-von Studnitz, Kindermedizin, Kinderarzt Ruhrgebiet"
      />

      <Hero 
        isWithinOpeningHours={isWithinOpeningHours}
        onEmergencyClick={() => setIsEmergencyPanelOpen(true)}
      />

      <InfoSection />

      <EmergencyPanel
        isOpen={isEmergencyPanelOpen}
        onClose={() => setIsEmergencyPanelOpen(false)}
        isWithinOpeningHours={isWithinOpeningHours}
      />
    </>
  );
};

export default Home;