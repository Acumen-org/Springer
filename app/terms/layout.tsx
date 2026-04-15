import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Read the Terms of Service for springer.capital, including acceptable use, intellectual property, electronic communications, governing law, and our SMS communications program.',
  openGraph: {
    title: 'Terms of Service | Springer Capital',
    description:
      'Read the Terms of Service for springer.capital, including acceptable use, intellectual property, electronic communications, governing law, and our SMS communications program.',
    url: 'https://springer.capital/terms',
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
