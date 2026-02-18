export interface PrideMomentsEvent {
  id: string;
  details: string;
  date: string;
  images: {
    src: string;
    alt: string;
  }[];
}

export const PRIDE_MOMENTS = {
  title: "Pride Moments",
  subtitle: "Celebrating milestones and achievements in our journey of healing and care",
  description: "Every patient's recovery is a moment of pride for us. Here are some special moments that showcase our commitment to excellence in physiotherapy care.",
  events: [
    {
      id: "maa-bap-nu-ghar-2024",
      details: "Conducted awareness and Physiotherapy session at old age home \"Maa Bap nu ghar\" Kamrej - 05-08-2024",
      date: "2024-08-05",
      images: [
        {
          src: "/assets/im1-3.jpg",
          alt: "Group photo of Utthan Physiotherapy team with elderly residents at Maa Bap nu ghar old age home, everyone waving hands in celebration"
        },
        {
          src: "/assets/im2-3.jpg",
          alt: "Elderly residents seated and listening during awareness session at Maa Bap nu ghar old age home"
        },
        {
          src: "/assets/im1-4.jpg",
          alt: "Physiotherapist providing hands-on therapy session to elderly patients at Maa Bap nu ghar"
        },
        {
          src: "/assets/im2-4.jpg",
          alt: "Elderly residents engaged in physiotherapy awareness session at the old age home"
        },
        {
          src: "/assets/im1-5.jpg",
          alt: "Team and residents celebrating successful completion of physiotherapy camp at Maa Bap nu ghar"
        }
      ]
    }
  ] satisfies PrideMomentsEvent[]
};
