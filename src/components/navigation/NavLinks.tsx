import React from 'react';
import { Link } from 'react-router-dom';
import { navigationItems } from './NavigationItems';
import HeaderContactButton from '../HeaderContactButton';

interface NavLinksProps {
  onEmergencyClick: () => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({ onEmergencyClick }) => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {navigationItems.map(({ path, label }) => (
        <Link 
          key={path}
          to={path} 
          className="nav-link"
        >
          {label}
        </Link>
      ))}
      <HeaderContactButton onEmergencyClick={onEmergencyClick} />
    </div>
  );
};