export const CLINIC_INFO = {
  name: 'Utthan Physiotherapy Clinic',
  tagline: 'Rehabilitation • Pain Relief • Better Movement',
  phone: '82000 84101',
  phoneFormatted: '+91 82000 84101',
  email: 'utthan.health@gmail.com',
  address: {
    street: '209, Kashi Plaza',
    area: 'Kamrej Char-rasta',
    city: 'Surat',
    state: 'Gujarat',
    pincode: '394180',
    country: 'India',
  },
  hours: {
    weekdays: 'Monday - Saturday: 9:00 AM - 7:00 PM',
    sunday: 'Sunday: 9:00 AM - 1:00 PM',
  },
  calendlyUrl: 'https://calendly.com/utthan-health/30min',
  googleMapsUrl: 'https://maps.google.com/?q=Utthan+Physiotherapy+Clinic+Kamrej+Surat',
  googleReviewsUrl: 'https://share.google/NWt2P0T87joSoAzaH',
  social: {
    instagram: 'https://instagram.com/utthan.physio',
  },
};

export function getFullAddress(): string {
  const { street, area, city, pincode } = CLINIC_INFO.address;
  return `${street}, ${area}, ${city} - ${pincode}`;
}

export function getPhoneLink(): string {
  return `tel:${CLINIC_INFO.phoneFormatted}`;
}
