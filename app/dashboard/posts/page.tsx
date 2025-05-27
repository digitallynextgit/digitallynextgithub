'use client';

import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/app/data/blogs';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PostsPage() {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const handleDelete = async (postId: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    
    setIsDeleting(true);
    setSelectedPost(postId);

    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        router.refresh();
      } else {
        alert('Failed to delete post');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Failed to delete post');
    } finally {
      setIsDeleting(false);
      setSelectedPost(null);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Posts</h1>
        <Link
          href="/dashboard/posts/new"
          className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors"
        >
          Add New Post
        </Link>
      </div>

      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6"
          >
            {/* Featured Image */}
            {post.image && (
              <div className="relative w-full md:w-48 h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
              
              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((category) => (
                  <span
                    key={category}
                    className="px-2 py-1 bg-red-500 text-sm text-white rounded"
                  >
                    {category}
                  </span>
                ))}
              </div>

              {/* Meta */}
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>{post.author}</span>
                <span className="mx-2">•</span>
                <time>
                  {new Date(post.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Link
                  href={`/dashboard/posts/edit/${post.id}`}
                  className="text-blue hover:text-blue-600"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(post.id.toString())}
                  disabled={isDeleting && selectedPost === post.id.toString()}
                  className="text-red-500 hover:text-red-600 disabled:opacity-50"
                >
                  {isDeleting && selectedPost === post.id.toString() ? 'Deleting...' : 'Delete'}
                </button>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-gray-600 hover:text-gray-800"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}

        {blogPosts.length === 0 && (
          <div className="text-center py-12 text-gray-600">
            No blog posts found. Create your first post!
          </div>
        )}
      </div>
    </div>
  );
}
