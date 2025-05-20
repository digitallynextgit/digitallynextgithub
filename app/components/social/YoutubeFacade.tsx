import { useState } from "react";

interface YoutubeFacadeProps {
  videoId: string;
  className?: string;
}

export default function YoutubeFacade({ videoId, className = "" }: YoutubeFacadeProps) {
  const [show, setShow] = useState(false);
  return show ? (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
      allow="autoplay; encrypted-media"
      allowFullScreen
      className={`w-full h-64 rounded-xl ${className}`}
      title="YouTube video"
      loading="lazy"
      width="100%"
      height="100%"
      style={{ border: 0 }}
    />
  ) : (
    <button
      className={`relative w-full h-64 bg-black rounded-xl flex items-center justify-center overflow-hidden ${className}`}
      onClick={() => setShow(true)}
      aria-label="Play video"
      type="button"
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt="YouTube thumbnail"
        className="absolute inset-0 w-full h-full object-cover rounded-xl"
        loading="lazy"
      />
      <span className="z-10 text-white text-4xl">▶</span>
    </button>
  );
} 