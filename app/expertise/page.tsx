import Banner from '@/app/components/expertise/Banner'
import Profile from '@/app/components/expertise/Profile'
import type { Metadata } from 'next'
import { buildMetadata, webPageJsonLd } from '@/app/utils/seo'
import Script from 'next/script'

const page = () => {
    return (
        <>
            <Script id="ld-expertise-webpage" type="application/ld+json">
                {JSON.stringify(
                    webPageJsonLd({
                        title: 'Expertise | DigitallyNext',
                        description: 'Our expertise across industries and disciplines in digital.',
                        path: '/expertise',
                    })
                )}
            </Script>
            <Banner />
            <Profile />
        </>
    )
}

export default page

export const metadata: Metadata = buildMetadata({
  title: 'Expertise | DigitallyNext',
  description: 'Our expertise across industries and disciplines in digital.',
  path: '/expertise',
  keywords: ['digital expertise', 'industry focus', 'DigitallyNext'],
});