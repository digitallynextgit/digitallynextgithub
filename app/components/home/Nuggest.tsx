'use client'

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

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
const final = [
  { r: 0, x: -530, y: 0 },
  { r: 0, x: -205, y: 0 },
  { r: 0, x: 130, y: 0 },
  { r: 0, x: 450, y: 0 },
];

const Nuggest = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  // Framer Motion scroll progress for the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"], // 0 at section top, 1 at section center
  });

  // Create individual motion values for each card at the component level
  const card0X = useTransform(scrollYProgress, [0, 1], [initial[0].x, final[0].x]);
  const card0Y = useTransform(scrollYProgress, [0, 1], [initial[0].y, final[0].y]);
  const card0R = useTransform(scrollYProgress, [0, 1], [initial[0].r, final[0].r]);
  
  const card1X = useTransform(scrollYProgress, [0, 1], [initial[1].x, final[1].x]);
  const card1Y = useTransform(scrollYProgress, [0, 1], [initial[1].y, final[1].y]);
  const card1R = useTransform(scrollYProgress, [0, 1], [initial[1].r, final[1].r]);
  
  const card2X = useTransform(scrollYProgress, [0, 1], [initial[2].x, final[2].x]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [initial[2].y, final[2].y]);
  const card2R = useTransform(scrollYProgress, [0, 1], [initial[2].r, final[2].r]);
  
  const card3X = useTransform(scrollYProgress, [0, 1], [initial[3].x, final[3].x]);
  const card3Y = useTransform(scrollYProgress, [0, 1], [initial[3].y, final[3].y]);
  const card3R = useTransform(scrollYProgress, [0, 1], [initial[3].r, final[3].r]);

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

  return (
    <section
      ref={sectionRef}
      className="min-h-[600px] flex flex-col items-center justify-center py-20 bg-white transition-colors duration-700"
    >
      <h2 className="text-5xl font-black mb-12 text-[#231942] tracking-tight">
        THIS IS WHAT{' '}
        <span
          className="text-transparent"
          style={{ WebkitTextStroke: '2px #231942' }}
        >
          WE DO
        </span>
      </h2>
      <div className="relative flex items-center justify-center w-full max-w-6xl min-h-[350px]" style={{ height: 400 }}>
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className=" w-full h-full absolute left-1/2 top-1/2 group"
            style={{
              ...getMotionStyle(i),
              translateX: '-50%',
              translateY: '-50%',
              zIndex: 10 + i,
              willChange: 'transform',
            }}
            transition={{ type: 'spring', stiffness: 80, damping: 30 }}
          >
            <div className="transition-transform duration-300 group-hover:scale-110 flex items-center justify-center w-full h-full">
              <Image src={card.img} alt="Nuggest" className="w-full h-full object-contain rounded-2xl" fill/>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Nuggest;
