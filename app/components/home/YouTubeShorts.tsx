'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

// Fallback shorts for client-side use if API fails completely
const FALLBACK_SHORTS: Short[] = [
  {
    videoId: "W5REyClI5pI",
    title: "The office doesn't feel the same without your favorite colleague! TAG THEM! 👇",
    thumbnail: "https://i.ytimg.com/vi/W5REyClI5pI/hqdefault.jpg",
    publishedAt: new Date().toISOString(),
    description: "Every office has that one person who makes work fun and bearable."
  }
];

export default function YouTubeShorts({ initialShorts = [] }: YouTubeShortsProps) {
  const [shorts, setShorts] = useState<Short[]>(initialShorts.length > 0 ? initialShorts : FALLBACK_SHORTS);
  const [visibleShorts, setVisibleShorts] = useState<Short[]>([]);
  const [loading, setLoading] = useState(initialShorts.length === 0);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeShort, setActiveShort] = useState<string | null>(null);
  const [adBlockDetected, setAdBlockDetected] = useState<boolean>(false);
  const [apiDebug, setApiDebug] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fetchAttempts, setFetchAttempts] = useState(0);
  const videoRefs = useRef<{[key: string]: HTMLIFrameElement}>({});
  const adBlockCheckRef = useRef<HTMLIFrameElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const SHORTS_PER_PAGE = 4;
  const MAX_FETCH_ATTEMPTS = 3;
  
  // Define fetchShorts with useCallback to properly handle dependencies
  const fetchShorts = useCallback(async (offset = 0, limit = SHORTS_PER_PAGE) => {
    // Don't attempt to fetch more if we've reached the maximum attempts
    if (fetchAttempts >= MAX_FETCH_ATTEMPTS && offset > 0) {
      console.warn("Maximum fetch attempts reached, skipping further requests");
      return;
    }

    try {
      if (offset === 0) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }
      setApiDebug(`Fetching shorts (attempt ${fetchAttempts + 1})...`);
      
      // Test the API endpoint directly
      const origin = typeof window !== 'undefined' ? window.location.origin : '';
      const timestamp = Date.now(); // Add timestamp to prevent caching
      const apiUrl = `${origin}/api/youtube-shorts?offset=${offset}&limit=${limit}&t=${timestamp}`;
      
      try {
        // Use AbortController to set a timeout for the fetch
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout
        
        const response = await fetch(apiUrl, {
          signal: controller.signal,
          // Add cache-busting
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          },
          cache: 'no-store'
        });
        
        // Clear the timeout if fetch completes
        clearTimeout(timeoutId);
        
        const responseText = await response.text();
        
        try {
          const data = JSON.parse(responseText);
          if (data && Array.isArray(data) && data.length > 0) {
            // Increment fetch attempts counter for tracking
            setFetchAttempts(prev => prev + 1);
            
            if (offset === 0) {
              setShorts(data);
            } else {
              // Only add new shorts that aren't already in the list
              setShorts(prevShorts => [...prevShorts, ...data.filter(
                newShort => !prevShorts.some(
                  existingShort => existingShort.videoId === newShort.videoId
                )
              )]);
            }
            setApiDebug(`Successfully fetched ${data.length} shorts`);
            setError(null); // Clear any previous errors
          } else {
            setApiDebug(`API returned empty or invalid data: ${JSON.stringify(data).substring(0, 100)}...`);
            
            // For offset 0, if we get no data but no error either, use fallback
            if (offset === 0 && shorts.length === 0) {
              console.log("Using fallback shorts due to empty API response");
              setShorts(FALLBACK_SHORTS);
            }
            
            if (data && data.error) {
              setError(`API Error: ${data.error}`);
            } else if (offset === 0) {
              setError('No YouTube Shorts available. API returned empty data.');
            }
          }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (_error) {
          setApiDebug(`Failed to parse API response: ${responseText.substring(0, 100)}...`);
          
          if (offset === 0 && shorts.length === 0) {
            console.log("Using fallback shorts due to parse error");
            setShorts(FALLBACK_SHORTS);
          }
          
          setError('Invalid API response format');
        }
      } catch (fetchError: unknown) {
        if (fetchError instanceof Error && fetchError.name === 'AbortError') {
          setApiDebug('Fetch timeout - request took too long');
        } else {
          setApiDebug(`Fetch error: ${fetchError instanceof Error ? fetchError.message : String(fetchError)}`);
        }
        
        if (offset === 0 && shorts.length === 0) {
          console.log("Using fallback shorts due to fetch error");
          setShorts(FALLBACK_SHORTS);
        }
        
        setError('Network error while fetching YouTube shorts');
      }
      
      if (offset === 0) {
        setLoading(false);
      } else {
        setLoadingMore(false);
      }
    } catch (err) {
      console.error('Error fetching YouTube shorts:', err);
      
      if (offset === 0 && shorts.length === 0) {
        console.log("Using fallback shorts due to general error");
        setShorts(FALLBACK_SHORTS);
      }
      
      setError(`Failed to load YouTube shorts: ${err instanceof Error ? err.message : String(err)}`);
      setLoading(false);
      setLoadingMore(false);
    }
  // Use only stable dependencies that won't cause infinite loops
  }, [fetchAttempts, MAX_FETCH_ATTEMPTS]);
  
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

  // Update visible shorts when the current index or shorts array changes
  useEffect(() => {
    if (shorts.length > 0) {
      const end = Math.min(currentIndex + SHORTS_PER_PAGE, shorts.length);
      setVisibleShorts(shorts.slice(currentIndex, end));
    }
  }, [currentIndex, shorts]);

  // Initial fetch of shorts
  useEffect(() => {
    // If no initial shorts were provided, fetch them client-side
    if (initialShorts.length === 0) {
      fetchShorts();
    }
  // Remove fetchShorts from dependency array to prevent infinite loops
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
    // This format matches the working short's format
    // Simple embed without extra parameters that might cause issues
    return `https://www.youtube.com/embed/${videoId}`;
  };

  // Handle direct link to YouTube for adblock users
  const getDirectYouTubeLink = (videoId: string) => {
    return `https://www.youtube.com/shorts/${videoId}`;
  };

  // Navigation functions for carousel
  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => Math.max(0, prevIndex - SHORTS_PER_PAGE));
    }
  };

  const goToNext = async () => {
    const nextIndex = currentIndex + SHORTS_PER_PAGE;
    
    // Check if we need to fetch more shorts
    if (nextIndex >= shorts.length - 1 && shorts.length < 20) { // Limit to 20 shorts maximum
      await fetchShorts(shorts.length, SHORTS_PER_PAGE);
    }
    
    if (nextIndex < shorts.length) {
      setCurrentIndex(nextIndex);
    }
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

      <div className="text-center mb-8">
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
        {process.env.NODE_ENV === 'development' && apiDebug && (
          <div className="mt-4 p-2 bg-gray-100 text-left text-xs font-mono overflow-auto max-w-xl mx-auto">
            <p className="font-bold">Debug Info:</p>
            <p>{apiDebug}</p>
          </div>
        )}
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
        </div>
      ) : error && shorts.length === 0 ? (
        <div className="text-center text-gray-500 py-12">
          <p className="mb-2">{error}</p>
          {process.env.NODE_ENV === 'development' && (
            <div className="text-xs text-left bg-gray-100 p-3 mb-4 mx-auto max-w-xl">
              <p className="font-semibold">Developer Note:</p>
              <p>Make sure you have set up these environment variables:</p>
              <ul className="list-disc ml-5 mt-2">
                <li>YT_API_KEY or YOUTUBE_API_KEY - Your YouTube Data API key</li>
                <li>YT_CHANNEL_ID or YOUTUBE_CHANNEL_ID - Your YouTube channel ID (starts with UC...) or handle (starts with @)</li>
              </ul>
            </div>
          )}
          <Link 
            href="https://www.youtube.com/@digitallynext" 
            className="mt-4 inline-block text-red-600 hover:underline"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Visit our YouTube channel
          </Link>
        </div>
      ) : shorts.length > 0 ? (
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          {shorts.length > SHORTS_PER_PAGE && (
            <>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10">
                <button 
                  onClick={goToPrevious}
                  disabled={currentIndex === 0}
                  className={`p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all ${
                    currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  aria-label="Previous shorts"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10">
                <button 
                  onClick={goToNext}
                  disabled={currentIndex + SHORTS_PER_PAGE >= shorts.length && fetchAttempts >= MAX_FETCH_ATTEMPTS}
                  className={`p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all ${
                    currentIndex + SHORTS_PER_PAGE >= shorts.length && fetchAttempts >= MAX_FETCH_ATTEMPTS ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  aria-label="Next shorts"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </>
          )}
          
          {/* Pagination indicator */}
          {shorts.length > SHORTS_PER_PAGE && (
            <div className="text-center mb-4">
              <span className="text-sm text-gray-500">
                Showing {Math.min(currentIndex + 1, shorts.length)}-{Math.min(currentIndex + SHORTS_PER_PAGE, shorts.length)} of {shorts.length}
              </span>
            </div>
          )}

          {/* Shorts carousel */}
          <div 
            ref={carouselRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            {visibleShorts.map((short, index) => (
              <motion.div
                key={short.videoId || `short-${index}-${currentIndex}`}
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
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                        onError={() => {
                          // If iframe fails to load, show error and provide link to YouTube
                          setAdBlockDetected(true);
                          setActiveShort(null);
                        }}
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
                        <>
                          <Image
                            src={short.thumbnail}
                            alt={short.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            quality={90}
                            onError={(e) => {
                              // Fallback if image fails to load
                              const target = e.target as HTMLImageElement;
                              target.onerror = null; // Prevent infinite loop
                              target.src = `https://i.ytimg.com/vi/${short.videoId}/hqdefault.jpg`;
                            }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="rounded-full bg-red-600/80 p-4">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                          </div>
                        </>
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
          
          {loadingMore && (
            <div className="flex justify-center mt-8">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-600"></div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-400">No shorts available right now</p>
          <Link 
            href="https://www.youtube.com/@digitallynext"
            className="mt-4 inline-block px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit our YouTube Channel
          </Link>
        </div>
      )}
    </section>
  );
} 