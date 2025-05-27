/* eslint-disable */
// @ts-nocheck
import { notFound } from 'next/navigation';
import { blogPosts } from '@/app/data/blogs';
import BlogPostContent from './BlogPostContent';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.slug,
  }));
}

export default async function BlogPost({ params }) {
  const id = params.id;
  const post = blogPosts.find((post) => post.slug === id);
  
  if (!post) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === id);
  const prevPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  // Get related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3); // Get up to 3 related posts

  return (
    <BlogPostContent
      post={post}
      prevPost={prevPost}
      nextPost={nextPost}
      relatedPosts={relatedPosts}
    />
  );
}
