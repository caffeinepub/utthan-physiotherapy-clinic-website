export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    id: '1',
    question: 'How long is a typical physiotherapy session?',
    answer: 'A typical physiotherapy session lasts between 45 to 60 minutes. The duration may vary depending on your specific condition and treatment plan. Your first session may be longer as it includes a comprehensive assessment.',
  },
  {
    id: '2',
    question: 'What should I bring to my first appointment?',
    answer: 'Please bring any relevant medical records, imaging reports (X-rays, MRI scans), a list of current medications, and wear comfortable clothing that allows easy access to the area being treated. If you have insurance, bring your insurance card.',
  },
  {
    id: '3',
    question: 'Do you accept insurance?',
    answer: 'We work with most major insurance providers. Please contact us with your insurance details, and we\'ll verify your coverage before your appointment. We also offer competitive self-pay rates for those without insurance.',
  },
  {
    id: '4',
    question: 'How many sessions will I need?',
    answer: 'The number of sessions varies depending on your condition, severity, and individual response to treatment. Most patients see significant improvement within 6-12 sessions. Your therapist will discuss a personalized treatment plan during your initial assessment.',
  },
  {
    id: '5',
    question: 'Is physiotherapy painful?',
    answer: 'While some discomfort may occur during treatment, especially when working on tight or injured areas, physiotherapy should not be excessively painful. Our therapists work within your comfort level and adjust techniques as needed. Many patients experience immediate relief after treatment.',
  },
  {
    id: '6',
    question: 'Can I continue my regular activities during treatment?',
    answer: 'This depends on your condition. Your physiotherapist will provide specific guidelines about which activities to continue, modify, or avoid during your recovery. The goal is to keep you as active as safely possible while promoting healing.',
  },
  {
    id: '7',
    question: 'Do I need a doctor\'s referral?',
    answer: 'While a doctor\'s referral is not always required, it may be necessary for insurance coverage. We recommend checking with your insurance provider. You can also book a consultation directly with us for an initial assessment.',
  },
  {
    id: '8',
    question: 'What is the difference between physiotherapy and massage?',
    answer: 'Physiotherapy is a comprehensive healthcare profession that addresses the root cause of your condition through assessment, diagnosis, and treatment. While massage may be one technique used, physiotherapy also includes exercises, manual therapy, education, and functional training to restore optimal movement and prevent future problems.',
  },
];
