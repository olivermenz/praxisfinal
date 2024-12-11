import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string;
  ogImage?: string;
}

export const MetaTags: React.FC<MetaTagsProps> = ({
  title,
  description,
  canonicalUrl = 'https://kinderarztpraxis-menz.de',
  keywords = 'Kinderarzt, Witten, Kinderarztpraxis, Dr. Menz-von Studnitz, Kindermedizin',
  ogImage = '/logo_large.png'
}) => {
  const fullTitle = `${title} | Kinderarztpraxis Dr. Menz-von Studnitz`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="de" />
      <meta name="geo.region" content="DE-NW" />
      <meta name="geo.placename" content="Witten" />
    </Helmet>
  );
};