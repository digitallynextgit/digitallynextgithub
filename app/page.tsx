import dynamic from "next/dynamic";
import Hero from "./components/home/Hero";

// About section contains heavy 28MB GIF - load dynamically
const About = dynamic(() => import("./components/home/About"), {
  loading: () => <div className="h-[600px] bg-gray-100 animate-pulse" />
});
// import Info from "./components/home/Info";
// import ChatBot from "./components/ChatBot";
// import Learn from "./components/home/Learn";
// import Podcast from "./components/home/Podcast";
// import BlogSection from "./components/home/BlogSection";
// import ExploreSection from "./components/ExploreSection";

// Dynamic imports for below-fold components (improves initial load)
const Book = dynamic(() => import("./components/home/Book"));
const Testimonials = dynamic(() => import("./components/home/Testimonials").then(mod => ({ default: mod.Testimonials })));
const Stats = dynamic(() => import("./components/home/Stats"));
const LogoSlider = dynamic(() => import("./components/home/LogoSlider"));
const BookConsultation = dynamic(() => import("./components/home/BookConsultation"));
const Nuggest = dynamic(() => import("./components/home/Nuggest"));
const HomeServices = dynamic(() => import("./components/home/HomeServices"));
const Careers = dynamic(() => import("./components/home/Careers"));
const QuoraSection = dynamic(() => import("./components/home/QuoraSection"));
const Map = dynamic(() => import("./components/home/Map"));
const SocialMediaSection = dynamic(() => import("./components/home/SocialMediaSection"));
const VideoSection = dynamic(() => import("@/components/home/Video"));
const MobileVideoSection = dynamic(() => import("@/components/home/MobileHelpSection"));
const ManualYoutubeShortsWrapper = dynamic(() => import("./components/home/ManualYoutubeShortsWrapper"));
const HomeExploreCards = dynamic(() => import("./components/home/HomeExploreCards"));

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full">
      <Script id="ld-home-webpage" type="application/ld+json">
        {JSON.stringify(
          webPageJsonLd({
            title: "DigitallyNext: Full-stack Digital Marketing Agency",
            description:
              "Partner with DigitallyNext for SEO, performance marketing, social media, content, and UI/UX — tailored strategies that drive growth.",
            path: "/",
          })
        )}
      </Script>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Logo Slider Section */}
      <LogoSlider />

      {/* Stats Section */}
      <Stats />

      {/* Book Section */}
      <Book />

      {/* Video Section */}
      <VideoSection />

      {/* Mobile Video Section */}
      <MobileVideoSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Book Consultation Section */}
      <BookConsultation />

      {/* Nuggest Section */}
      <Nuggest />

      {/* Services Section */}
      <HomeServices />

      {/* Careers Section */}
      <Careers />

      {/* Explore Section */}
      <HomeExploreCards />

      {/* Quora Section */}
      <QuoraSection />

      {/* Map Section */}
      <Map />

      {/* Social Media Section */}
      <SocialMediaSection />

      {/* Info Section */}
      {/* <Info /> */}

      {/* Learn Section */}
      {/* <Learn /> */}

      {/* Podcast Section */}
      {/* <Podcast /> */}

      {/* Blog Section */}
      {/* <BlogSection /> */}

      {/* YouTube Shorts Section */}
      <ManualYoutubeShortsWrapper />


    </main>
  );
}
import type { Metadata } from "next";
import { buildMetadata, webPageJsonLd } from "@/app/utils/seo";
import Script from "next/script";
export const metadata: Metadata = buildMetadata({
  title: "DigitallyNext: Full-stack Digital Marketing Agency",
  description:
    "Partner with DigitallyNext for SEO, performance marketing, social media, content, and UI/UX — tailored strategies that drive growth.",
  path: "/",
  keywords: [
    "DigitallyNext",
    "digital marketing agency",
    "SEO services",
    "performance marketing",
    "social media",
    "content strategy",
    "UI/UX",
  ],
  images: ["/logo.webp"],
});
