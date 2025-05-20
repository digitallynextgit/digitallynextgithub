"use client";

import React from "react";
import { FaSpotify, FaApple, FaPodcast } from "react-icons/fa";
// import { SiPocketcasts, SiCastbox } from 'react-icons/si';
import Image from "next/image";

// Dynamically import the PodcastMockScreen component with SSR disabled

const Book = () => {
  return (
    <>
      {/* Podcast Video/Image above the section */}
      <div className="w-full relative">
        <div className="w-full h-[200px] md:h-[600px] overflow-hidden">
          <video
            className="w-full h-full md:object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/home/dn-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Podcast Info Section with Light Background */}
      <section className="relative bg-white pb-6">
        <div className="relative z-10 max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            {/* Left Column - Phone Mock */}
            <div className="hidden md:block relative mx-auto max-w-[320px] lg:max-w-[350px] -mt-40 md:-mt-60 -rotate-6">
              <Image
                src="/home/pod.webp"
                alt="Deepak Goel Podcast"
                width={400}
                height={800}
              />
            </div>

            {/* Right Column - Text Content */}
            <div className="text-center lg:text-left bg-[#fff] border-black border-[1px] md:p-10 p-6 md:pl-20 rounded-3xl md:ml-[-250px]  -mt-10 md:-mt-60 w-[100%]">
              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">
                What NEXT ?
              </h2>
              <p className="md:text-md text-sm mb-8">
                <strong>DigitallyNext</strong> is a powerful video series hosted
                by Deepak, recognized as a thought leader and pioneer in digital
                transformation. Through engaging conversations with industry
                experts and changemakers, this series delivers actionable
                insights and forward-thinking strategies to help you thrive in
                the digital world. Whether you&apos;re a business leader, innovator,
                or digital enthusiast, <strong>DigitallyNext</strong> empowers
                you to navigate the next big leap in digital growth and
                innovation.
              </p>

              {/* Listen Platforms */}
              <div className="space-y-4">
                <p className="font-medium text-lg">Listen on:</p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a
                    href="#"
                    className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition"
                  >
                    <FaSpotify className="text-[#1DB954] text-2xl" />
                    <span>Spotify</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition"
                  >
                    <FaApple className="text-[#000000] text-2xl" />
                    <span>Podcasts</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition"
                  >
                    <FaPodcast className="text-[#FF8C00] text-2xl" />
                    <span>Google Podcasts</span>
                  </a>
                </div>
              </div>

              {/* Subscribe Button */}
              {/* <div className="mt-10">
                                <button className="bg-[#5d7a64] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition">
                                    SUBSCRIBE NOW
                                </button>
                            </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Book;
