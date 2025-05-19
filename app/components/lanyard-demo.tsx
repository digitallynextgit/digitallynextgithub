'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Use dynamic import with ssr: false for Three.js components
const LanyardDemo = dynamic(() => import('./home/LanyardDemo'), { ssr: false });

export default function LanyardDemoPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-bold mb-4">3D Lanyard Demo</h1>
            <p className="text-gray-600 max-w-2xl text-center mb-8">
                This is a simplified version of the lanyard component using Three.js placeholders.
                The actual implementation would use real 3D models and textures.
            </p>

            <div className="w-full max-w-4xl h-[500px] rounded-xl overflow-hidden border border-gray-300 shadow-lg">
                <LanyardDemo />
            </div>

            <div className="mt-8 max-w-2xl">
                <h2 className="text-xl font-semibold mb-2">Instructions</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Click and drag to rotate the view</li>
                    <li>Scroll to zoom in and out</li>
                    <li>The lanyard card will swing with simulated physics</li>
                </ul>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 className="font-semibold text-blue-700 mb-2">Required files:</h3>
                    <p className="text-sm">
                        For a complete implementation, you need to add:<br />
                        1. <code className="bg-gray-100 px-1 py-0.5 rounded">public/assets/card.glb</code> - 3D model for the card<br />
                        2. <code className="bg-gray-100 px-1 py-0.5 rounded">public/assets/lanyard.png</code> - Texture for the lanyard
                    </p>
                </div>
            </div>
        </main>
    );
} 