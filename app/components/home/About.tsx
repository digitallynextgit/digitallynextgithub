"use client";

import React from "react";
// import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import ImageCarousel from "./ImageCarousel";
import Link from "next/link";

// Dynamically import Lottie Animation for better performance
const LottieAnimation = dynamic(() => import("./LottieAnimation"), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse bg-gray-200 rounded-md w-48 h-48 mx-auto"></div>
  ),
});

const About = () => {
  // Image carousel data
  const carouselImages = [
    {
      src: "/about/design-interior.jpg",
      alt: "Luxurious Interior Design",
    },
    {
      src: "/about/office-space.jpg",
      alt: "Modern Office Space",
    },
    {
      src: "/portfolio/project-1.jpg",
      alt: "Digital Marketing Project",
    },
  ];

  return (
    <section className="bg-white py-10 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large "ABOUT US" Heading with Lottie animation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <h2 className="text-5xl md:text-[10rem] font-black leading-none tracking-tighter text-black text-center md:text-left">
              ABOUT US
            </h2>
            {/* <h2 className="text-8xl md:text-[10rem] font-black leading-none tracking-tighter text-black">
            
            </h2> */}
          </motion.div>

          {/* Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-4 h-[300px] lg:h-[300px] md:mb-16 "
          >
            <LottieAnimation src="https://lottie.host/6659a81d-1046-466c-bd4d-889bc5fd8c4b/QgjOCUlNx6.lottie" />
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
              />
            </motion.div>
          </div>

          {/* Right Column - Video */}
          <div className="lg:col-span-4 md:mt-[-10vw]">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-0 pb-[56.25%] rounded-md overflow-hidden mb-6">
                  <div className="absolute top-0 left-0 w-full h-full bg-gray-200 animate-pulse"></div>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full z-10"
                    src="https://www.youtube.com/embed/TuOqG4dkSVE?autoplay=1&mute=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
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
    </section>
  );
};

export default About;
