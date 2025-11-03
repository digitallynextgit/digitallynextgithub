import type { Metadata } from 'next';
import { buildMetadata, webPageJsonLd } from '@/app/utils/seo';
import Script from 'next/script';
import PrivacyClient from './PrivacyClient';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white py-[8vh] px-[6vw] mt-[6vw]">
      <Script id="ld-privacy-webpage" type="application/ld+json">
        {JSON.stringify(
          webPageJsonLd({
            title: 'Privacy Policy | DigitallyNext',
            description: 'Read DigitallyNext privacy policy covering data collection, use, and your rights.',
            path: '/privacy-policy',
          })
        )}
      </Script>
      <PrivacyClient />
    </main>
  );
}

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy | DigitallyNext',
  description: 'DigitallyNext privacy policy covering data collection, use, and your rights.',
  path: '/privacy-policy',
  keywords: ['privacy policy', 'data protection', 'DigitallyNext'],
});
