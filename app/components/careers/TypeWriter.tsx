"use client";
import { useState, useEffect } from 'react';

interface TypewriterText {
  strike: string;
  highlight: string;
}

interface TypeWriterProps {
  texts: TypewriterText[];
  delay?: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ 
  texts, 
  // delay = 3000
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentPair = texts[currentTextIndex];
    const fullText = currentPair.strike + " " + currentPair.highlight;

    if (isTyping) {
      if (displayText.length < fullText.length) {
        const timer = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timer);
      }
    } else {
      const timer = setTimeout(() => {
        setDisplayText("");
        setCurrentTextIndex((current) => (current + 1) % texts.length);
        setIsTyping(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [displayText, currentTextIndex, isTyping, texts]);

  const currentPair = texts[currentTextIndex];
  const strikeLength = currentPair.strike.length;
  const displayStrike = displayText.slice(0, strikeLength);
  const displayHighlight = displayText.slice(strikeLength + 1); // +1 for space

  return (
    <div className="inline transition-opacity duration-300">
      {displayStrike && <span className="line-through">{displayStrike}</span>}
      {displayHighlight && (
        <>
          &nbsp;
          <span>{displayHighlight}</span>
        </>
      )}
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypeWriter; 