import type { Metadata } from 'next';
import { buildMetadata, webPageJsonLd } from '@/app/utils/seo';
import Script from 'next/script';
import TermsClient from './TermsClient';

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-white py-[8vh] px-[6vw] mt-[6vw]">
      <Script id="ld-terms-webpage" type="application/ld+json">
        {JSON.stringify(
          webPageJsonLd({
            title: 'Terms of Use | DigitallyNext',
            description: 'Read DigitallyNext terms of use and usage guidelines.',
            path: '/terms-of-use',
          })
        )}
      </Script>
      <TermsClient />
    </main>
  );
}

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Use | DigitallyNext',
  description: 'DigitallyNext terms of use and website usage guidelines.',
  path: '/terms-of-use',
  keywords: ['terms of use', 'website terms', 'DigitallyNext'],
});