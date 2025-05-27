'use client';

import Link from 'next/link';
import { useState } from 'react';
import { blogPosts, blogCategories } from '@/app/data/blogs';

export default function Sidebar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof blogPosts>([]);
  const recentPosts = blogPosts.slice(0, 5); // Get 5 most recent posts

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase();
    const results = blogPosts.filter(post => 
      post.title.toLowerCase().includes(query) || 
      post.excerpt.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query)
    );
    setSearchResults(results);
  };

  // Count posts per category
  const categoryCount = blogCategories.reduce((acc, category) => {
    acc[category] = blogPosts.filter(post => post.categories.includes(category)).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <aside className="w-64 px-4 bg-main">
      {/* Search */}
      <div className="mb-8">
        <form onSubmit={handleSearch}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button 
              type="submit"
              className="absolute right-2 top-2 bg-red-700 text-white px-3 py-1 rounded text-sm"
            >
              Search
            </button>
          </div>
        </form>

        {/* Search Results */}
        {searchResults.length > 0 && searchQuery && (
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Search Results:</h4>
            <ul className="space-y-2">
              {searchResults.map((post) => (
                <li key={post.id}>
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="text-sm hover:text-red-700 block"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Recent Posts */}
      <div className="mb-8">
        <h3 className="font-bold text-xl mb-4">Recent Posts</h3>
        <ul className="space-y-2">
          {recentPosts.map((post) => (
            <li key={post.id}>
              <Link 
                href={`/blog/${post.slug}`} 
                className="text-sm hover:text-red-700"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="font-bold text-xl mb-4">Categories</h3>
        <ul className="space-y-2">
          {blogCategories.map((category) => (
            <li key={category} className="flex items-center justify-between">
              <Link 
                href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-sm hover:text-red-700"
              >
                {category}
              </Link>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {categoryCount[category] || 0}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
