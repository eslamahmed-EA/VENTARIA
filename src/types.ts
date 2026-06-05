export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  deliverables: string[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  platform: string;
  metrics: {
    revenueIncrease: string;
    conversionRate: string;
    averageOrderValue?: string;
    loadTimeReduction?: string;
  };
  challenge: string;
  research: string;
  designProcess: string;
  brandIdentity: string;
  storeDevelopment: string;
  results: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  category: string; // 'Fashion' | 'Cosmetics' | 'Restaurants' | 'Luxury' | 'Electronics'
  metrics: string;
  tags: string[];
  image: string;
  caseStudyId?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  timeline: string;
  deliverables: string[];
  features: {
    text: string;
    included: boolean;
  }[];
  recommendation?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string; // 'Shopify' | 'Salla' | 'Branding' | 'Growth' | 'UX'
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}
