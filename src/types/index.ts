export interface NavLink {
  title: string;
  href: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  businessName: string;
  rating: number;
  niche: 'restaurant' | 'clothing' | 'other';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'restaurant' | 'clothing';
  categoryLabel: string;
  reach: string;
  leadsOrSales: string;
  adSpend: string;
  description: string;
  isSampleData: boolean;
}

export interface AdSample {
  id: string;
  title: string;
  category: 'restaurant' | 'clothing';
  aspectRatio: string;
  tag: string;
  gradient: string;
  icon: string;
}

export interface TrustBadge {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconName: string;
  badge?: string;
}
