import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata, webPageJsonLd } from '@/app/utils/seo';
import Script from 'next/script';
import Banner from '../components/speaking/Banner';
import Vision from '../components/speaking/Vision';
import Testimonials from '../components/speaking/Testimonials';

export default function SpeakingPage() {
  return (
    <main className="bg-[#ece2d7] min-h-screen">
      <Script id="ld-speaking-webpage" type="application/ld+json">
        {JSON.stringify(
          webPageJsonLd({
            title: 'Speaking | DigitallyNext',
            description: 'Speaking engagements, talks, and expertise shared by DigitallyNext.',
            path: '/speaking',
          })
        )}
      </Script>
      <Banner />
      <Vision />
      <Testimonials />
    </main>
  );
}

export const metadata: Metadata = buildMetadata({
  title: 'Speaking | DigitallyNext',
  description: 'Speaking engagements, talks, and expertise shared by DigitallyNext.',
  path: '/speaking',
  keywords: ['speaking', 'talks', 'keynotes', 'DigitallyNext'],
});