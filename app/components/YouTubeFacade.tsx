'use client';

import { useState } from 'react';
import Image from 'next/image';

interface YouTubeFacadeProps {
    videoId: string;
    title?: string;
    className?: string;
}

/**
 * YouTube Facade - Lazy loads YouTube iframe only when user clicks
 * This saves ~500ms of JS execution time on initial page load
 */
export default function YouTubeFacade({ videoId, title = 'Video', className = '' }: YouTubeFacadeProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    const handleClick = () => {
        setIsLoaded(true);
    };

    if (isLoaded) {
        return (
            <iframe
                className={`absolute top-0 left-0 w-full h-full z-10 ${className}`}
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
        );
    }

    return (
        <button
            onClick={handleClick}
            className="absolute top-0 left-0 w-full h-full z-10 cursor-pointer group"
            aria-label={`Play ${title}`}
        >
            <Image
                src={thumbnailUrl}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </div>
        </button>
    );
}
