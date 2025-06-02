import { Metadata } from 'next';
import AboutHero from '@/app/components/about/AboutHero';
import ExploreJourney from '@/app/components/about/ExploreJourney';
// import OurStory from '@/app/components/about/OurStory';
import OurValues from '@/app/components/about/OurValues';
// import TeamSection from '@/app/components/about/TeamSection';
import TeamLeadSection from '@/app/components/about/TeamLeadSection';
import Achievements from '@/app/components/about/Achievements';
import ClientsSlider from '@/app/components/about/ClientsSlider';

export const metadata: Metadata = {
  title: 'About Us | DigitallyNext',
  description: 'Learn about our journey, mission, values, and the team that makes DigitallyNext a leading digital agency.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
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