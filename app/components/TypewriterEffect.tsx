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
      }, 500); // 500ms delay
    } else {
      setTagVisible(false);
    }
    return () => clearTimeout(timeout);
  }, [showTag]);

  return (
    <div className="relative my-[3vw] text-[7vw] md:text-[5vw] lg:text-[4.5vw] font-bold leading-[11vw] md:leading-[4.5vw] lg:leading-[6vw] break-words min-h-[15vh] md:min-h-[12vh] w-full max-w-[85vw] lg:max-w-[55vw] mx-auto" style={{ fontFamily: 'Playfair Display, sans-serif' }}>
      <div className="flex flex-col">
        <div className="relative text-black flex flex-col">
          <div ref={typewriterRef} className="inline">
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
          {showTag && (
            <div className="inline-block ml-2">
              <span 
                key={0}
                className={`text-[7vw] lg:text-[4.5vw] text-red-600
                  transition-opacity duration-500
                  ${tagVisible ? 'opacity-100' : 'opacity-0'}`}
              >
                {currentTag}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TypewriterEffect;
