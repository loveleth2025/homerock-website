export type Testimonial = {
  text: string;
  author: string;
  role: string;
};

/** Carried over verbatim from the legacy Booking page. */
export const bookingTestimonials: Testimonial[] = [
  {
    text: "My strategy session with Natalie completely changed my approach. I felt confident after our conversation.",
    author: "Marcus Thompson",
    role: "First-Time Home Buyer",
  },
  {
    text: "The action plan Natalie created for my investment business has been transformative.",
    author: "Jennifer Walsh",
    role: "Real Estate Investor",
  },
];
