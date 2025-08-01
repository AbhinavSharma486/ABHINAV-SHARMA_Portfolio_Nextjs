"use client";

import React from 'react';

interface PersonStructuredDataProps {
  name: string;
  jobTitle: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  github: string;
  linkedin: string;
  skills: string[];
}

const PersonStructuredData: React.FC<PersonStructuredDataProps> = ({
  name,
  jobTitle,
  description,
  email,
  phone,
  location,
  website,
  github,
  linkedin,
  skills
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    "description": description,
    "email": email,
    "telephone": phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location
    },
    "url": website,
    "sameAs": [
      github,
      linkedin
    ],
    "knowsAbout": skills,
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance Developer"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

interface WebsiteStructuredDataProps {
  name: string;
  description: string;
  url: string;
  author: string;
}

const WebsiteStructuredData: React.FC<WebsiteStructuredDataProps> = ({
  name,
  description,
  url,
  author
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": name,
    "description": description,
    "url": url,
    "author": {
      "@type": "Person",
      "name": author
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export { PersonStructuredData, WebsiteStructuredData }; 