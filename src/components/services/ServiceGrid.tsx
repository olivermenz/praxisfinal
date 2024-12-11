import React from 'react';
import Grid from '../ui/Grid';
import ServiceCard from './ServiceCard';
import { ServiceType } from '../../types/services';

interface ServiceGridProps {
  services: ServiceType[];
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ services }) => {
  return (
    <Grid cols={3} gap={8}>
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </Grid>
  );
};

export default ServiceGrid;