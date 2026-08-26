import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { WhatsAppFloatButton } from '@/components/layout/whatsapp-float-button';
import { BackToTopButton } from '@/components/layout/back-to-top-button';
import { StickyCtaBar } from '@/components/layout/sticky-cta-bar';
import { BRAND } from '@/lib/constants';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NABS Marketing – Facebook & Instagram Ads Agency Bangladesh',
  description:
    'We turn your Facebook & Instagram ads into real customers. High-converting performance marketing for Restaurants and Clothing Brands in Bangladesh.',
  keywords: [
    'Facebook Ads Bangladesh',
    'Instagram Ads Agency Dhaka',
    'Restaurant Digital Marketing BD',
    'Clothing Brand Ads Bangladesh',
    'Performance Marketing Agency',
    'Meta Ads Specialist',
    'NABS Marketing',
  ],
  authors: [{ name: 'NABS Marketing' }],
  creator: 'NABS Marketing',
  publisher: 'NABS Marketing',
  metadataBase: new URL('https://nabsmarketing.com'),
  icons: {
    icon: '/nabs-logo.jpg',
    shortcut: '/nabs-logo.jpg',
    apple: '/nabs-logo.jpg',
  },
  openGraph: {
    title: 'NABS Marketing – Facebook & Instagram Ads Agency Bangladesh',
    description:
      'We turn your Facebook & Instagram ads into real customers. High-converting performance marketing for Restaurants and Clothing Brands.',
    url: 'https://nabsmarketing.com',
    siteName: 'NABS Marketing',
    images: [
      {
        url: '/nabs-logo.jpg',
        width: 1024,
        height: 1024,
        alt: 'NABS Marketing Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BRAND.name,
    description: BRAND.subHeadline,
    telephone: BRAND.phone,
    email: BRAND.email,
    url: 'https://nabsmarketing.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BD',
      addressLocality: 'Dhaka',
    },
    openingHours: 'Sa-Th 09:00-21:00',
    priceRange: '$$',
    sameAs: ['https://instagram.com/nabsmarketing.bd'],
  };

  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} dark h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0A1628] text-white font-sans antialiased selection:bg-[#00A8FF]/30 selection:text-white">
        <Navbar />
        <StickyCtaBar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <WhatsAppFloatButton />
        <BackToTopButton />
      </body>
    </html>
  );
}
