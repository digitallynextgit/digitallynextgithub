"use client";
import { useEffect, useRef } from "react";

const VideoSection = () => {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  // const mobileVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const setupVideoObserver = (videoRef: React.RefObject<HTMLVideoElement>) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && videoRef.current) {
              // Try to load and play the video
              const playVideo = async () => {
                try {
                  if (videoRef.current) {
                    await videoRef.current.load();
                    const playPromise = videoRef.current.play();
                    if (playPromise !== undefined) {
                      playPromise.catch((error) => {
                        console.log("Video autoplay failed:", error);
                      });
                    }
                  }
                } catch (error) {
                  console.log("Error loading/playing video:", error);
                }
              };
              playVideo();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 } // Reduced threshold for earlier loading
      );

      if (videoRef.current) {
        observer.observe(videoRef.current);
      }

      return observer;
    };

    const desktopObserver = setupVideoObserver(desktopVideoRef);


    return () => {
      if (desktopVideoRef.current) {
        desktopObserver.unobserve(desktopVideoRef.current);
      }

    };
  }, []);

  return (
    <section className="w-full relative hidden lg:block mx-auto lg:px-[8vw] ">
      {/* Desktop Video */}
      <video
        ref={desktopVideoRef}
        className="w-full h-full object-contain hidden lg:block"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
      >
        <source src="/what.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoSection;
