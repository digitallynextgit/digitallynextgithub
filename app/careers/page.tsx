import type { Metadata } from 'next'
import { buildMetadata, webPageJsonLd } from '@/app/utils/seo'
import Script from 'next/script'
import CareersClient from './CareersClient'

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Script id="ld-careers-webpage" type="application/ld+json">
        {JSON.stringify(
          webPageJsonLd({
            title: 'Careers | DigitallyNext',
            description: 'Explore open positions, internships, culture, and benefits at DigitallyNext.',
            path: '/careers',
          })
        )}
      </Script>
      <CareersClient />
    </main>
  )
}

export const metadata: Metadata = buildMetadata({
  title: 'Careers | DigitallyNext',
  description: 'Explore open positions, internships, culture, and benefits at DigitallyNext.',
  path: '/careers',
  keywords: ['careers', 'jobs', 'internship', 'culture', 'benefits', 'DigitallyNext'],
});