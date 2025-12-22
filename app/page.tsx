import Hero from "./components/home/Hero";
import About from "./components/home/About";
// import Info from "./components/home/Info";
// import ChatBot from "./components/ChatBot";
// import Learn from "./components/home/Learn";
import Book from "./components/home/Book";
// import Podcast from "./components/home/Podcast";
// import BlogSection from "./components/home/BlogSection";
// import ExploreSection from "./components/ExploreSection";

import { Testimonials } from "./components/home/Testimonials";
import Stats from "./components/home/Stats";
import LogoSlider from "./components/home/LogoSlider";
import BookConsultation from "./components/home/BookConsultation";
import Nuggest from "./components/home/Nuggest";
import HomeServices from "./components/home/HomeServices";
import Careers from "./components/home/Careers";
import QuoraSection from "./components/home/QuoraSection";
import Map from "./components/home/Map";
import SocialMediaSection from "./components/home/SocialMediaSection";
import VideoSection from "@/components/home/Video";
import MobileVideoSection from "@/components/home/MobileHelpSection";
import ManualYoutubeShortsWrapper from "./components/home/ManualYoutubeShortsWrapper";
import HomeExploreCards from "./components/home/HomeExploreCards";



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
