import type { Metadata } from 'next';
import { buildMetadata, webPageJsonLd } from '@/app/utils/seo';
import Script from 'next/script';
import NuggetsClient from './NuggetsClient';

export default function NuggetsPage() {
  return (
    <main className="min-h-screen bg-white py-[10vh] px-[4vw]">
      <Script id="ld-nuggets-webpage" type="application/ld+json">
        {JSON.stringify(
          webPageJsonLd({
            title: 'Nuggets | DigitallyNext',
            description: 'Download marketing nuggets PDFs and explore bite-sized insights.',
            path: '/nuggets',
          })
        )}
      </Script>
      <NuggetsClient />
    </main>
  );
}

export const metadata: Metadata = buildMetadata({
  title: 'Nuggets | DigitallyNext',
  description: 'Download marketing nuggets PDFs and explore bite-sized insights.',
  path: '/nuggets',
  keywords: ['nuggets', 'marketing PDFs', 'DigitallyNext downloads'],
});
