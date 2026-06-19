export type Language = 'ar' | 'en';

export interface CurrencyConfig {
  code: string;
  symbol: string;
  rate: number; // Conversion rate relative to USD
}

export interface CountryConfig {
  code: string;
  nameEn: string;
  nameAr: string;
  currency: string;
  flag: string;
}

export interface ServiceDetail {
  id: string;
  icon: string;
  title: string;
  description: string;
  benefits: string[];
  features: string[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  description: string;
  descriptionAr: string;
  metrics: ProjectMetric[];
  tech: string[];
  image: string;
  beforeImage?: string;
  afterImage?: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  clientAr: string;
  industry: string;
  industryAr: string;
  challenge: string;
  challengeAr: string;
  solution: string;
  solutionAr: string;
  results: string[];
  resultsAr: string[];
  metrics: { label: string; labelAr: string; value: string }[];
  technologies: string[];
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  titleAr: string;
  excerpt: string;
  excerptAr: string;
  category: string;
  categoryAr: string;
  date: string;
  readTime: string;
  readTimeAr: string;
  image: string;
}
