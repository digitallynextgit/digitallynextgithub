import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata, webPageJsonLd } from '@/app/utils/seo';
import Script from 'next/script';
import Hero from '@/app/components/podcast/Hero';
import SupportMetrics from '@/app/components/podcast/SupportMetrics';
import FeaturedEpisode from '@/app/components/podcast/FeaturedEpisode';
import LeadingPodcaster from '@/app/components/podcast/LeadingPodcaster';
import Community from '@/app/components/podcast/Community';

export default function PodcastPage() {
  return (
    <main className="bg-white min-h-screen">
      <Script id="ld-podcast-webpage" type="application/ld+json">
        {JSON.stringify(
          webPageJsonLd({
            title: 'Podcast | DigitallyNext',
            description: 'Listen to DigitallyNext podcast episodes on marketing and growth.',
            path: '/podcast',
          })
        )}
      </Script>
      {/* Decorative background pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-repeat " style={{ backgroundImage: "url('/podcast/pattern-bg.svg')" }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        <SupportMetrics />
        <FeaturedEpisode />
        <LeadingPodcaster />
        <Community />
      </div>
    </main>
  );
}

export const metadata: Metadata = buildMetadata({
  title: 'Podcast | DigitallyNext',
  description: 'Listen to DigitallyNext podcast episodes on marketing and growth.',
  path: '/podcast',
  keywords: ['podcast', 'marketing podcast', 'DigitallyNext'],
});