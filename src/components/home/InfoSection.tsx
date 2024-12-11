import React from 'react';
import { Clock, MapPin, Phone, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import Section from '../layout/Section';
import InfoCard from '../InfoCard';

export const InfoSection: React.FC = () => {
  return (
    <Section bgColor="white">
      <Container>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <InfoCard
            icon={<Clock className="w-8 h-8 text-[#3568a4]" />}
            title="Öffnungszeiten"
            content={
              <>
                Mo. Di. Do.: 08:00 - 11:00 & 15:00 - 17:00<br />
                Mi. & Fr.: 08:00 - 11:00
              </>
            }
          />
          <InfoCard
            icon={<MapPin className="w-8 h-8 text-[#3568a4]" />}
            title="Adresse"
            content="Bahnhofstr. 35, 58452 Witten"
          />
          <InfoCard
            icon={<Phone className="w-8 h-8 text-[#3568a4]" />}
            title="Kontakt"
            content={
              <>
                Tel: 02302 59234<br />
                Email: <a href="mailto:info@kinderarztpraxis-menz.de" className="text-[#3568a4] hover:text-[#2d5a8d]">info(a)kinderarztpraxis-menz.de</a>
              </>
            }
          />
          <InfoCard
            icon={<Calendar className="w-8 h-8 text-[#3568a4]" />}
            title="Termine"
            content="Telefonisch nach Vereinbarung"
          />
        </motion.div>
      </Container>
    </Section>
  );
};