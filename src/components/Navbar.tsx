import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import EmergencyPanel from './emergency/EmergencyPanel';
import useOpeningHours from '../hooks/useOpeningHours';
import HeaderContactButton from './HeaderContactButton';
import { NavLinks } from './navigation/NavLinks';
import { MobileMenu } from './navigation/MobileMenu';
import HeaderLogo from './layout/HeaderLogo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEmergencyPanelOpen, setIsEmergencyPanelOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const isWithinOpeningHours = useOpeningHours();

  useEffect(() => {
    const checkWidth = () => {
      const shouldCollapse = window.innerWidth < 1024; // Collapse earlier for more space
      if (shouldCollapse !== isMobileView) {
        setIsMobileView(shouldCollapse);
        if (!shouldCollapse) {
          setIsOpen(false);
        }
      }
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, [isMobileView]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center flex-shrink-0">
              <HeaderLogo />
            </div>

            {!isMobileView && (
              <NavLinks onEmergencyClick={() => setIsEmergencyPanelOpen(true)} />
            )}

            {isMobileView && (
              <div className="flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3568a4]"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? (
                    <X className="block h-6 w-6" />
                  ) : (
                    <Menu className="block h-6 w-6" />
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        <MobileMenu 
          isOpen={isOpen} 
          onEmergencyClick={() => {
            setIsEmergencyPanelOpen(true);
            setIsOpen(false);
          }}
        />
      </nav>

      <div className="h-20"></div>

      <EmergencyPanel
        isOpen={isEmergencyPanelOpen}
        onClose={() => setIsEmergencyPanelOpen(false)}
        isWithinOpeningHours={isWithinOpeningHours}
      />
    </>
  );
};

export default Navbar;