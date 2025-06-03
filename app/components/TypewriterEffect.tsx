'use client';

import React, { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { typewriterData } from '@/app/data/typewriter-data';

interface TypewriterEffectProps {
  onImageChange?: (image: string) => void;
}

const TypewriterEffect = ({ onImageChange }: TypewriterEffectProps) => {
  const [showTag, setShowTag] = useState(false);
  const [currentTag, setCurrentTag] = useState('');
  const [currentImage, setCurrentImage] = useState('');
  const [, setTagVisible] = useState(false);
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

  // Notify parent component when image changes
  useEffect(() => {
    if (onImageChange && currentImage) {
      onImageChange(currentImage);
    }
  }, [currentImage, onImageChange]);

  return (
    <div 
      className="relative w-full max-w-[85vw] lg:max-w-[75vw] mx-auto"
      style={{ 
        fontFamily: 'Playfair Display, sans-serif',
        height: '280px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div 
        className="w-full"
        style={{
          position: 'relative',
          height: '200px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Typewriter text container */}
        <div 
          ref={typewriterRef}
          className="w-full text-center"
          style={{
            height: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            lineHeight: 1.2,
            fontWeight: 'bold'
          }}
        >
          <Typewriter
            onInit={(typewriter) => {
              let sequence = typewriter;
              
              typewriterData.forEach((item,) => {
                const processedText = item.text
                  .replace(/<span class='styled-word'>/g, '')
                  .replace(/<\/span>/g, '');
                  
                // Set the image before starting to type the text
                sequence = sequence
                  .callFunction(() => {
                    setCurrentImage(item.image);
                  })
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

        {/* Tag container - always present but only visible when needed */}
        <div 
          style={{
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: showTag ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
        >
          <span 
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              color: '#dc3333',
              fontWeight: 'bold'
            }}
          >
            {currentTag}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TypewriterEffect;
