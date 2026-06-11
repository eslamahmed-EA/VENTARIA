export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  features: string[];
  duration: string;
  iconName: string;
  platformColor: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  platform: string;
  image: string;
  linkText: string;
  results: {
    label: string;
    value: string;
  }[];
  // Detailed case study fields
  clientDescription?: string;
  problemStatement?: string;
  solutionExecuted?: string;
  additionalImages?: string[];
  mobileImage?: string;
  technologies?: string[];
  demoUrl?: string;
  isFeatured?: boolean;
  // Dynamic brand customization properties for Awwwards style presentation
  brandLogoText?: string;
  brandLogoTagline?: string;
  brandColors?: { hex: string; name: string }[];
  brandTypography?: { heading: string; bodyStyle: string };
  brandPackagingImage?: string;
  brandShowcaseItems?: { title: string; image: string; type: string }[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  title: string;
  storeName: string;
  platform: 'salla' | 'zid' | 'shopify' | 'custom';
  avatar: string;
  content: string;
  rating: number;
}

export interface CalculatorInputs {
  sellingPrice: number;
  productCost: number;
  shippingCost: number;
  packagingCost: number;
  platformFeeType: 'percentage' | 'fixed' | 'salla_pro' | 'salla_special' | 'zid_pro' | 'shopify_basic';
  platformFeeFixed: number;
  platformFeePercent: number;
  paymentGateway: 'mada' | 'visa' | 'tamara' | 'tabby' | 'cod' | 'custom';
  gatewayFeePercent: number;
  gatewayFeeFixed: number;
  advertisingCost: number;
}

export interface CalculatorOutputs {
  netProfit: number;
  profitMargin: number;
  breakEvenOrders: number;
  breakEvenSales: number;
  profit100: number;
  profit1000: number;
  costBreakdown: {
    category: string;
    amount: number;
    percent: number;
    color: string;
  }[];
  roi: number; // Return on Ad Spend/Investment
}

export interface Recommendation {
  type: 'success' | 'warn' | 'danger' | 'info';
  title: string;
  description: string;
  actionText: string;
  actionTarget: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
