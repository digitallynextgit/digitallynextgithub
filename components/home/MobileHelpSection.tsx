'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HelpOption {
  id: string;
  text: string;
  icon?: string;
}

const helpOptions: HelpOption[] = [
  { id: 'visual-ai', text: 'Visual AI', icon: '🎨' },
  { id: 'content-ai', text: 'Content AI', icon: '📝' },
  { id: 'd2d', text: 'D2D', icon: '🔄' },
  { id: 'cross-broder', text: 'Cross Broder PR', icon: '🌐' },
  { id: 'story-telling', text: 'Story Telling', icon: '📖' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { 
    opacity: 0, 
    x: -50,  
    y: 0 
  },
  show: { 
    opacity: 1, 
    x: 0,    
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
};

export default function MobileHelpSection() {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const fullText = "What's Next?";
  const [index, setIndex] = useState(0);

  // Typing animation effect
  useEffect(() => {
    if (!isVisible) return;
    
    if (index <= fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, index));
        setIndex(index + 1);
      }, 150);

      return () => clearTimeout(timeout);
    }
  }, [index, isVisible, fullText]);

  // Help options animation loop effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setIndex(0);
      setDisplayText('');
      setTimeout(() => setIsVisible(true), 500);
    }, 4000); // Reduced to 4 seconds for better user experience

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-4 py-8 space-y-8 lg:hidden min-h-[400px]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-6 text-center"
      >
        What can I help with?
      </motion.div>



      <div className="mt-8 flex items-center gap-4 bg-gray-100 rounded-full p-4">
        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
          +
        </div>
        <div className="font-semibold">
          {displayText}
          <span className="animate-blink">|</span>
        </div>
        <div className="ml-auto">
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <div className="h-[200px] relative">
          {isVisible && (
            <motion.div
              className="flex flex-wrap gap-3 justify-center absolute w-full"
              variants={container}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0 }}
            >
              {helpOptions.map((option) => (
                <motion.div
                  key={option.id}
                  variants={item}
                  className="bg-gray-100 rounded-full px-4 py-2 flex items-center gap-2"
                >
                  {option.icon && <span>{option.icon}</span>}
                  <span>{option.text}</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
}
