'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost, BlogCategory } from '@/types/blog';

type Props = {
  posts: BlogPost[];
  categories: BlogCategory[];
};

export default function BlogListingClient({ posts, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'all'>('all');

  const filteredPosts = posts.filter((post) => {
    if (activeCategory === 'all') {
      return post.categories.some((cat: BlogCategory) => categories.includes(cat));
    }
    return post.categories.includes(activeCategory);
  });

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeCategory === 'all'
              ? 'bg-red-500 text-white'
              : 'bg-white hover:bg-blue text-gray-700'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeCategory === category
                ? 'bg-red-500 text-white'
                : 'bg-white hover:bg-blue text-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id} aria-label={`Read blog: ${post.title}`}>
            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {post.image && (
                <div className="relative h-56">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category: BlogCategory) => (
                    <span key={category} className="px-2 py-1 bg-red-500 text-sm text-white rounded">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}