import { CLINIC_INFO } from './clinicInfo';
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from '@/content/reviews';
import { FAQS } from '@/content/faq';
import type { Service } from '@/content/services';

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physiotherapy',
    name: CLINIC_INFO.name,
    image: `${window.location.origin}/assets/generated/clinic-photo-1.dim_1200x800.jpg`,
    '@id': window.location.origin,
    url: window.location.origin,
    telephone: CLINIC_INFO.phoneFormatted,
    email: CLINIC_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${CLINIC_INFO.address.street}, ${CLINIC_INFO.address.area}`,
      addressLocality: CLINIC_INFO.address.city,
      addressRegion: CLINIC_INFO.address.state,
      postalCode: CLINIC_INFO.address.pincode,
      addressCountry: CLINIC_INFO.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.2677,
      longitude: 72.9564,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: GOOGLE_RATING.toFixed(1),
      reviewCount: GOOGLE_REVIEW_COUNT,
    },
  };
}

export function getServiceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalTherapy',
    name: service.title,
    description: service.fullDescription,
    provider: {
      '@type': 'Physiotherapy',
      name: CLINIC_INFO.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${CLINIC_INFO.address.street}, ${CLINIC_INFO.address.area}`,
        addressLocality: CLINIC_INFO.address.city,
        addressRegion: CLINIC_INFO.address.state,
        postalCode: CLINIC_INFO.address.pincode,
        addressCountry: CLINIC_INFO.address.country,
      },
    },
  };
}

export function getFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getReviewSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [],
  };
}
