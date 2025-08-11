'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const leadTeam = [
  {
    name: 'ANMOL',
    position: 'Sr.Video Editor',
    image: '/teams/1.png'
  },
  {
    name: 'SHIVAM',
    position: 'Performance Marketer',
    image: '/teams/Shivam.webp'
  },
  {
    name: 'MRIDUL',
    position: 'WEB DEVELOPER',
    image: '/teams/mridul.webp'
  },
  {
    name: 'PANKAJ',
    position: 'Sr.Manager',
    image: '/teams/4.png'
  },
  {
    name: 'ANJALI',
    position: 'Video Editor',
    image: '/teams/anjali.webp'
  },
  {
    name: 'SUDHANSHU',
    position: 'Sr.Web Developer',
    image: '/teams/2.png'
  }
];

export default function TeamLeadSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-red-500 text-white py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-4">
          {/* Left side with heading and description - stacks on mobile */}
          <div className="w-full lg:w-2/5 mb-10 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4 tracking-tight">
                LEADING
                <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-tight">TEAM</span>
              </h2>
              <p className="text-base md:text-lg mx-auto lg:mx-0 max-w-2xl lg:max-w-none lg:pr-12 mt-4 md:mt-6">
                Our leading team combines technical expertise, commitment, and a positive attitude. 
                With advanced skills, they lead by example, always sharing their experience and, 
                of course, a few gray hairs of wisdom.
              </p>
            </motion.div>
          </div>

          {/* Right side with team members - responsive grid */}
          <div className="w-full lg:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-4 md:gap-6 lg:gap-6">
              {leadTeam.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 6,
                    transition: { 
                      duration: 0.4,
                      ease: "easeOut"
                    } 
                  }}
                  style={{
                    transformOrigin: "center center",
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                    willChange: "transform"
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="bg-red-700 rounded-xl sm:rounded-3xl overflow-hidden transform-gpu lg:h-full h-[400px] lg:w-full w-72 mx-auto flex flex-col"
                >
                  <div className="p-3 sm:p-4 md:p-5 lg:p-6 pb-2 sm:pb-3 md:pb-4">
                    <h3 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-bold mb-0.5 sm:mb-1 line-clamp-1">{member.name}</h3>
                    <p className="text-xs sm:text-xs lg:text-sm font-medium text-white/80 line-clamp-1">{member.position}</p>
                  </div>
                  <div 
                    className="relative flex-grow overflow-hidden h-[330px] lg:h-[250px]" 
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 288px, (max-width: 768px) 30vw, (max-width: 1024px) 20vw, 15vw"
                      className={`object-cover transition-transform duration-700 ${hoveredIndex === index ? 'scale-110' : ''}`}
                      style={{ 
                        objectPosition: "center 30%"
                      }}
                    />
                    {hoveredIndex === index && (
                      <div className="absolute inset-0"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative dot - adjusted for responsiveness */}
      <div className="absolute top-12 right-4 md:right-auto md:left-2/3 w-3 h-3 md:w-4 md:h-4 bg-red-400 rounded-full"></div>
      <div className="absolute bottom-8 left-4 md:left-1/4 w-2 h-2 md:w-3 md:h-3 bg-red-400/70 rounded-full hidden sm:block"></div>
    </section>
  );
} 