export interface Condition {
  id: string;
  name: string;
  description: string;
  symptoms: string[];
  treatments: string[];
}

export const CONDITIONS: Condition[] = [
  {
    id: 'neck-back-pain',
    name: 'Neck & Back Pain',
    description: 'Chronic or acute pain in the neck and back regions, often caused by poor posture, muscle strain, or disc problems.',
    symptoms: [
      'Persistent pain in neck or back',
      'Stiffness and reduced mobility',
      'Pain radiating to arms or legs',
      'Muscle spasms',
      'Headaches (for neck pain)',
    ],
    treatments: ['Manual Therapy', 'Therapeutic Exercises', 'Posture Correction', 'Pain Management'],
  },
  {
    id: 'frozen-shoulder',
    name: 'Frozen Shoulder',
    description: 'A condition characterized by stiffness and pain in the shoulder joint, progressively limiting range of motion.',
    symptoms: [
      'Gradual onset of shoulder pain',
      'Severe limitation in shoulder movement',
      'Pain worsening at night',
      'Difficulty with daily activities',
    ],
    treatments: ['Joint Mobilization', 'Stretching Exercises', 'Manual Therapy', 'Progressive Strengthening'],
  },
  {
    id: 'knee-pain',
    name: 'Knee Pain',
    description: 'Pain in or around the knee joint, which can result from injuries, arthritis, or overuse.',
    symptoms: [
      'Pain with movement or weight-bearing',
      'Swelling and inflammation',
      'Reduced range of motion',
      'Instability or weakness',
      'Clicking or popping sounds',
    ],
    treatments: ['Strengthening Exercises', 'Manual Therapy', 'Gait Training', 'Pain Management'],
  },
  {
    id: 'sciatica',
    name: 'Sciatica',
    description: 'Pain that radiates along the sciatic nerve, typically affecting one side of the body from the lower back through the leg.',
    symptoms: [
      'Sharp pain radiating down the leg',
      'Numbness or tingling in the leg',
      'Weakness in the affected leg',
      'Pain worsening with sitting',
      'Difficulty standing or walking',
    ],
    treatments: ['Nerve Mobilization', 'Core Strengthening', 'Manual Therapy', 'Postural Training'],
  },
  {
    id: 'postpartum-recovery',
    name: 'Postpartum Recovery',
    description: 'Specialized rehabilitation for women recovering from childbirth, addressing pelvic floor dysfunction and core weakness.',
    symptoms: [
      'Pelvic floor weakness',
      'Abdominal separation (diastasis recti)',
      'Lower back pain',
      'Pelvic pain',
      'Urinary incontinence',
    ],
    treatments: ['Pelvic Floor Exercises', 'Core Rehabilitation', 'Postural Training', 'Manual Therapy'],
  },
  {
    id: 'sports-injuries',
    name: 'Sports Injuries',
    description: 'Injuries sustained during sports activities, including sprains, strains, and overuse injuries.',
    symptoms: [
      'Acute pain following injury',
      'Swelling and bruising',
      'Limited range of motion',
      'Weakness in affected area',
      'Instability',
    ],
    treatments: ['Sports Rehabilitation', 'Strengthening Programs', 'Return-to-Sport Training', 'Injury Prevention'],
  },
];
