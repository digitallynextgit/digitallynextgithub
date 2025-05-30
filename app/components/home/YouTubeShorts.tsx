'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { fetchYouTubeShorts } from '@/app/utils/fetchShorts';
import { motion } from 'framer-motion';

interface Short {
  videoId: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  description: string;
}

interface YouTubeShortsProps {
  initialShorts?: Short[];
}

export default function YouTubeShorts({ initialShorts = [] }: YouTubeShortsProps) {
  const [shorts, setShorts] = useState<Short[]>(initialShorts);
  const [loading, setLoading] = useState(initialShorts.length === 0);
  const [error, setError] = useState<string | null>(null);
  const [activeShort, setActiveShort] = useState<string | null>(null);
  const [adBlockDetected, setAdBlockDetected] = useState<boolean>(false);
  const videoRefs = useRef<{[key: string]: HTMLIFrameElement}>({});
  const adBlockCheckRef = useRef<HTMLIFrameElement>(null);

  // Check for ad blockers
  useEffect(() => {
    // Create a hidden test iframe to detect ad blockers
    const testAdBlock = () => {
      if (adBlockCheckRef.current) {
        // If the iframe failed to load or was blocked, this will be triggered
        try {
          const iframeDoc = adBlockCheckRef.current.contentWindow?.document;
          // If we can't access the iframe's document, an ad blocker is likely active
          if (!iframeDoc) {
            setAdBlockDetected(true);
          }
        } catch {
          setAdBlockDetected(true);
        }
      }
    };

    // Check after a short delay
    const timer = setTimeout(testAdBlock, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Auto-play the first short after shorts are loaded
  useEffect(() => {
    if (shorts.length > 0 && !activeShort && !adBlockDetected) {
      // Set a small delay to ensure the DOM is ready
      const timer = setTimeout(() => {
        setActiveShort(shorts[0].videoId);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [shorts, activeShort, adBlockDetected]);

  useEffect(() => {
    // If no initial shorts were provided, fetch them client-side
    if (initialShorts.length === 0) {
      const getShorts = async () => {
        try {
          setLoading(true);
          const data = await fetchYouTubeShorts();
          setShorts(data);
          setLoading(false);
        } catch (err) {
          console.error('Error fetching YouTube shorts:', err);
          setError('Failed to load YouTube shorts');
          setLoading(false);
        }
      };

      getShorts();
    }
  }, [initialShorts.length]);

  // Handle playing a short when clicked
  const handlePlayShort = (videoId: string) => {
    if (adBlockDetected) {
      // If ad blocker is detected, just open the YouTube link
      window.open(getDirectYouTubeLink(videoId), '_blank');
      return;
    }
    
    // If another video is currently playing, stop it
    if (activeShort && activeShort !== videoId) {
      if (videoRefs.current[activeShort]) {
        const iframe = videoRefs.current[activeShort];
        // Properly stop the video by removing and recreating the iframe
        const src = iframe.src;
        iframe.src = "";
        setTimeout(() => {
          if (iframe) iframe.src = src;
        }, 10);
      }
    }
    
    // Set the new active short
    setActiveShort(videoId);
  };

  // Format the embedded URL for YouTube Shorts with standard format
  const getEmbedUrl = (videoId: string) => {
    // Using standard YouTube embed format for Shorts
    return `https://www.youtube.com/embed/${videoId}`;
  };

  // Handle direct link to YouTube for adblock users
  const getDirectYouTubeLink = (videoId: string) => {
    return `https://www.youtube.com/shorts/${videoId}`;
  };

  return (
    <section className="py-16 px-4 bg-white">
      {/* Hidden iframe for ad blocker detection */}
      <iframe 
        ref={adBlockCheckRef}
        src="https://www.youtube.com/embed/placeholder"
        style={{ display: 'none' }}
        title="Ad Block Detector"
      />

      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-[78px] font-black m-0 leading-none tracking-tight">
          Our Latest{" "}
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: `2px #DC3232` }}
          >
            Shorts
          </span>
        </h2>
        <p className="mt-4 text-sm md:text-lg text-[#231942] max-w-xl mx-auto">
          Check out our latest YouTube Shorts for quick insights and inspiration.
        </p>
        {adBlockDetected && (
          <div className="mt-4 text-amber-600 text-sm">
            Ad blocker detected - click on thumbnails to view shorts directly on YouTube
          </div>
        )}
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
        </div>
      ) : error || shorts.length === 0 ? (
        <div className="text-center text-gray-500 py-12">
          <p>{error || "No YouTube Shorts available right now."}</p>
          <Link 
            href="https://www.youtube.com/@digitallynext" 
            className="mt-4 inline-block text-red-600 hover:underline"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Visit our YouTube channel
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {shorts.map((short, index) => (
            <motion.div
              key={short.videoId || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
              data-videoid={short.videoId}
            >
              <div className="relative aspect-[9/16] w-full overflow-hidden">
                {activeShort === short.videoId && !adBlockDetected ? (
                  <div className="w-full h-full">
                    <iframe
                      ref={(el) => {
                        if (el) videoRefs.current[short.videoId] = el;
                      }}
                      width="315" 
                      height="560"
                      src={getEmbedUrl(short.videoId)}
                      title={short.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                    <div className="absolute bottom-2 right-2 z-10">
                      <a 
                        href={getDirectYouTubeLink(short.videoId)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 text-white text-xs rounded-full p-1 px-2 opacity-70 hover:opacity-100"
                      >
                        YouTube
                      </a>
                    </div>
                  </div>
                ) : (
                  <div 
                    className="cursor-pointer relative w-full h-full" 
                    onClick={() => handlePlayShort(short.videoId)}
                  >
                    {short.thumbnail ? (
                      <Image
                        src={short.thumbnail}
                        alt={short.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        quality={90}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
                          <line x1="7" y1="2" x2="7" y2="22"/>
                          <line x1="17" y1="2" x2="17" y2="22"/>
                          <line x1="2" y1="12" x2="22" y2="12"/>
                          <line x1="2" y1="7" x2="7" y2="7"/>
                          <line x1="2" y1="17" x2="7" y2="17"/>
                          <line x1="17" y1="17" x2="22" y2="17"/>
                          <line x1="17" y1="7" x2="22" y2="7"/>
                        </svg>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="rounded-full bg-red-600 p-3 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <span className="text-white text-sm font-medium">
                        {adBlockDetected ? "Open on YouTube" : "Watch Short"}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold line-clamp-2 mb-2">{short.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{short.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {new Date(short.publishedAt).toLocaleDateString()}
                  </span>
                  <a 
                    href={getDirectYouTubeLink(short.videoId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full hover:bg-red-200"
                  >
                    #shorts
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
} 