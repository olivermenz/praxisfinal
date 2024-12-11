import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import CookieConsent from 'react-cookie-consent';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ClosureNotice from './components/ClosureNotice';
import Home from './pages/Home';
import Team from './pages/Team';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Imprint from './pages/Imprint';
import { getStoredCookieSettings, saveCookieSettings, hasUserMadeCookieChoice, CookieSettings as ICookieSettings } from './utils/cookieManager';

function App() {
  const handleAcceptCookies = () => {
    const settings: ICookieSettings = {
      necessary: true,
    };
    saveCookieSettings(settings);
  };

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
          <Navbar />
          <ClosureNotice />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/datenschutz" element={<Privacy />} />
              <Route path="/impressum" element={<Imprint />} />
            </Routes>
          </main>
          <Footer />
          {!hasUserMadeCookieChoice() && (
            <CookieConsent
              location="bottom"
              buttonText="Technisch notwendige Cookies akzeptieren"
              enableDeclineButton={false}
              onAccept={handleAcceptCookies}
              style={{ background: '#2B373B' }}
              buttonStyle={{ 
                background: '#3568a4',
                color: 'white',
                fontSize: '13px',
                borderRadius: '6px',
                padding: '8px 16px'
              }}
              expires={150}
            >
              Diese Website verwendet ausschließlich technisch notwendige Cookies, um die Grundfunktionen der Website zu gewährleisten.{' '}
              <span style={{ fontSize: '12px' }}>
                Weitere Informationen finden Sie in unserer{' '}
                <a href="/datenschutz" className="underline">
                  Datenschutzerklärung
                </a>
              </span>
            </CookieConsent>
          )}
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;