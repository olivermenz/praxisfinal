import React from 'react';

export const ReviewLinks: React.FC = () => {
  return (
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">Bewertungen</h3>
      <p className="text-gray-300 mb-4">Wir freuen uns über Ihre Bewertung bei:</p>
      <div className="space-y-4">
        <a 
          href="https://g.co/kgs/tvwmqYm"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:opacity-90 transition-opacity bg-white/10 rounded-lg p-3"
        >
          <img 
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png"
            alt="Google"
            className="h-6 object-contain"
          />
        </a>
        <a 
          href="https://www.jameda.de/kyra-menz-von-studnitz/kinder-und-jugendarzt/witten"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:opacity-90 transition-opacity bg-white/10 rounded-lg p-3"
        >
          <img 
            src="https://www.jameda.de/public/images/jameda-logo-white.svg"
            alt="Jameda"
            className="h-6 object-contain"
          />
        </a>
      </div>
    </div>
  );
};

export default ReviewLinks;