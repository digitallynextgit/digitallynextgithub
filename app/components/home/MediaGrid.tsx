'use client';

import Image from 'next/image';

// Selected fewer high-quality images for better performance
const images = [
    { src: 'https://images.unsplash.com/photo-1541845157-a6d2d100c931?auto=format&fit=crop&w=1350&q=80' },
    { src: 'https://images.unsplash.com/photo-1588282322673-c31965a75c3e?auto=format&fit=crop&w=1351&q=80' },
    { src: 'https://images.unsplash.com/photo-1588117472013-59bb13edafec?auto=format&fit=crop&w=500&q=60' },
    { src: 'https://images.unsplash.com/photo-1587588354456-ae376af71a25?auto=format&fit=crop&w=1350&q=80', className: 'col-span-2' },
    { src: 'https://images.unsplash.com/photo-1558980663-3685c1d673c4?auto=format&fit=crop&w=1000&q=60' },
    { src: 'https://images.unsplash.com/photo-1588499756884-d72584d84df5?auto=format&fit=crop&w=2134&q=80', className: 'row-span-2' },
    { src: 'https://images.unsplash.com/photo-1588492885706-b8917f06df77?auto=format&fit=crop&w=1951&q=80', className: 'col-span-2 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1572914857229-37bf6ee8101c?auto=format&fit=crop&w=1951&q=80', className: 'col-span-2' },
    { src: 'https://images.unsplash.com/photo-1541845157-a6d2d100c931?auto=format&fit=crop&w=1350&q=80' },
];

export default function MediaGrid() {
    return (
        <section className="pb-6">
            <div className=" px-4">
                

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[250px] gap-4">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden rounded-lg group hover:shadow-xl transition-all duration-300 ${img.className || ''}`}
                        >
                            <Image
                                src={img.src}
                                alt={`Media image ${index + 1}`}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                priority={index < 4} // Prioritize loading the first 4 images
                                unoptimized
                            />

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-white text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors text-sm inline-block">
                                        View More
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                
            </div>
        </section>
    );
}
