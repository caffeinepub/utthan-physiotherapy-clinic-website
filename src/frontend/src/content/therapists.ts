export interface Therapist {
  id: string;
  name: string;
  title: string;
  qualifications: string[];
  specializations: string[];
  experience: string;
  imagePath: string;
  bio: string;
}

export const THERAPISTS: Therapist[] = [
  {
    id: 'dr-priya-shah',
    name: 'Dr. Priya Shah',
    title: 'Lead Physiotherapist & Founder',
    qualifications: ['BPT (Bachelor of Physiotherapy)', 'MPT in Orthopedics', 'Certified Manual Therapist'],
    specializations: ['Orthopedic Rehabilitation', 'Sports Injuries', 'Manual Therapy', 'Posture Correction'],
    experience: '12+ years',
    imagePath: '/assets/team/therapist-1.jpg',
    bio: 'Dr. Priya Shah is a highly experienced physiotherapist with a passion for helping patients achieve optimal recovery. She specializes in orthopedic conditions and has extensive experience treating sports injuries.',
  },
  {
    id: 'dr-rahul-patel',
    name: 'Dr. Rahul Patel',
    title: 'Senior Physiotherapist',
    qualifications: ['BPT (Bachelor of Physiotherapy)', 'MPT in Neurology', 'Certified in Dry Needling'],
    specializations: ['Neurological Rehabilitation', 'Stroke Recovery', 'Balance Training', 'Dry Needling'],
    experience: '10+ years',
    imagePath: '/assets/team/therapist-2.jpg',
    bio: 'Dr. Rahul Patel specializes in neurological rehabilitation and has helped numerous patients recover from stroke and other neurological conditions. His patient-centered approach ensures personalized care for every individual.',
  },
  {
    id: 'dr-anjali-mehta',
    name: 'Dr. Anjali Mehta',
    title: 'Physiotherapist',
    qualifications: ['BPT (Bachelor of Physiotherapy)', 'Certified in Women\'s Health Physiotherapy'],
    specializations: ['Women\'s Health', 'Postpartum Recovery', 'Pelvic Floor Rehabilitation', 'Prenatal Care'],
    experience: '8+ years',
    imagePath: '/assets/team/therapist-3.jpg',
    bio: 'Dr. Anjali Mehta is dedicated to women\'s health physiotherapy, providing compassionate care for women during pregnancy, postpartum, and beyond. She helps women regain strength and confidence after childbirth.',
  },
];
