import { NavLink, PricingTier, Testimonial, FaqItem, PortfolioItem, AdSample, TrustBadge, ServiceItem } from '@/types';

export const BRAND = {
  name: 'NABS Marketing',
  tagline: 'Where Ads Meet Revenue',
  headline: 'We Turn Your Facebook & Instagram Ads Into Real Customers.',
  subHeadline: 'High-converting ad campaigns tailored for Restaurants & Clothing Brands in Bangladesh. Data-driven targeting, lower cost per lead, and transparent ROI reporting.',
  whatsappNumber: '8801700000000', // Placeholder until provided
  whatsappUrl: 'https://wa.me/8801700000000?text=Hi%20NABS%20Marketing%2C%20I%20want%20to%20get%20a%20free%20consultation%20for%20my%20business.',
  email: 'hello@nabsmarketing.bd',
  phone: '+880 1700-000000',
  instagram: '@nabsmarketing.bd',
  instagramUrl: 'https://instagram.com/nabsmarketing.bd',
  businessHours: 'Saturday – Thursday: 9:00 AM – 9:00 PM (Bangladesh Time)',
  founderName: 'Sojib',
  founderRole: 'Founder & Lead Performance Marketer',
};

export const NAV_LINKS: NavLink[] = [
  { title: 'Home', href: '/' },
  { title: 'Services', href: '/services' },
  { title: 'Portfolio', href: '/portfolio' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

export const TRUST_STATS = [
  { value: '100+', label: 'Campaigns Managed' },
  { value: '50,000+', label: 'People Reached' },
  { value: '98%', label: 'Client Satisfaction' },
];

export const TRUST_BADGES: TrustBadge[] = [
  {
    id: 'badge-1',
    title: 'Meta Certified Knowledge',
    description: 'Up-to-date Meta Ads policies & algorithms',
    iconName: 'ShieldCheck',
  },
  {
    id: 'badge-2',
    title: 'No Hidden Fees',
    description: '100% transparent pricing structure',
    iconName: 'BadgeCheck',
  },
  {
    id: 'badge-3',
    title: 'Results in 7 Days',
    description: 'Quick campaign setup & early traction',
    iconName: 'Clock',
  },
  {
    id: 'badge-4',
    title: 'Bangladesh Specialists',
    description: 'Deep understanding of local audience buying behavior',
    iconName: 'MapPin',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'facebook-ads',
    title: 'Facebook Ads Management',
    description: 'End-to-end Facebook ad campaigns built to drive high-intent foot traffic for restaurants and online sales for fashion brands across Bangladesh.',
    features: [
      'Custom audience creation & pixel integration',
      'High-converting ad copy & carousel/video creatives',
      'A/B testing for ad placements & copy',
      'Daily performance tracking & budget reallocation',
      'Weekly transparent analytics report',
      'Dedicated ad manager support',
    ],
    iconName: 'Megaphone',
    badge: 'Core Service',
  },
  {
    id: 'instagram-ads',
    title: 'Instagram Ads Management',
    description: 'Visual story ads, Reels promotions, and shoppable post ads engineered to capture young demographic attention and scale order volume.',
    features: [
      'Reels & Story ad creative optimization',
      'Influencer-style UGC ad formatting',
      'Direct message (DM) automation setup',
      'Audience demographic refinement',
      'Retargeting website visitors & engagers',
      'Brand aesthetic consistency check',
    ],
    iconName: 'Instagram',
    badge: 'Popular',
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation Campaigns',
    description: 'Instant lead forms and Messenger/WhatsApp conversion campaigns that convert curious browsers into paid table bookings and direct orders.',
    features: [
      'Custom Meta Lead Form configuration',
      'Instant Messenger & WhatsApp chat routing',
      'Offer creation (Discounts, Bundles, VIP passes)',
      'Lead qualification filter questions',
      'CRM/Google Sheet instant sync',
      'Follow-up sequence recommendations',
    ],
    iconName: 'Users',
    badge: 'High ROI',
  },
  {
    id: 'campaign-setup-optimization',
    title: 'Campaign Audit & Optimization',
    description: 'Got existing ads that underperform? We audit your ad account structure, fix pixel tracking errors, and optimize targeting to cut wasted spend.',
    features: [
      'Full account & pixel health audit',
      'Audience overlap diagnosis',
      'Creative fatigue check & refresh schedule',
      'Cost-per-click (CPC) & ROAS optimization',
      'Landing page & conversion path check',
      'Actionable 30-day turnaround strategy',
    ],
    iconName: 'Settings2',
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter Package',
    price: '12,000৳',
    period: '/month',
    description: 'Ideal for local restaurants or emerging clothing shops starting their first paid ad campaigns.',
    features: [
      'Up to 2 active campaign setups',
      'Facebook & Instagram placements',
      'Custom ad copywriting',
      'Weekly performance summaries',
      'Audience targeting setup',
      'Standard 48-hour response time',
    ],
    ctaText: 'Get Started',
    ctaHref: '/contact?package=starter',
  },
  {
    id: 'growth',
    name: 'Growth Package',
    price: '25,000৳',
    period: '/month',
    description: 'Our most popular plan for established brands aiming to aggressively expand customer reach and monthly revenue.',
    isPopular: true,
    features: [
      'Up to 5 active campaign setups',
      'Advanced retargeting & lookalike audiences',
      'Messenger / WhatsApp lead funnel',
      'Continuous A/B testing of creatives',
      'Bi-weekly detailed ROI reporting',
      'Priority WhatsApp support',
      'Competitor ad analysis',
    ],
    ctaText: 'Claim Growth Plan',
    ctaHref: '/contact?package=growth',
  },
  {
    id: 'pro',
    name: 'Pro Scale Package',
    price: '45,000৳',
    period: '/month',
    description: 'Full-service ad management for multi-branch restaurants & high-volume ecommerce fashion brands.',
    features: [
      'Unlimited active campaign scaling',
      'Custom lead funnels & automated messaging',
      'Video ad editing & motion graphic creatives',
      'Daily budget scaling & ROAS tracking',
      'Dedicated account strategist',
      'Instant 1-on-1 WhatsApp hotline',
      'Free landing page optimization review',
    ],
    ctaText: 'Scale Your Brand',
    ctaHref: '/contact?package=pro',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How much should I spend on Meta ad budget?',
    answer: 'Your ad spend is paid directly to Meta (Facebook/Instagram). For local Bangladeshi businesses, we recommend starting with at least 5,000৳ to 15,000৳ per month for ad spend, separate from our management fee. We optimize every Taka for maximum ROI.',
  },
  {
    id: 'faq-2',
    question: 'How quickly will I see results from my campaigns?',
    answer: 'Initial campaign setup takes 2–3 days. Most clients start receiving qualified leads, messages, or restaurant inquiries within 48 to 72 hours of campaign activation. Full audience optimization matures by day 7 to 14.',
  },
  {
    id: 'faq-3',
    question: 'Do I need an existing Facebook Page or Instagram Business Account?',
    answer: 'Yes, but if you do not have one or yours needs professional tuning, our team will guide you through setting up or optimizing your Business Manager, Ad Account, and Facebook Page as part of onboarding.',
  },
  {
    id: 'faq-4',
    question: 'What if my current ads are already underperforming?',
    answer: 'We begin with a comprehensive account audit to identify why your current ads fail—whether it is improper audience targeting, weak creative, or high cost-per-click—and rebuild your campaigns using proven Bangladeshi market funnels.',
  },
  {
    id: 'faq-5',
    question: 'What payment methods do you accept for agency fees and Meta ad spend?',
    answer: 'For our management packages, we accept bKash, Nagad, Rocket, and Direct Bank Transfer. For Meta ad spend, you pay Meta directly using a dual-currency credit/debit card (EBL Aqua, City Bank, etc.) or we can advise you on compliant payment setups.',
  },
  {
    id: 'faq-6',
    question: 'Is there a long-term contract requirement?',
    answer: 'No long-term lock-in contracts! Our management plans operate on a month-to-month basis. We earn your business every single month through measurable revenue growth and transparent reporting.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'NABS Marketing scaled our weekend table reservations by over 140% within just 3 weeks of launching targeted Instagram Reels ads. Their understanding of local food lovers in Dhaka is unmatched.',
    clientName: 'Tanvir Ahmed',
    businessName: 'Spicy Dine Restaurant (Dhaka)',
    rating: 5,
    niche: 'restaurant',
  },
  {
    id: 'test-2',
    quote: 'Our new Eid panjabi collection sold out 10 days earlier than expected. NABS set up messenger automation that converted direct queries into confirmed sales seamlessly.',
    clientName: 'Nadia Rahman',
    businessName: 'Vogue Craft Apparel',
    rating: 5,
    niche: 'clothing',
  },
  {
    id: 'test-3',
    quote: 'Extremely transparent reporting and zero BS. They lowered our Cost-Per-Lead from 45৳ down to 18৳, allowing us to double our monthly ad budget with confidence.',
    clientName: 'Rafiqul Islam',
    businessName: 'Urban Bites & Cafe',
    rating: 5,
    niche: 'restaurant',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Dhaka Gourmet Bistro Launch',
    category: 'restaurant',
    categoryLabel: 'Restaurant & Dining',
    reach: '68,500+ Impressions',
    leadsOrSales: '340+ Table Reservations',
    adSpend: '8,500৳ Ad Budget',
    description: 'High-impact geotargeted video ad campaign targeting food enthusiasts within a 5km radius in Gulshan & Banani.',
    isSampleData: true,
  },
  {
    id: 'port-2',
    title: 'Urban Wear Summer Drop',
    category: 'clothing',
    categoryLabel: 'Clothing & Fashion',
    reach: '94,000+ Reached',
    leadsOrSales: '480+ Direct Orders',
    adSpend: '14,000৳ Ad Budget',
    description: 'Instagram Carousel and Story ads highlighting new trendy oversized tees with direct WhatsApp checkout links.',
    isSampleData: true,
  },
  {
    id: 'port-3',
    title: 'Cafe Artisan Breakfast Promo',
    category: 'restaurant',
    categoryLabel: 'Restaurant & Dining',
    reach: '42,000+ Impressions',
    leadsOrSales: '210+ Morning Guests',
    adSpend: '5,000৳ Ad Budget',
    description: 'Early morning hyper-local Messenger ads promoting 1-for-1 coffee breakfast combos for office professionals.',
    isSampleData: true,
  },
  {
    id: 'port-4',
    title: 'Ethnic Fusion Saree Collection',
    category: 'clothing',
    categoryLabel: 'Clothing & Fashion',
    reach: '112,000+ Reached',
    leadsOrSales: '620+ Messenger Inquiries',
    adSpend: '18,500৳ Ad Budget',
    description: 'Retargeting campaign leveraging video reels and customer unboxing clips to achieve 4.2x ROAS.',
    isSampleData: true,
  },
];

export const AD_SAMPLES: AdSample[] = [
  {
    id: 'ad-sample-1',
    title: 'Steakhouse Special Carousel',
    category: 'restaurant',
    aspectRatio: '1:1 Square',
    tag: 'Food Creative',
    gradient: 'from-amber-600/30 to-red-900/40',
    icon: 'UtensilsCrossed',
  },
  {
    id: 'ad-sample-2',
    title: 'Trendy Streetwear Reel',
    category: 'clothing',
    aspectRatio: '9:16 Vertical Reel',
    tag: 'Fashion Creative',
    gradient: 'from-cyan-600/30 to-blue-900/40',
    icon: 'Shirt',
  },
  {
    id: 'ad-sample-3',
    title: 'Weekend Buffet Offer Story',
    category: 'restaurant',
    aspectRatio: '9:16 Vertical Story',
    tag: 'Promo Creative',
    gradient: 'from-orange-600/30 to-amber-900/40',
    icon: 'Sparkles',
  },
];
