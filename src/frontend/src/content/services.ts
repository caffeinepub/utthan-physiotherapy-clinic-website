export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  whoItsFor: string[];
  imagePath: string;
  imageAlt: string;
}

export const SERVICES: Service[] = [
  {
    id: 'back-pain-therapy',
    title: 'Back Pain Therapy',
    shortDescription: 'Comprehensive treatment for acute and chronic back pain using evidence-based techniques.',
    fullDescription: 'Our back pain therapy program combines manual therapy, therapeutic exercises, and postural correction to address the root cause of your pain. We treat conditions including lower back pain, upper back pain, disc problems, and muscle strains.',
    benefits: [
      'Reduced pain and inflammation',
      'Improved mobility and flexibility',
      'Strengthened core muscles',
      'Better posture and body mechanics',
      'Prevention of future episodes',
    ],
    whoItsFor: [
      'Individuals with chronic back pain',
      'Those recovering from back injuries',
      'People with poor posture',
      'Office workers with sedentary lifestyles',
    ],
    imagePath: '/assets/services/back-pain.dim_1200x800.jpg',
    imageAlt: 'Physiotherapist treating patient with back pain using manual therapy techniques',
  },
  {
    id: 'sports-injury-rehabilitation',
    title: 'Sports Injury Rehabilitation',
    shortDescription: 'Specialized recovery programs for athletes to return to peak performance safely.',
    fullDescription: 'Our sports injury rehabilitation program is designed to help athletes recover from injuries and return to their sport stronger than before. We use sport-specific exercises, functional training, and progressive loading protocols.',
    benefits: [
      'Faster recovery times',
      'Reduced risk of re-injury',
      'Improved athletic performance',
      'Sport-specific conditioning',
      'Comprehensive injury prevention strategies',
    ],
    whoItsFor: [
      'Professional and amateur athletes',
      'Weekend warriors',
      'Individuals with sports-related injuries',
      'Those preparing to return to sport',
    ],
    imagePath: '/assets/services/sports-injury.dim_1200x800.jpg',
    imageAlt: 'Athlete performing rehabilitation exercises with physiotherapist guidance',
  },
  {
    id: 'post-surgical-physiotherapy',
    title: 'Post-Surgical Physiotherapy',
    shortDescription: 'Expert rehabilitation following orthopedic and other surgical procedures.',
    fullDescription: 'Post-surgical physiotherapy is crucial for optimal recovery. Our therapists work closely with your surgeon to create a personalized rehabilitation plan that promotes healing, restores function, and gets you back to your daily activities.',
    benefits: [
      'Accelerated healing process',
      'Reduced scar tissue formation',
      'Restored range of motion',
      'Improved strength and function',
      'Minimized post-operative complications',
    ],
    whoItsFor: [
      'Post-joint replacement patients',
      'Those recovering from orthopedic surgery',
      'Individuals after ligament reconstruction',
      'Post-fracture surgery patients',
    ],
    imagePath: '/assets/services/post-surgical.dim_1200x800.jpg',
    imageAlt: 'Post-surgical patient receiving physiotherapy treatment for recovery',
  },
  {
    id: 'posture-correction',
    title: 'Posture Correction',
    shortDescription: 'Improve your posture and prevent pain with targeted exercises and ergonomic advice.',
    fullDescription: 'Poor posture can lead to chronic pain and reduced quality of life. Our posture correction program includes comprehensive assessment, targeted exercises, ergonomic modifications, and ongoing support to help you maintain proper alignment.',
    benefits: [
      'Relief from neck and shoulder pain',
      'Improved breathing and circulation',
      'Enhanced appearance and confidence',
      'Reduced risk of future injuries',
      'Better overall body mechanics',
    ],
    whoItsFor: [
      'Office workers and desk professionals',
      'Individuals with forward head posture',
      'Those with rounded shoulders',
      'People experiencing postural pain',
    ],
    imagePath: '/assets/services/posture-correction.dim_1200x800.jpg',
    imageAlt: 'Physiotherapist assessing and correcting patient posture alignment',
  },
  {
    id: 'manual-therapy',
    title: 'Manual Therapy',
    shortDescription: 'Hands-on techniques to relieve pain, improve mobility, and restore function.',
    fullDescription: 'Manual therapy involves skilled hands-on techniques including joint mobilization, soft tissue massage, and myofascial release. These techniques are used to reduce pain, increase range of motion, and facilitate movement.',
    benefits: [
      'Immediate pain relief',
      'Improved joint mobility',
      'Reduced muscle tension',
      'Enhanced tissue healing',
      'Better movement quality',
    ],
    whoItsFor: [
      'Individuals with joint stiffness',
      'Those with muscle tension and pain',
      'People recovering from injuries',
      'Anyone seeking natural pain relief',
    ],
    imagePath: '/assets/services/manual-therapy.dim_1200x800.jpg',
    imageAlt: 'Physiotherapist performing manual therapy techniques on patient',
  },
  {
    id: 'neurological-rehabilitation',
    title: 'Neurological Rehabilitation',
    shortDescription: 'Specialized therapy for stroke, spinal cord injuries, and neurological conditions.',
    fullDescription: 'Neurological rehabilitation helps individuals recover function after stroke, spinal cord injury, or other neurological conditions. Our therapists use evidence-based techniques to improve mobility, balance, coordination, and independence.',
    benefits: [
      'Improved motor function and coordination',
      'Enhanced balance and stability',
      'Increased independence in daily activities',
      'Better quality of life',
      'Reduced risk of falls',
    ],
    whoItsFor: [
      'Stroke survivors',
      'Individuals with spinal cord injuries',
      'Those with Parkinson\'s disease',
      'People with multiple sclerosis',
    ],
    imagePath: '/assets/services/neuro-rehab.dim_1200x800.jpg',
    imageAlt: 'Neurological rehabilitation therapy session with physiotherapist',
  },
  {
    id: 'dry-needling',
    title: 'Dry Needling',
    shortDescription: 'Effective treatment for muscle pain and trigger points using thin needles.',
    fullDescription: 'Dry needling is a technique that uses thin needles to treat myofascial trigger points and muscle tension. It can provide rapid pain relief and improve muscle function, making it an excellent complement to other physiotherapy treatments.',
    benefits: [
      'Quick pain relief',
      'Reduced muscle tension and spasms',
      'Improved range of motion',
      'Enhanced muscle activation',
      'Accelerated recovery',
    ],
    whoItsFor: [
      'Individuals with chronic muscle pain',
      'Those with trigger points',
      'Athletes with muscle tightness',
      'People with myofascial pain syndrome',
    ],
    imagePath: '/assets/services/dry-needling.dim_1200x800.jpg',
    imageAlt: 'Dry needling treatment being performed by physiotherapist',
  },
];

export function getServiceById(id: string): Service | undefined {
  return SERVICES.find((service) => service.id === id);
}
