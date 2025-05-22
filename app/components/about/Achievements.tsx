'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Stats data
const stats = [
  {
    value: 150,
    suffix: '+',
    label: 'Clients Worldwide',
    description: "Trust us with their digital presence across various industries and markets.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    value: 500,
    suffix: '+',
    label: 'Projects Completed',
    description: "From small businesses to enterprise solutions, we've delivered consistent excellence.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    value: 25,
    suffix: '+',
    label: 'Industry Awards',
    description: "Recognized for our innovative approach and exceptional results in the digital space.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 5H17V3H7V5H5C3.9 5 3 5.9 3 7V8C3 10.55 4.92 12.63 7.39 12.94C8.02 14.44 9.37 15.57 11 15.9V19H7V21H17V19H13V15.9C14.63 15.57 15.98 14.44 16.61 12.94C19.08 12.63 21 10.55 21 8V7C21 5.9 20.1 5 19 5ZM5 8V7H7V10.82C5.84 10.4 5 9.3 5 8ZM12 14C10.35 14 9 12.65 9 11V5H15V11C15 12.65 13.65 14 12 14ZM19 8C19 9.3 18.16 10.4 17 10.82V7H19V8Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    description: "Our clients love working with us, which is why most of our business comes from referrals.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM15.5 11C16.33 11 17 10.33 17 9.5C17 8.67 16.33 8 15.5 8C14.67 8 14 8.67 14 9.5C14 10.33 14.67 11 15.5 11ZM8.5 11C9.33 11 10 10.33 10 9.5C10 8.67 9.33 8 8.5 8C7.67 8 7 8.67 7 9.5C7 10.33 7.67 11 8.5 11ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="currentColor" />
      </svg>
    ),
  },
];

// Counter component for animated number counting with spring physics
function Counter({ 
  value, 
  suffix, 
  duration = 1500 
}: { 
  value: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(countRef, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const incrementTime = duration / end;
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);
  
  return (
    <motion.span 
      ref={countRef} 
      className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: "spring", 
        damping: 10, 
        stiffness: 100,
        delay: 0.1
      }}
    >
      {count}{suffix}
    </motion.span>
  );
}

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  return (
    <section ref={sectionRef} className="py-24 bg-white text-gray-800 relative overflow-hidden">
      {/* Particle animation background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-red-100"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
              ],
              y: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
              ],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
            }}
          />
        ))}
      </div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section heading with animated underline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 relative inline-block tracking-tight text-gray-900">
            <span>Our Achievements</span>
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-red-500"
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8 leading-relaxed">
            Our journey of innovation and excellence has led to remarkable results.
            Here are some highlights of what we&apos;ve accomplished so far.
          </p>
        </motion.div>
        
        {/* Stats cards with hover 3D effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              className="relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-lg"
              style={{ 
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Background gradient that shifts on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100"
                animate={activeCard === index ? {
                  background: [
                    'linear-gradient(to bottom right, rgba(254,226,226,0.3), rgba(254,202,202,0.2))',
                    'linear-gradient(to bottom right, rgba(254,202,202,0.3), rgba(252,165,165,0.2))',
                    'linear-gradient(to bottom right, rgba(254,226,226,0.3), rgba(254,202,202,0.2))'
                  ]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Card content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 p-4 flex items-center justify-center shadow-inner text-white">
                    <motion.div 
                    className=''
                      animate={activeCard === index ? { 
                        rotate: [0, 15, 0, -15, 0],
                      } : {}}
                      transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
                    >
                      {stat.icon}
                    </motion.div>
                  </div>
                </div>
                
                <div className="text-center mb-4 relative">
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <h3 className="text-xl font-semibold mt-2 mb-3 text-gray-800">{stat.label}</h3>
                  
                  <AnimatePresence>
                    {activeCard === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-gray-600 text-sm overflow-hidden"
                      >
                        {stat.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Bottom decoration */}
                <div className="mt-auto">
                  <motion.div 
                    className="h-1 bg-red-200 rounded-full overflow-hidden"
                    initial={{ width: "30%" }}
                    animate={activeCard === index ? { width: "100%" } : { width: "30%" }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="h-full w-full bg-gradient-to-r from-red-500 to-red-600"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA section with animated button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <a 
              href="/case-studies" 
              className="group relative overflow-hidden inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-medium shadow-lg hover:shadow-red-200 transition-all duration-300"
            >
              <span className="relative z-10">Explore Our Case Studies</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor" />
                </svg>
              </motion.span>
              
              {/* Shine effect on hover */}
              <motion.div 
                className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] translate-x-[-100%]"
                animate={{ translateX: '200%' }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 