import { Metadata } from 'next';
import { buildMetadata, webPageJsonLd } from '@/app/utils/seo';
import Script from 'next/script';
import AboutHero from '@/app/components/about/AboutHero';
import ExploreJourney from '@/app/components/about/ExploreJourney';
// import OurStory from '@/app/components/about/OurStory';
import OurValues from '@/app/components/about/OurValues';
// import TeamSection from '@/app/components/about/TeamSection';
import TeamLeadSection from '@/app/components/about/TeamLeadSection';
import Achievements from '@/app/components/about/Achievements';
import ClientsSlider from '@/app/components/about/ClientsSlider';

export const metadata: Metadata = buildMetadata({
  title: 'About Us | DigitallyNext',
  description:
    'Learn about our journey, mission, values, and the team that makes DigitallyNext a leading digital agency.',
  path: '/about',
  keywords: ['about DigitallyNext', 'digital agency team', 'mission and values'],
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="ld-about-webpage" type="application/ld+json">
        {JSON.stringify(
          webPageJsonLd({
            title: 'About Us | DigitallyNext',
            description:
              'Learn about our journey, mission, values, and the team that makes DigitallyNext a leading digital agency.',
            path: '/about',
          })
        )}
      </Script>
      <AboutHero />
      <ExploreJourney />
      {/* <OurStory /> */}
      <OurValues />
      <Achievements />
      <TeamLeadSection />
      <ClientsSlider />
    </div>
  );
}