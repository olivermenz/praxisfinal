import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { PracticeName } from './PracticeName';

const HeaderLogo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-3">
      <Logo variant="small" />
      <PracticeName variant="header" />
    </Link>
  );
};

export default HeaderLogo;