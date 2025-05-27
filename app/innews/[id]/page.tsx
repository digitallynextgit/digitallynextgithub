'use client';

import { notFound } from 'next/navigation';
import { blogPosts } from '@/app/data/blogs';
import BlogPostContent from '@/app/blog/[id]/BlogPostContent';

interface Props {
  params: {
    id: string;
  };
}

export default function NewsPost({ params }: Props) {
  const post = blogPosts.find(p => p.id === parseInt(params.id));
  
  // Get related news posts (other posts in the Innews category)
  const relatedPosts = blogPosts
    .filter(p => 
      p.id !== parseInt(params.id) && 
      p.categories.includes('Innews')
    )
    .slice(0, 3);

  // Get next and previous news posts
  // const currentIndex = blogPosts.findIndex(p => p.id === parseInt(params.id));
  const newsPosts = blogPosts.filter(p => p.categories.includes('Innews'));
  const currentNewsIndex = newsPosts.findIndex(p => p.id === parseInt(params.id));
  
  const prevPost = currentNewsIndex > 0 ? newsPosts[currentNewsIndex - 1] : null;
  const nextPost = currentNewsIndex < newsPosts.length - 1 ? newsPosts[currentNewsIndex + 1] : null;

  if (!post || !post.categories.includes('Innews')) {
    notFound();
  }

  return (
    <BlogPostContent 
      post={post}
      prevPost={prevPost}
      nextPost={nextPost}
      relatedPosts={relatedPosts}
    />
  );
}
