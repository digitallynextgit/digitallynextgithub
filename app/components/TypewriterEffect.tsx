'use client';

import React, { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { typewriterData } from '@/app/data/typewriter-data';

const TypewriterEffect = () => {
  const [showTag, setShowTag] = useState(false);
  const [currentTag, setCurrentTag] = useState('');
  const [tagVisible, setTagVisible] = useState(false);
  const typewriterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (showTag) {
      timeout = setTimeout(() => {
        setTagVisible(true);
      }, 500);
    } else {
      setTagVisible(false);
    }
    return () => clearTimeout(timeout);
  }, [showTag]);

  return (
    <div 
      className="relative my-8 md:my-12 lg:my-16 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight break-words h-[200px] md:h-[150px] lg:h-[180px] w-full max-w-[85vw] lg:max-w-[55vw] mx-auto flex items-center justify-center" 
      style={{ fontFamily: 'Playfair Display, sans-serif' }}
    >
      <div className="flex flex-col items-center">
        <div className="relative text-black flex flex-col items-center">
          <div ref={typewriterRef} className="inline text-center">
            <Typewriter
              onInit={(typewriter) => {
                let sequence = typewriter;
                
                typewriterData.forEach((item) => {
                  const processedText = item.text
                    .replace(/<span class='styled-word'>/g, '')
                    .replace(/<\/span>/g, '');
                    
                  sequence = sequence
                    .typeString(processedText)
                    .callFunction(() => {
                      setShowTag(true);
                      setCurrentTag(item.tag);
                    })
                    .pauseFor(3000)
                    .callFunction(() => {
                      setShowTag(false);
                    })
                    .deleteAll();
                });

                sequence.start();
              }}
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 25,
                cursor: ''
              }}
            />
          </div>
          <div className="h-12 md:h-14 lg:h-16 flex items-center">
            {showTag && (
              <span 
                key={0}
                className={`text-3xl md:text-4xl lg:text-5xl text-red-600
                  transition-opacity duration-500
                  ${tagVisible ? 'opacity-100' : 'opacity-0'}`}
              >
                {currentTag}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypewriterEffect;
