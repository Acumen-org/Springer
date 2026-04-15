import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how Springer Capital LLC collects, processes, and protects your personal data in compliance with GDPR, CAN-SPAM, and applicable international regulations.',
  openGraph: {
    title: 'Privacy Policy | Springer Capital',
    description:
      'Learn how Springer Capital LLC collects, processes, and protects your personal data in compliance with GDPR, CAN-SPAM, and applicable international regulations.',
    url: 'https://springer.capital/privacy',
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
