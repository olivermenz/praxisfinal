import React from 'react';

interface GoogleMapProps {
  address: string;
  className?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ address, className = '' }) => {
  const API_KEY = 'AIzaSyCWTQ4W6MPgK2yfyHefMF-hM68J81zh2pQ';
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${encodedAddress}&zoom=15`;

  return (
    <div className={`relative ${className}`}>
      <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-lg shadow-lg z-10">
        <p className="text-sm font-semibold text-gray-900">
          Kinderarztpraxis<br />
          Dr. med. Kyra Menz-von Studnitz
        </p>
      </div>
      <iframe
        title="Praxisstandort"
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
      />
    </div>
  );
};

export default GoogleMap;