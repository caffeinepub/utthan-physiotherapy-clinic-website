export interface Review {
  id: string;
  author: string;
  rating: number;
  date?: string;
  text: string;
}

// Google aggregate rating (public data)
export const GOOGLE_RATING = 4.9;
export const GOOGLE_REVIEW_COUNT = 147;

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Hanuwanth Singh',
    rating: 5,
    text: 'Dr. Roshni is an exceptional physiotherapist! Her expertise, warmth, and attention to detail made my treatment of Cervical a breeze. With a personalized approach and clear guidance, I felt supported every step of the way. Highly recommend for anyone seeking effective, compassionate care. Thank you, Dr. Roshni, for helping me get back on track! 🌟',
  },
  {
    id: '2',
    author: 'Bapodariya Manoj',
    rating: 5,
    text: 'Very successful treatment leading to pain reduction and improved mobility, knowledgeable and caring providing personalised plans, excellent facilities with advanced equipment, and a positive, clean, and supportive environment. Many positive reviews mention immediate or quick results, effective home exercise plans, and physiotherapists who are passionate about patient progress. Very very satisfied with Utthan physiotherapists clinic…..Kamrej....Handle....By…..Dr..Roshani Mansuriya……',
  },
  {
    id: '3',
    author: 'SAUMIT FINCON SERVICES LLP',
    rating: 5,
    text: 'My son Mihar was diagnosed with GBS. With the help of utthan physiotherapy, he has recovered almost 100 %. The physiotherapy sessions were very effective, and the therapist was patient, caring, and dedicated. We are truly thankful for the amazing support and guidance.',
  },
  {
    id: '4',
    author: 'Bhargav Gauswami',
    rating: 5,
    text: 'My mother had pain in her lower back and hand. We visited Roshani Ma\'am\'s Physiotherapy Center in Kamrej, where we received clear guidance and excellent treatment. After 15 days of exercises, she got 100% relief. Thank you for the professional and supportive care!',
  },
  {
    id: '5',
    author: 'Hiren Patel',
    rating: 5,
    text: 'Excellent treatment, great environment, patients centered approach, experienced doctor she has a good treatment plan and good behavior',
  },
  {
    id: '6',
    author: 'Jitendrasinh Parmar',
    rating: 5,
    text: 'Very good physiotherapy clinic, helped me with my frozen shoulder treatment with quick recovery. Highly recommend!',
  },
];

// Legacy helper functions (kept for backward compatibility)
export function getAverageRating(): number {
  if (REVIEWS.length === 0) return 0;
  const sum = REVIEWS.reduce((acc, review) => acc + review.rating, 0);
  return sum / REVIEWS.length;
}

export function getTotalReviews(): number {
  return REVIEWS.length;
}
