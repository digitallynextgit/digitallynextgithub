import Hero from "./components/home/Hero";
import About from "./components/home/About";
// import Info from "./components/home/Info";
import ChatBot from "./components/ChatBot";
// import Learn from "./components/home/Learn";
import Book from "./components/home/Book";
// import Podcast from "./components/home/Podcast";
// import BlogSection from "./components/home/BlogSection";

import { Testimonials } from "./components/home/Testimonials";
import Stats from "./components/home/Stats";
import LogoSlider from "./components/home/LogoSlider";
import BookConsultation from "./components/home/BookConsultation";
import Nuggest from "./components/home/Nuggest";
import HomeServices from "./components/home/HomeServices";
import Careers from "./components/home/Careers";
import QuoraSection from "./components/home/QuoraSection";
import Map from "./components/home/Map";
// import SocialMediaSection from "./components/home/SocialMediaSection";
import VideoSection from "@/components/home/Video";
import MobileVideoSection from "@/components/home/MobileHelpSection";
import YouTubeShortsWrapper from "./components/home/YouTubeShortsWrapper";



export default function Home() {
  return (
    <main className="overflow-x-hidden w-full">
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

      {/* Quora Section */}
      <QuoraSection />

      {/* Map Section */}
      <Map />

      {/* Social Media Section */}
      {/* <SocialMediaSection /> */}

      {/* Info Section */}
      {/* <Info /> */}

      {/* Learn Section */}
      {/* <Learn /> */}

      {/* Podcast Section */}
      {/* <Podcast /> */}

      {/* Blog Section */}
      {/* <BlogSection /> */}

      {/* YouTube Shorts Section */}
      <YouTubeShortsWrapper />

      {/* Chat Bot */}
      <ChatBot />
    </main>
  );
}
