import { personalInfo } from '@/config/personal';

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalInfo.name,
    "jobTitle": personalInfo.title,
    "description": "Full-stack web developer specializing in WordPress, React, e-commerce, and SaaS platforms",
    "url": "https://mary-clement.vercel.app",
    "image": "https://mary-clement.vercel.app/images/profile-pic.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressRegion": "Lagos State",
      "addressCountry": "NG"
    },
    "sameAs": [
      personalInfo.linkedin,
      personalInfo.github,
      personalInfo.twitter,
    ].filter(Boolean),
    "knowsAbout": [
      "Web Development",
      "WordPress Development",
      "React Development",
      "E-commerce Development",
      "UI/UX Design",
      "Full-Stack Development"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `${personalInfo.name} Web Development Services`,
    "description": "Custom web development services including WordPress sites, React applications, e-commerce platforms, and SaaS solutions",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressRegion": "Lagos State",
      "addressCountry": "NG"
    },
    "provider": {
      "@type": "Person",
      "name": personalInfo.name
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Nigeria"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      },
      {
        "@type": "Country",
        "name": "United States"
      }
    ],
    "serviceType": [
      "Web Development",
      "WordPress Development",
      "E-commerce Development",
      "SaaS Development",
      "UI/UX Design",
      "Custom Web Applications"
    ],
    "priceRange": "$$"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}

