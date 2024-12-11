import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { createPhoneLink } from '../utils/phoneUtils';
import ReviewLinks from './footer/ReviewLinks';

const Footer = () => {
  const phoneNumber = '02302 59234';
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href={createPhoneLink(phoneNumber)} className="hover:text-white">
                  {phoneNumber}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info(a)kinderarztpraxis-menz.de</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Bahnhofstr. 35, 58452 Witten</span>
              </li>
            </ul>
          </div>

          {/* Reviews */}
          <div>
            <ReviewLinks />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white">Unser Team</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white">Leistungen</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">Kontakt</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/impressum" className="hover:text-white">Impressum</Link>
              </li>
              <li>
                <Link to="/datenschutz" className="hover:text-white">Datenschutz</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Kinderarztpraxis Dr. med. Kyra Menz-von Studnitz. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;