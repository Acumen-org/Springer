import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import PageAnimations from '@/components/PageAnimations';
import CookieBanner from '@/components/CookieBanner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://springer.capital'),
  title: {
    template: '%s | Springer Capital',
    default: 'Springer Capital | Global Real Estate Advisory',
  },
  description: 'Springer Capital is a real estate investment and advisory group with operations in Hong Kong, China, and North America.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://springer.capital',
    siteName: 'Springer Capital',
    images: [{
      url: '/images/og-default.jpg',
      width: 1200,
      height: 630,
      alt: 'Springer Capital',
    }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Springer Capital",
  "url": "https://springer.capital",
  "logo": "https://springer.capital/images/sh.png",
  "description": "Premium real estate investment and advisory focusing on world-class opportunities across global markets.",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "430 Beverly Drive",
      "addressLocality": "Wilmette",
      "addressRegion": "IL",
      "postalCode": "60091",
      "addressCountry": "US"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Kangding East Road 45",
      "addressLocality": "Jingan District",
      "addressRegion": "Shanghai",
      "postalCode": "200020",
      "addressCountry": "CN"
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </head>
      <body className={`${inter.className} min-h-full flex flex-col pt-[84px] bg-zinc-50 text-zinc-900`}>
        <ScrollProgress />
        <PageAnimations />
        <CookieBanner />
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
