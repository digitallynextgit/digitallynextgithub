import React from 'react';
import { blogPosts } from '@/app/data/blogs';
import BlogCard from '@/components/BlogCard';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import type { Metadata } from 'next';
import { buildMetadata, webPageJsonLd } from '@/app/utils/seo';
import Script from 'next/script';

export default function InnewsPage() {
  // Filter posts for Innews category only
  const innewsPosts = blogPosts.filter(post => post.categories.includes('Innews'));

  return (
    <main className="min-h-screen bg-gray-50 lg:mt-[10vw] mt-[16vw]">
      <Script id="ld-innews-webpage" type="application/ld+json">
        {JSON.stringify(
          webPageJsonLd({
            title: 'In News | DigitallyNext',
            description: 'Latest news and media coverage about DigitallyNext.',
            path: '/innews',
          })
        )}
      </Script>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center lg:flex-row flex-col justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">In News</h1>
            <p className="mt-2 text-gray-600">Latest news and media coverage about Digitally Next</p>
          </div>
          <Link 
            href="/blog" 
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Back to Blog"
          >
            <FaArrowLeft />
            <span>Back to Blog</span>
          </Link>
        </div>

        {/* Posts Grid */}
        {innewsPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innewsPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No news articles available at the moment.</p>
          </div>
        )}
      </div>
    </main>
  );
}

export const metadata: Metadata = buildMetadata({
  title: 'In News | DigitallyNext',
  description: 'Latest news and media coverage about DigitallyNext.',
  path: '/innews',
  keywords: ['DigitallyNext news', 'media coverage', 'press'],
});
