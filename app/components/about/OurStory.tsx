'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const timeline = [
  {
    year: '2010',
    title: 'Founded in India',
    description: 'Digitally Next is totally in the game to help their clients evolve and make up for what has been lost or discovered in the past 2-3 years by enabling and empowering the Next in them with the ecosystem of forthcoming Digital-Social Media, AI and Performance Marketing.',
  },
  {
    year: '2015',
    title: 'Expansion to Digital Marketing',
    description: 'We expanded our services to include comprehensive digital marketing solutions for businesses of all sizes. In short, it is just like you and me —> the "Next" as brilliant as possible:"I have a dream as a vision to realize."',
  },
  {
    year: '2017',
    title: 'Global Recognition',
    description: 'Not just a simple erstwhile agency, but a "Next Enabler" Partner in Progress (PiP) to the wonderful Stars, Starlets, Underdogs, Dark horses, and Unicorns who are keen to shine the brightest as the new age large corporations, Small and Medium businesses, Startups, Brand in Making, celebrities, andself-employed professionals.',
  },
  {
    year: '2019',
    title: 'International Expansion',
    description: 'Your browser does not support the video tag. Digitally Next is a necessary Partner in Progress (not just an agency) right from the creation of brand identity to its building and its short and long-term monetization campaigns by nurturing them with the right manifestation they need. And then the brand resonates in an unpredictable and fragmented world. ',
  },
  {
    year: '2021',
    title: 'Technological Innovation',
    description: 'Launch of our proprietary AI-driven marketing platform, revolutionizing campaign management and analytics.',
  },
];

export default function OurStory() {
  const storyRef = useRef(null);
  const timelineRef = useRef(null);
  const isStoryInView = useInView(storyRef, { once: true, amount: 0.3 });
  const isTimelineInView = useInView(timelineRef, { once: true, amount: 0.2 });

  return (
    <section id="our-story" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Story intro */}
        <motion.div 
          ref={storyRef}
          initial={{ opacity: 0 }}
          animate={isStoryInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-7xl font-bold mb-6">Our Story</h2>
          <div className="h-1 w-16 bg-[#dc3333] mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Since our founding, we&apos;ve been on a mission to redefine what&apos;s possible in the digital space.
            What started as a small team with big dreams has grown into a global agency delivering
            impactful digital solutions.
          </p>
        </motion.div>

        {/* Story timeline */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200"></div>
          
          {/* Timeline events */}
          {timeline.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isTimelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-24 flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline content */}
              <div className="md:w-1/2 flex justify-center md:justify-end px-4 md:px-8">
                <div className={`max-w-sm ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#dc3333] text-white font-bold mb-3 md:mb-4">
                    {event.year}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
              </div>
              
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#dc3333] z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* Image gallery */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isTimelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="relative h-60 md:h-80 rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105">
            <Image 
              src="/flow/1.png" 
              alt="Team collaboration" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="relative h-60 md:h-80 rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105">
            <Image 
              src="/flow/2.png" 
              alt="Office space" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="relative h-60 md:h-80 rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105">
            <Image 
              src="/flow/3.png" 
              alt="Team meeting" 
              fill 
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 