'use client';

import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
// import Image from 'next/image';

// Updated values with simpler color scheme
const values = [
  {
    title: 'Innovation',
    description: 'We embrace emerging technologies and creative thinking to develop cutting-edge solutions that drive real results.',
    icon: '/images/values/innovation.png',
    elements: ['AI', 'ML', 'IoT', 'AR/VR', 'Blockchain'],
  },
  {
    title: 'Excellence',
    description: 'We set the highest standards for ourselves in everything we do, delivering work that exceeds expectations.',
    icon: '/images/values/excellence.png',
    elements: ['Quality', 'Precision', 'Dedication', 'Mastery', 'Perfection'],
  },
  {
    title: 'Collaboration',
    description: 'We believe the best results come from true partnerships with our clients and teamwork within our agency.',
    icon: '/images/values/collaboration.png',
    elements: ['Teamwork', 'Partnership', 'Communication', 'Unity', 'Synergy'],
  },
  {
    title: 'Integrity',
    description: 'We are honest, transparent, and principled in all our interactions with clients and each other.',
    icon: '/images/values/integrity.png',
    elements: ['Honesty', 'Trust', 'Ethics', 'Transparency', 'Accountability'],
  },
];

export default function OurValues() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeValue, setActiveValue] = useState<number | null>(null);
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  // Transform text size based on scroll position
  const titleScale = useTransform(scrollYProgress, [0, 0.3, 0.6], [0.8, 1.2, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.6, 0.8], [0.5, 1, 1, 0.8]);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (selectedValue !== null && !target.closest('.value-modal') && !target.closest('.value-card')) {
        setSelectedValue(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [selectedValue]);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedValue !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedValue]);

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-red-50 opacity-50"></div>
        <div className="absolute inset-0" aria-hidden="true">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-red-100"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.2 + 0.1,
                filter: 'blur(50px)',
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={ref} className="max-w-7xl mx-auto">
          {/* Section heading with scroll-based size effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.h2 
              ref={titleRef}
              className="text-5xl md:text-6xl font-bold mb-6 relative inline-block"
              style={{ 
                scale: titleScale,
                opacity: titleOpacity
              }}
            >
              <span className="text-red-600">Our Values</span>
            </motion.h2>
            <div className="h-1 w-24 bg-red-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our core values are the fundamental beliefs that guide our actions, 
              unite our teams, and define our approach to every project we undertake.
            </p>
          </motion.div>

          {/* Values grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card relative bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transform transition-all duration-300 hover:shadow-xl cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedValue(index)}
                onMouseEnter={() => setActiveValue(index)}
                onMouseLeave={() => setActiveValue(null)}
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center overflow-hidden">
                      <div className="relative z-10 text-red-600 text-xl font-bold">{value.title[0]}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{value.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6">{value.description}</p>
                  
                  {/* Click indicator */}
                  <div className="flex items-center text-red-600 font-medium">
                    <span>Learn more</span>
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      className="ml-2"
                      animate={activeValue === index ? { x: [0, 5, 0] } : {}}
                      transition={{ repeat: Infinity, duration: 1 }}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </motion.svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Modal Popup */}
          <AnimatePresence>
            {selectedValue !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedValue(null)}
              >
                <motion.div
                  className="value-modal max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="bg-red-600 p-6 text-white">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold">{values[selectedValue].title}</h3>
                      <button 
                        className="p-1 hover:bg-white/10 rounded-full transition-colors"
                        onClick={() => setSelectedValue(null)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <p className="mt-2 text-white/90">{values[selectedValue].description}</p>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-semibold text-xl text-gray-800 mb-4">Key Elements</h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      {values[selectedValue].elements.map((element, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.08 }}
                          className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg"
                        >
                          <div 
                            className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-medium text-sm"
                          >
                            {idx + 1}
                          </div>
                          <span className="font-medium">{element}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <motion.div 
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="/contact" 
                className="relative group overflow-hidden inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-xl font-medium shadow-lg hover:bg-red-700 transition-all duration-300"
              >
                <span className="relative z-10">Work With Us</span>
                <motion.span 
                  className="relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor" />
                  </svg>
                </motion.span>
                
                {/* Animated shine effect */}
                <motion.div 
                  className="absolute inset-0 -z-10 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                  animate={{ translateX: ['0%', '100%'] }}
                  transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}