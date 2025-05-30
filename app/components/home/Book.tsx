"use client";

import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
// import Image from "next/image";
import { siteConfig } from "@/app/config";

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
              {/* Mobile Phone Frame */}
              <div className="relative mx-auto w-full">
                {/* Phone frame - using CSS */}
                <div className="mx-auto relative w-[250px] h-[500px] rounded-[36px] overflow-hidden border-[14px] border-black bg-black shadow-xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-b-[14px] z-20"></div>
                  
                  {/* Video inside the phone screen */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src="/phone.mp4" type="video/mp4" />
                    </video>
                  </div>
                  
                  {/* Home button or bottom indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[90px] h-[4px] bg-gray-200 rounded-full z-20"></div>
                </div>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="text-center lg:text-left bg-[#fff] border-black border-[1px] md:p-10 p-6 md:pl-20 rounded-3xl md:ml-[-250px]  -mt-10 md:-mt-60 w-[100%]">
              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">
                Where Time meets Imagination
              </h2>
              <p className="md:text-md text-sm mb-8">
                At <strong>DigitallyNext</strong> walls don&apos;t just hold art —
                they hold eras. We&apos;ve witnessed the world shift from iPods to
                infinite playlists, from pixelated photos to portrait mode
                perfection. And through every wave of change, we&apos;ve stayed
                rooted — not in trends, but in timeless thinking. <br/> <br/>Our space
                breathes with symbols of ambition, cultures, and civilizations —
                quiet reminders that great ideas outlive tools, and vision
                transcends platforms. Here, every brief is a beginning, every
                brand a legacy in the making. <br/> <br/>We don&apos;t just build campaigns. We
                build what tomorrow will remember.
              </p>

              {/* Social Media Links */}
              <div className="space-y-4">
                <p className="font-medium text-lg">Follow us on:</p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a
                    href="https://www.instagram.com/digitallynext?igsh=dzBveGl2bnFveW1m"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition"
                  >
                    <FaInstagram className="text-[#E1306C] text-2xl" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/digitallynext/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition"
                  >
                    <FaLinkedin className="text-[#0077B5] text-2xl" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={siteConfig.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition"
                  >
                    <FaYoutube className="text-[#FF0000] text-2xl" />
                    <span>YouTube</span>
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
