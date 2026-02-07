"use client";

import React, { useState } from "react";
// import Image from "next/image";
import { motion } from "framer-motion";
// import dynamic from "next/dynamic";
import ImageCarousel from "./ImageCarousel";
import { VideoText } from "@/components/magicui/video-text";
import Link from "next/link";
import Image from "next/image";
import YouTubeFacade from "../YouTubeFacade";
import ConsultationForm from "../contact/ConsultationForm";
// Dynamically import Lottie Animation for better performance
// const LottieAnimation = dynamic(() => import("./LottieAnimation"), {
//   ssr: false,
//   loading: () => (
//     <div className="animate-pulse bg-gray-200 rounded-md w-48 h-48 mx-auto"></div>
//   ),
// });

const About = () => {
  // Image carousel data
  const carouselImages = [
    {
      src: {
        desktop: "/office/8.webp",
        mobile: "/office/8.webp",
      },
      alt: "Luxurious Interior Design",
    },
    {
      src: {
        desktop: "/office/1.webp",
        mobile: "/office/1.webp",
      },
      alt: "Luxurious Interior Design",
    },
    {
      src: {
        desktop: "/office/2.webp",
        mobile: "/office/2.webp",
      },
      alt: "Luxurious Interior Design",
    },
    {
      src: {
        desktop: "/office/3.webp",
        mobile: "/office/3.webp",
      },
      alt: "Luxurious Interior Design",
    },
    {
      src: {
        desktop: "/office/4.webp",
        mobile: "/office/6.webp",
      },
      alt: "Luxurious Interior Design",
    },
    {
      src: {
        desktop: "/office/5.webp",
        mobile: "/office/5.webp",
      },
      alt: "Luxurious Interior Design",
    },
  ];

  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="bg-white py-10 overflow-hidden" id="about">
      <button
        type="button"
        onClick={() => setIsFormOpen(true)}
        className="w-full"
      >
        <div className="w-full">
          <Image
            src="/banner/ipl-mobile.webp"
            alt="About us (mobile)"
            width={1920}
            height={1080}
            loading="lazy"
            unoptimized
            className="w-full h-full object-cover border-b-2 block lg:hidden"
          />
          <Image
            src="/banner/ipl.webp"
            alt="About us (desktop)"
            width={1920}
            height={1080}
            loading="lazy"
            unoptimized
            className="w-full h-full object-cover border-b-2 hidden lg:block"
          />
        </div>
      </button>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large "ABOUT US" Heading with Lottie animation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="relative h-[250px] md:h-[300px] w-full overflow-hidden lg:col-span-8">
            <VideoText
              src="https://videos.pexels.com/video-files/6561920/6561920-uhd_2560_1440_25fps.mp4"
              fontSize={20}
              fontWeight="900"
              fontFamily="system-ui, sans-serif"
              textAnchor="middle"
              dominantBaseline="middle"
              className="h-full w-full flex items-center justify-center"
            >
              ABOUT US
            </VideoText>
          </div>

          {/* Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-4 h-[300px] lg:h-[300px] md:mb-16 "
          >
            {/* <LottieAnimation src="https://lottie.host/6659a81d-1046-466c-bd4d-889bc5fd8c4b/QgjOCUlNx6.lottie" /> */}
            <Image
              src="/aboutus.gif"
              alt="About us"
              width={500}
              height={300}
              loading="lazy"
              unoptimized
              className="w-full h-full object-cover "
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ">
          {/* Left Content */}
          <div className="lg:col-span-3 md:mt-[-6vw] mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* <p className="text-lg font-medium mb-6">
                Luxurious Interior and Industrial Design
              </p> */}

              <p className="text-gray-700">
                Mayan calendar predicted the end of the world in 2012. However,
                the world did not end but did not remain the same either.
                Destruction came in its welcoming avatar of
                &quot;Disruption&quot;. And that&quot;s the Next the world
                witnessed. And the Next is here, at Digitally Next...
              </p>
            </motion.div>
            <Link href="/about" className="btn-primary mt-4 text-xl capitalize">
              Know More
            </Link>
          </div>

          {/* Center - Image Carousel */}
          <div className="lg:col-span-5 my-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ImageCarousel
                images={carouselImages}
                className="mt-[-10vw]"
                imageHeight={400}
                imageClassName="
    object-cover 
    h-[60vw]             // sets height for mobile
    sm:h-[50vw]          // slightly taller on small screens
    md:h-[400px]         // fixed height from md and up
    w-full 
    hover:scale-105 
    transition-transform 
    duration-300"
                showNavigation={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
              />
            </motion.div>
          </div>

          {/* Right Column - Video */}
          <div className="lg:col-span-4 md:mt-[-7vw]">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-0 pb-[56.25%] rounded-md overflow-hidden mb-6">
                  <YouTubeFacade
                    videoId="TuOqG4dkSVE"
                    title="Digitally Next - Our Philosophy"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-3">Our Philosophy</h3>

                <p className="text-gray-700">
                  In a noisy world, we choose clarity. Digitally Next is where
                  stories are shaped and strategies are born. We walk with
                  giants and guide the underdogs — not as service providers, but
                  as partners in purpose.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsFormOpen(false)} />
          <div className="relative flex items-center justify-center p-4 sm:p-6 w-full h-full overflow-y-auto">
            <div className="bg-white rounded-2xl shadow-2xl w-[95vw] sm:w-[85vw] md:w-[70vw] lg:max-w-2xl max-h-[90vh] overflow-y-auto p-4 sm:p-8 relative m-auto">
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="sticky top-3 float-right rounded-full bg-gray-100 hover:bg-gray-200 w-9 h-9 flex items-center justify-center"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M6.225 4.811L4.811 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586z" />
                </svg>
              </button>
              <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-gray-800">Start a Conversation</h3>
              <ConsultationForm defaultService="General Inquiry" hideService isPopup />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
