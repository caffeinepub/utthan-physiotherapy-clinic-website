export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
}

// Google aggregate rating (public data)
export const GOOGLE_RATING = 4.9;
export const GOOGLE_REVIEW_COUNT = 147;

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Rajesh Kumar',
    rating: 5,
    date: '2024-01-15',
    text: 'Excellent service! Dr. Priya helped me recover from a severe back injury. Her expertise and caring approach made all the difference. Highly recommend Utthan Physiotherapy!',
  },
  {
    id: '2',
    author: 'Sneha Desai',
    rating: 5,
    date: '2024-01-10',
    text: 'I had been suffering from frozen shoulder for months. The treatment at Utthan was outstanding. Within a few weeks, I regained full mobility. Thank you so much!',
  },
  {
    id: '3',
    author: 'Amit Sharma',
    rating: 5,
    date: '2024-01-05',
    text: 'As an athlete, I needed specialized care for my sports injury. Dr. Rahul\'s sports rehabilitation program got me back on the field faster than I expected. Professional and effective!',
  },
  {
    id: '4',
    author: 'Priya Joshi',
    rating: 5,
    date: '2023-12-28',
    text: 'Dr. Anjali was wonderful during my postpartum recovery. She understood my concerns and created a personalized program that helped me regain my strength. Grateful for her care!',
  },
  {
    id: '5',
    author: 'Vikram Patel',
    rating: 5,
    date: '2023-12-20',
    text: 'Best physiotherapy clinic in Kamrej, Surat! The staff is professional, the facility is clean, and the treatment is effective. I\'ve seen significant improvement in my chronic back pain.',
  },
  {
    id: '6',
    author: 'Meera Shah',
    rating: 5,
    date: '2023-12-15',
    text: 'After my knee surgery, I was worried about recovery. The team at Utthan provided excellent post-surgical physiotherapy. I\'m now walking without pain. Thank you!',
  },
];

// Legacy helper functions (kept for backward compatibility with placeholder reviews)
export function getAverageRating(): number {
  if (REVIEWS.length === 0) return 0;
  const sum = REVIEWS.reduce((acc, review) => acc + review.rating, 0);
  return sum / REVIEWS.length;
}

export function getTotalReviews(): number {
  return REVIEWS.length;
}
