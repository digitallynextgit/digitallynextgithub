"use client";

import React from 'react';
import Hero from '@/app/components/podcast/Hero';
// import Categories from '@/app/components/podcast/Categories';
import SupportMetrics from '@/app/components/podcast/SupportMetrics';
import FeaturedEpisode from '@/app/components/podcast/FeaturedEpisode';
// import ExploreCategories from '@/app/components/podcast/ExploreCategories';
import LeadingPodcaster from '@/app/components/podcast/LeadingPodcaster';
import Community from '@/app/components/podcast/Community';
// import ArtistHighlight from '@/app/components/podcast/ArtistHighlight';
// import CategoryTags from '@/app/components/podcast/CategoryTags';


const page = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Decorative background pattern */}
            <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-repeat " style={{ backgroundImage: "url('/podcast/pattern-bg.svg')" }}></div>
            </div>

            {/* Fixed category tags at top */}
            {/* <div className="sticky top-0 z-50">
                <CategoryTags />
            </div> */}

            {/* Main content */}
            <div className="relative z-10">
                <Hero />
                <SupportMetrics />
                <FeaturedEpisode />
                {/* <ExploreCategories /> */}
                <LeadingPodcaster />
                <Community />
                {/* <ArtistHighlight /> */}
            </div>

            {/* Fixed category tags at bottom */}
            {/* <div className="sticky bottom-0 z-50">
                <CategoryTags />
            </div> */}
        </div>
    );
};

export default page; 