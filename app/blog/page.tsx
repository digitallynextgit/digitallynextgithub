import type { Metadata } from 'next';
import { buildMetadata, webPageJsonLd } from '@/app/utils/seo';
import Script from 'next/script';

import React from 'react';
import { blogPosts } from '@/app/data/blogs';
import { BlogCategory } from '@/types/blog';
import BlogListingClient from './BlogListingClient';

// Categories for blog page (excluding Innews)
const BLOG_CATEGORIES: BlogCategory[] = ['Latest', 'Blog', 'Featured'];

export default function BlogPage() {
  const basePosts = blogPosts.filter(post => !post.categories.includes('Innews'));

  return (
    <main className="min-h-screen bg-gray-50 lg:mt-[10vw] mt-[20vw]">
      <Script id="ld-blog-webpage" type="application/ld+json">
        {JSON.stringify(
          webPageJsonLd({
            title: 'Blog | DigitallyNext',
            description: 'Insights on digital marketing, SEO, content, and growth.',
            path: '/blog',
          })
        )}
      </Script>
      <BlogListingClient posts={basePosts} categories={BLOG_CATEGORIES} />
    </main>
  );
}

export const metadata: Metadata = buildMetadata({
  title: 'Blog | DigitallyNext',
  description: 'Insights on digital marketing, SEO, content, and growth from DigitallyNext.',
  path: '/blog',
  keywords: ['DigitallyNext blog', 'digital marketing insights', 'SEO tips', 'content marketing'],
});
