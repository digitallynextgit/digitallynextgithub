'use client'

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const cards = [
  {
    img: '/home/nuggets/1.webp',
  },
  {
    img: '/home/nuggets/2.webp',
  },
  {
    img: '/home/nuggets/3.webp',
  },
  {
    img: '/home/nuggets/4.webp',
  },
];

// Initial center state (cards stacked and rotated)
const initial = [
  { r: -18, x: 0, y: 0 },
  { r: 12, x: 0, y: 0 },
  { r: -8, x: 0, y: 0 },
  { r: 20, x: 0, y: 0 },
];

// Final spread out state (horizontally spaced)
const getFinalPosition = (vw: number) => {
  // Scale positions based on viewport width
  const scaleFactor = vw / 1920; // Base scale reference width
  const basePositions = [
    { r: 0, x: -530, y: 0 },
    { r: 0, x: -205, y: 0 },
    { r: 0, x: 130, y: 0 },
    { r: 0, x: 450, y: 0 },
  ];
  
  return basePositions.map(pos => ({
    r: pos.r,
    x: pos.x * scaleFactor,
    y: pos.y
  }));
};

const Nuggest = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [viewportSize, setViewportSize] = useState({ width: 1280, height: 800 });
  const [finalPositions, setFinalPositions] = useState(getFinalPosition(1280));

  // Check viewport size and update positions
  useEffect(() => {
    const updateViewportSize = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      setViewportSize({ width: vw, height: vh });
      setFinalPositions(getFinalPosition(vw));
      setIsMobile(vw < 768);
    };
    
    updateViewportSize();
    window.addEventListener('resize', updateViewportSize);
    
    return () => window.removeEventListener('resize', updateViewportSize);
  }, []);

  // Framer Motion scroll progress for the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  // Create individual motion values for each card at the component level
  const card0X = useTransform(scrollYProgress, [0, 1], [initial[0].x, finalPositions[0].x]);
  const card0Y = useTransform(scrollYProgress, [0, 1], [initial[0].y, finalPositions[0].y]);
  const card0R = useTransform(scrollYProgress, [0, 1], [initial[0].r, finalPositions[0].r]);
  
  const card1X = useTransform(scrollYProgress, [0, 1], [initial[1].x, finalPositions[1].x]);
  const card1Y = useTransform(scrollYProgress, [0, 1], [initial[1].y, finalPositions[1].y]);
  const card1R = useTransform(scrollYProgress, [0, 1], [initial[1].r, finalPositions[1].r]);
  
  const card2X = useTransform(scrollYProgress, [0, 1], [initial[2].x, finalPositions[2].x]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [initial[2].y, finalPositions[2].y]);
  const card2R = useTransform(scrollYProgress, [0, 1], [initial[2].r, finalPositions[2].r]);
  
  const card3X = useTransform(scrollYProgress, [0, 1], [initial[3].x, finalPositions[3].x]);
  const card3Y = useTransform(scrollYProgress, [0, 1], [initial[3].y, finalPositions[3].y]);
  const card3R = useTransform(scrollYProgress, [0, 1], [initial[3].r, finalPositions[3].r]);

  // Create an array of motion values for each card
  const cardMotions = [
    { x: card0X, y: card0Y, r: card0R },
    { x: card1X, y: card1Y, r: card1R },
    { x: card2X, y: card2Y, r: card2R },
    { x: card3X, y: card3Y, r: card3R },
  ];

  // Now just returns already calculated values
  const getMotionStyle = (i: number) => {
    return {
      x: cardMotions[i].x,
      y: cardMotions[i].y,
      rotate: cardMotions[i].r,
    };
  };

  // Calculate card size based on viewport size
  const cardSize = Math.min(viewportSize.width * 0.22, 340); // 22% of viewport width, max 340px

  return (
    <section
      ref={sectionRef}
      className="md:min-h-[60vh] flex flex-col items-center justify-center py-20 bg-white transition-colors duration-700"
    >
      <h2 className="md:text-5xl text-4xl text-center md:  font-black mb-12 text-[#231942] tracking-tight">
      FREE DIGITAL {' '}
        <span
          className="text-transparent"
          style={{ WebkitTextStroke: '2px #231942' }}
        >
          NUGGETS
        </span>
      </h2>

      {/* Mobile Grid Layout */}
      {isMobile ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl px-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative aspect-square w-full group"
            >
              <Image 
                src={card.img} 
                alt="Nuggest" 
                className="w-full h-full md:object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105" 
                fill
              />
            </div>
          ))}
        </div>
      ) : (
        /* Desktop Animated Layout */
        <div className="relative flex items-center justify-center w-full max-w-[120vw] mx-auto" style={{ height: '50vh', minHeight: '350px', maxHeight: '600px' }}>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 group"
              style={{
                ...getMotionStyle(i),
                translateX: '-50%',
                translateY: '-50%',
                width: cardSize,
                height: cardSize,
                zIndex: 10 + i,
                willChange: 'transform',
              }}
              transition={{ type: 'spring', stiffness: 80, damping: 30 }}
            >
              <div className="transition-transform duration-300 group-hover:scale-110 flex items-center justify-center w-full h-full">
                <Link href="/nuggets" className="w-full h-full relative block">
                <Image 
                  src={card.img} 
                  alt="Nuggest" 
                  className="object-contain rounded-2xl" 
                  fill
                />
                </Link>
              </div>
              
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Nuggest;
